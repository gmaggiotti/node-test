buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
console.log("read: "+ buf.toString("utf-8",7,11));