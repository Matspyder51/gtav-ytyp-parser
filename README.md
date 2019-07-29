# gtav-ytyp-parser
 
This is a small tool that will parse ytyp files to find all availables props of an IPL to use with : `EnableInteriorProp | 0x55E86AF2712B36A1` native

(https://www.dev-c.com/nativedb/func/info/55e86af2712b36a1)

How to Use :
======
1. Extract downloaded files in a folder
2. Open a new CMD in this folder
3. Run `npm install`
4. Change the result format if you want : (parser.js line 6) :
		
		{$name} will be the name of the InteriorProp

	`const resultFormat = "\n\"{$name}\",";`
5. With OpenIV or Codewalker, export your ytyp file in Meta/XML (Export as Meta/XML)
6. In your CMD, write : 

	`node parser.js -f [Previously exported file]`

	#### (`-o` flag is available to define output file, by default : ./output.txt)

	`node parser.js -f [Previously exported file] -o NewDLC.txt`

## All results are Hashes :

```
"hash_30240D11", "0x30240D11",
"hash_A3C89BB2", "0xA3C89BB2",
```

This is because your version of OpenIV/Codewalker isn't up to date, wait till an update is available or translate hashes to text yourself

Example :
======
Penthouse of the Casino in the new DLC
```
"set_pent_tint_shell",
"set_pent_media_bar_open",
"set_pent_spa_bar_open",
"set_pent_dealer",
"set_pent_nodealer",
"set_pent_media_bar_closed",
"set_pent_spa_bar_closed",
"set_pent_pattern_01",
"set_pent_pattern_02",
"set_pent_pattern_03",
"set_pent_pattern_04",
"set_pent_pattern_05",
"set_pent_pattern_06",
"set_pent_pattern_07",
"set_pent_pattern_08",
"set_pent_pattern_09",
"set_pent_arcade_modern",
"set_pent_arcade_retro",
"set_pent_clutter_03",
"set_pent_clutter_02",
"set_pent_clutter_01",
"set_pent_lounge_blocker",
"set_pent_guest_blocker",
"set_pent_office_blocker",
"set_pent_cine_blocker",
"set_pent_spa_blocker",
"set_pent_bar_blocker",
"set_pent_bar_party_after",
"set_pent_bar_clutter",
"set_pent_bar_party_2",
"set_pent_bar_light_01",
"set_pent_bar_light_0",
"set_pent_bar_light_02",
"set_pent_bar_party_0",
"set_pent_bar_party_1",
```