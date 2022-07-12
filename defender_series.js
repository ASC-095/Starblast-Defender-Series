var ships = [];

//Tier 1
var Defender_V2_101 = '{"name":"Defender V2","level":1,"model":1,"size":1.1,"specs":{"shield":{"capacity":[100,125],"reload":[1,3]},"generator":{"capacity":[50,70],"reload":[10,15]},"ship":{"mass":100,"speed":[80,130],"rotation":[60,100],"acceleration":[50,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-63,-60,-50,-20,10,40,75,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,25,35,35,35,15,0],"height":[0,7,17,25,25,20,10,0],"texture":[6,2,63,4,3,10,18],"propeller":true,"laser":{"damage":[15,20],"rate":1,"type":1,"speed":[120,140],"number":1,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-30,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-5,10,30,80],"z":[0,0,0,0,2]},"width":[0,12,17,14,0],"height":[0,12,15,15,0],"propeller":false,"texture":[9,9,9,4]},"side":{"section_segments":10,"offset":{"x":30,"y":20,"z":-7},"position":{"x":[-22,-10,-2,-2,-5,-8,-20],"y":[-100,-70,-40,-10,20,40,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,20,17,10,1],"height":[0,20,25,25,25,25,0],"texture":[2,3,3,63,10,11]}},"wings":{"top":{"doubleside":true,"offset":{"x":35,"y":20,"z":0},"length":[30],"width":[90,30],"angle":[20],"position":[-10,0],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Defender V2","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[100,125],"reload":[1,3]},"generator":{"capacity":[50,70],"reload":[10,15]},"ship":{"mass":100,"speed":[80,130],"rotation":[60,100],"acceleration":[50,100]}},"shape":[1.386,1.769,1.611,1.449,1.335,1.248,1.156,1.093,1.079,1.103,1.147,1.214,1.31,1.4,1.435,1.493,1.586,1.589,1.512,1.461,1.436,1.52,1.627,1.786,1.885,1.653,1.885,1.786,1.627,1.52,1.436,1.461,1.512,1.589,1.586,1.493,1.435,1.4,1.31,1.214,1.147,1.103,1.079,1.093,1.156,1.248,1.335,1.449,1.611,1.769],"lasers":[{"x":0,"y":-1.386,"z":0,"angle":0,"damage":[15,20],"rate":1,"type":1,"speed":[120,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":1.885}}';

//Tier 2
var Delta_Defender_201 = '{"name":"Delta-Defender","level":2,"model":1,"size":1.3,"specs":{"shield":{"capacity":[110,160],"reload":[6,8]},"generator":{"capacity":[70,100],"reload":[20,35]},"ship":{"mass":80,"speed":[90,115],"rotation":[70,90],"acceleration":[110,120]}},"bodies":{"cockpit":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-20,"z":10},"position":{"x":[0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[-7,-3,0,5,3]},"width":[3,12,18,16,3],"height":[3,6,8,6,3],"texture":[9]},"cockpit2":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-10,"z":12},"position":{"x":[0,0,0,0],"y":[-10,0,10,40],"z":[0,0,5,3]},"width":[5,18,16,3],"height":[5,12,10,5],"texture":[9,2,11]},"propulsor":{"section_segments":8,"offset":{"x":0,"y":35,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,10,20,30,40,30],"z":[0,0,0,0,0]},"width":[5,15,10,10,10,0],"height":[15,15,15,15,10,0],"texture":[63,63,4,5,12],"propeller":true},"bumps":{"section_segments":8,"offset":{"x":40,"y":40,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-10,0,10,40,45],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,5,0],"height":[0,25,28,22,15,0],"texture":[63]},"gunsupport":{"section_segments":8,"offset":{"x":30,"y":-40,"z":5},"position":{"x":[-30,-20,-10,0,0,0],"y":[-40,-15,-5,10,40,55],"z":[-20,-20,-10,0,0,0]},"width":[3,5,8,4,5,0],"height":[3,5,8,12,15,0],"texture":63},"gun":{"section_segments":8,"offset":{"x":0,"y":-60,"z":-15},"position":{"x":[0,0,0,0],"y":[-20,-10,5,10],"z":[0,0,0,0]},"width":[3,7,8,3],"height":[3,7,8,3],"texture":[6,4,5],"laser":{"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"angle":15,"error":0}}},"wings":{"main":{"doubleside":false,"offset":{"x":0,"y":-25,"z":-15},"length":[50],"width":[180,70,90],"angle":[0,190],"position":[30,90,15],"texture":11,"bump":{"position":30,"size":20}}},"typespec":{"name":"Delta-Defender","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[110,160],"reload":[6,8]},"generator":{"capacity":[70,100],"reload":[20,35]},"ship":{"mass":80,"speed":[90,115],"rotation":[70,90],"acceleration":[110,120]}},"shape":[2.21,1.986,1.629,1.455,1.403,1.368,1.263,1.192,1.095,1.016,0.964,0.93,0.949,1.07,1.119,1.242,1.438,1.606,1.827,2.033,2.415,2.9,2.859,2.68,2.56,2.49,2.56,2.68,2.859,2.9,2.415,2.033,1.827,1.606,1.438,1.242,1.119,1.07,1.04,0.93,0.964,1.016,1.095,1.192,1.263,1.368,1.403,1.455,1.629,1.986],"lasers":[{"x":0,"y":-2.08,"z":-0.39,"angle":0,"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"spread":15,"error":0,"recoil":0}],"radius":2.9}}';
var Trident_Defender_202 = '{"name":"Trident-Defender","level":2,"model":2,"size":1.2,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0]},"width":[1,25,15,30,30,20,10],"height":[1,20,20,30,30,10,0],"texture":[1,1,10,2,3],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":50,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"angle":0,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"offset":{"x":0,"y":60,"z":0},"length":[80,30],"width":[70,50,60],"texture":[4,63],"angle":[0,0],"position":[10,-20,-50],"bump":{"position":-10,"size":15}},"winglets":{"length":[30,20],"width":[10,30,0],"angle":[50,20],"position":[90,80,50],"texture":[63],"bump":{"position":10,"size":30},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Trident-Defender","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,0.516,0.457,0.415,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,0.415,0.457,0.516,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.804}}';

