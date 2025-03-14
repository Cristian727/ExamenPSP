const { exec } = require('child_process');

const backupPath = `backups/backup_logs_${new Date().toISOString().replace(/:/g, '-')}.tar.gz`;

exec(`tar -czf ${backupPath} logs/`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error al hacer el backup: ${stderr}`);
    } else {
        console.log(`Backup guardado como ${backupPath}`);
    }
});
