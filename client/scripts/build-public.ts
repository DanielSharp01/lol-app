import fetch from 'node-fetch';
import chalk from 'chalk';
import fs from 'fs-extra'
import decompress from 'decompress';
import decompressTargz from 'decompress-targz';

(async () => {
    const version = (await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then(res => res.json()))[0];
    let clientVersion = 'None';
    if (fs.existsSync('../public/version.json')) {
        clientVersion = fs.readJsonSync('../public/version.json').version;
        if (clientVersion === version) {
            console.log(`Current DataDragon version is up to date`, chalk.greenBright(clientVersion));
            return;
        }
    }

    console.log(`Current DataDragon version is out of date`, chalk.redBright(clientVersion), '>', chalk.yellowBright(version));

    if (!fs.existsSync(`./tmp/dragontail/${version}`)) {
        console.log(`Downloading DataDragon@${version}`);
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/dragontail-${version}.tgz`);
        if (fs.existsSync('./tmp')) {
            console.log('Cleaning up existing tmp directory.')
            fs.rmdirSync('./tmp', { recursive: true });
        }

        fs.mkdirSync('./tmp');
        await new Promise<void>((resolve, reject) => {
            const fileStream = fs.createWriteStream('./tmp/dragontail.tgz');
            res.body.pipe(fileStream);
            res.body.on("error", (err) => {
                reject(err);
            });
            fileStream.on("finish", function() {
                resolve();
            });
        });
        console.log('Downloaded tgz file.');
        await new Promise((resolve, reject) => decompress('./tmp/dragontail.tgz', './tmp/dragontail', { plugins: [ decompressTargz() ]}).then(resolve).catch(reject));
        console.log('Extracted tgz file.');
    } else {
        console.log('Skipping download! Requested version is already in tmp.');
    }

    function copyDDDir(ddDir: string, publicDir: string) {
        fs.rmdirSync(`../public/${publicDir}`, { recursive: true });
        fs.copySync(`./tmp/dragontail/${ddDir}`, `../public/${publicDir}`);
    }
    copyDDDir(`${version}/img/champion`, 'champion');
    copyDDDir(`${version}/img/item`, 'item');
    copyDDDir(`${version}/img/passive`, 'passive');
    copyDDDir(`${version}/img/profileicon`, 'profileicon');
    copyDDDir(`${version}/img/spell`, 'spell');
    copyDDDir(`img`, 'img');
    console.log('Copied over directories.');
    fs.writeJsonSync('../public/version.json', { version });
    console.log('version.json updated');
    fs.rmdirSync('./tmp', { recursive: true });
    console.log('tmp cleaned up');
    console.log(chalk.green('DataDragon successfully updated!'));
})();