//Tier 3

//Tier 4

//Tier 5

//Tier 6

//Tier 7

ships.push(Defender_V2_101);
ships.push(Delta_Defender_201);
ships.push(Trident_Defender_202);

var map =
"  9    9      4    4    3          3    357   5     58    7 \n"+
"   7    6 2 9  9    93              93    34    3    35    5\n"+
"    4 8    8    7    7   6  6        69     9    93    3    \n"+
"236    5  915    47      6  6     7     7    79    9    8 4 \n"+
"   3    3  1 25                 8        57   49    68    79\n"+
"    9  9 8    8         6    6            25    4     57    \n"+
"7    6    6  1           6666               2 9 9935    5   \n"+
" 4 9  469             8               8     98     83    2  \n"+
"  945 99   1 8   8       8    8    8  8        99    8    8 \n"+
"3  793   9   8         8                       9 6    679  5\n"+
"89  9 8     2     4                            9  3 7  347  \n"+
"  6    6 1           8          8              8   9 5    4 \n"+
"   4    36    4             8                       6 2    9\n"+
"    93  1                      2         8             8    \n"+
"79    9           7    3       4  4   4            5    5   \n"+
" 4781  1                9                       8   3    256\n"+
"   4      4   7     7                                83     \n"+
"3   1 5   4                          4     4          689   \n"+
" 9           7           4       9    9       4          7  \n"+
"  69             4   4            7                       47\n"+
"    6                     8   5     4     4      4         9\n"+
"4    4         4           5                8    4     82   \n"+
" 9        4            3          4     5            4   8  \n"+
"  7 1    1         9     4  4           9                 56\n"+
"    111        7    7               69     4     4    4     \n"+
"46 1            5            9   7                          \n"+
"  4  1                   8   5   9            7           9 \n"+
"   9       7              5   2                            7\n"+
"    7  7      7       3                    2                \n"+
"4                 9                    8        7       2   \n"+
" 2   11            7                    6            7   8 3\n"+
"  7 11     8   4                    4                       \n"+
"    17    7                 5   9              7            \n"+
"                             2   7                       4  \n"+
"  4                      8                    7           9 \n"+
"   94   8     77     6    5               5       7 7      7\n"+
"    79   7            3                   72        7  5    \n"+
"57                9                    9      77        3 6 \n"+
"            7                      6          7          8 4\n"+
"          7                         4              7        \n"+
"9    93                     5               7               \n"+
" 79    9      7         3    2        77        7        5  \n"+
"  47  1       3          8                7       77      24\n"+
"    4 3              6           8                    82    \n"+
"2     3                          8   8   88            58   \n"+
" 7   33         8    3     3                       36       \n"+
"   33    8                                    7            4\n"+
"6  3 6    5          3                     8     9          \n"+
" 4  3 3 3  3     8        7        8   88               72  \n"+
"  9 33 9            8       7                       58    7 \n"+
"   7      2                 7  7   33                 5    5\n"+
"    4 8    7    7       3      3            77   93    3    \n"+
"2      5    5    4         33          7      9    9      4 \n"+
"   3    3    25                  33  7         7    6 9    9\n"+
"    9    824    3              3           4    4     57    \n"+
"7    6    6 93   9    83      3             2     35    5   \n"+
" 4    36     7    69    8               8    7 3    2    2  \n"+
"  945    5    478  46          69   6    5     69    8    8 \n"+
"   7 3    2    945    5    47    6   3      6    6    5 9  5\n"+
"79    8    823   93    25    4    4   9      4    3 7  3 7  ";

this.options = {
 root_mode: "team",
 map_name: "Defender Series",
 map_size: 60,
 starting_ship: 101,
 max_level: 7,
 max_players: 120,
 ships: ships,
 reset_tree: true,
 soundtrack: "argon.mp3",
 friendly_colors: 2,
 mines_destroy_delay: 3000,
 custom_map: map,
 lives: 4,
};


this.tick = function(game) {

};
