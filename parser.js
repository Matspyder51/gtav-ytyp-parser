const fs = require("fs");
const parseString = require("xml2js").parseString;
var argv = require("minimist")(process.argv.slice(2));

// Change here to modify result ({$name} is the name of the item)
const resultFormat = "\n\"{$name}\",";

async function getEntries(buff, output) {
	return new Promise((resolve) => {
		parseString(buff, (_, result) => {
			let jsonResult;
			try {
				jsonResult = JSON.parse(JSON.stringify(result));
			} catch(e) {
				throw "File Unreadable, Please check if your file is in XML";
			}
			for (var node in jsonResult) {
				for (var n in jsonResult[node]) {
					if (n == "archetypes") {
						let res = returnEntityDef(jsonResult[node][n]);
						fs.writeFile(output, res, () => {
							resolve(output);
						});
					}
				}
			}
		});
	});
}

function returnEntityDef(obj) {
	let datas = "";
	for (let i = 0; i < Object.values(obj[0])[0].length; i++) {
		let ob = Object.values(obj[0])[0][i];
		if (ob.$.type == "CMloArchetypeDef") {
			for (let y = 0; y < Object.values(ob.entitySets[0].Item).length; y++) {
				let item = Object.values(ob.entitySets[0].Item)[y];
				let newText = resultFormat.replace('{$name}', item.name[0]);
				datas += newText
			}
		}
	}
	return datas;
}

function Exec() {
	if (argv.f == null || typeof argv.f != "string")
		throw "-f parameter isn't optional";

	let buffer = fs.readFileSync(argv.f, "utf8");
	getEntries(buffer, argv.o || 'output.txt').then((outfile) => {
		console.log(`Results availables in ${outfile}`);
	});
}

Exec();