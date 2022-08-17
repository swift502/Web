export function logError(message)
{
    console.error(`\u001b[91m${message}\u001b[0m`);
}

export function extractYml(glob)
{
    return glob[0]['default'];
}