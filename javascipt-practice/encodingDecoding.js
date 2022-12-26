function base64Decoding(input) {
    input = input.split('=');
    // Eliminating = padded strings from the input
    input = input[0];
    console.log(`Step 1 : Removing padded = strings : `, input);
    let base64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    let base64Nums = [...input].map(ele => base64Table.indexOf(ele));
    console.log(`Step 2 : Extract Base64 values for every character of the input string : `, base64Nums);
    let bin6 = base64Nums.map(num => {
        let bin = num.toString(2)
        while (bin.length < 6) {
            bin = '0' + bin;
        }
        return bin;
    });
    console.log(`Step 3 : Converting the above Decimals into 6 bit binaries : `, bin6);
    let bin6Group = bin6.join('');
    console.log(`Step 4 : Merging all the 6 bit binaries  : `, bin6Group);
    const bin8 = [];
    for (let i = 0; i < bin6Group.length; i = i + 8) {
        bin8.push(bin6Group.slice(i, i + 8));
    }
    bin8.pop();
    console.log(`Step 5 : Divide the binaries into 8 bit groups : `, bin8);
    let ASCIINums = bin8.map(num => parseInt(num, 2));
    console.log(`Step 6 : Convert 8 bit binaries into Decimals : `, ASCIINums);
    let finalStr = ASCIINums.map(num => String.fromCharCode(num)).join('');
    console.log(finalStr);

}










function base64Encoding(input) {
    // converting the input string into ASCII numbers
    let asciiNums = [...input].map(char => char.charCodeAt()); // converting into ASCII
    console.log("Step 1 : Converting into ASCII : ", asciiNums);
    // converting the ASCII numbers into 8 bit binaries
    let binaries = asciiNums.map(num => {
        let bin = num.toString(2);
        while (bin.length < 8) {
            bin = '0' + bin;
        }
        return bin;
    });
    console.log("Step 2 : Converting ASCII Nums into Binaries  : ", binaries);
    // Merge all the binaries and group them into 6 bits
    binaries = binaries.join(''); // Merging all the bits into string
    console.log("Step 3 : Merge all the binaries and group them into 6 bits  : ", binaries);
    const bin6 = [];
    for (let i = 0; i < binaries.length; i = i + 6) {
        bin6.push(binaries.slice(i, i + 6));
    }
    let count = 0;
    while (bin6[bin6.length - 1].length < 6) {
        bin6[bin6.length - 1] = bin6[bin6.length - 1] + '0';
        ++count;
    }
    console.log(`6 Bits Binaries : `, bin6);
    const baseNums = bin6.map(num => parseInt(num, 2));
    console.log(baseNums);
    let base64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let finalStr = baseNums.map(num => base64Table[num]).join('');
    if (count == 2) finalStr += '=';
    if (count == 4) finalStr += '==';
    console.log(finalStr);
}

base64Encoding("shamshad");

// dmVkYW5zaHU=

base64Decoding("c2hhbXNoYWQ=")
