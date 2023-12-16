var simplifyDirectoryPath = function(directories) {
    const stack = [];
    for (const dir of directories) {
        if (dir === "." || !dir) {
            continue;
        } else if (dir === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(dir);
        }
    }
    return "/" + stack.join("/");
};

const input = prompt('Enter input: ');
const array = input.split('/');
const result = simplifyDirectoryPath(array);

console.log(result);