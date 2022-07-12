var shiptree = [];

//Tier 1
var Defender_V2_101 = '{"name":"Defender V2","level":1,"model":1,"size":1.1,"specs":{"shield":{"capacity":[100,125],"reload":[1,3]},"generator":{"capacity":[50,70],"reload":[10,15]},"ship":{"mass":100,"speed":[80,130],"rotation":[60,100],"acceleration":[50,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-63,-60,-50,-20,10,40,75,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,25,35,35,35,15,0],"height":[0,7,17,25,25,20,10,0],"texture":[6,2,63,4,3,10,18],"propeller":true,"laser":{"damage":[15,20],"rate":1,"type":1,"speed":[120,140],"number":1,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-30,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-5,10,30,80],"z":[0,0,0,0,2]},"width":[0,12,17,14,0],"height":[0,12,15,15,0],"propeller":false,"texture":[9,9,9,4]},"side":{"section_segments":10,"offset":{"x":30,"y":20,"z":-7},"position":{"x":[-22,-10,-2,-2,-5,-8,-20],"y":[-100,-70,-40,-10,20,40,65],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,20,17,10,1],"height":[0,20,25,25,25,25,0],"texture":[2,3,3,63,10,11]}},"wings":{"top":{"doubleside":true,"offset":{"x":35,"y":20,"z":0},"length":[30],"width":[90,30],"angle":[20],"position":[-10,0],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Defender V2","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[100,125],"reload":[1,3]},"generator":{"capacity":[50,70],"reload":[10,15]},"ship":{"mass":100,"speed":[80,130],"rotation":[60,100],"acceleration":[50,100]}},"shape":[1.386,1.769,1.611,1.449,1.335,1.248,1.156,1.093,1.079,1.103,1.147,1.214,1.31,1.4,1.435,1.493,1.586,1.589,1.512,1.461,1.436,1.52,1.627,1.786,1.885,1.653,1.885,1.786,1.627,1.52,1.436,1.461,1.512,1.589,1.586,1.493,1.435,1.4,1.31,1.214,1.147,1.103,1.079,1.093,1.156,1.248,1.335,1.449,1.611,1.769],"lasers":[{"x":0,"y":-1.386,"z":0,"angle":0,"damage":[15,20],"rate":1,"type":1,"speed":[120,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":1.885}}';

//Tier 2
var Cyclops_201 = '{"name":"Cyclops","level":2,"model":1,"size":1.4,"specs":{"shield":{"capacity":[150,215],"reload":[4,6]},"generator":{"capacity":[35,50],"reload":[11,19]},"ship":{"mass":160,"speed":[65,85],"rotation":[50,70],"acceleration":[50,70]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-100,-105,-100,-50,-20,10,30,55,75,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,20,25,30,30,25,20,0],"height":[0,15,20,30,30,30,30,25,15,0],"propeller":true,"texture":[17,63,3,10,1,63,63,12,17],"laser":{"damage":[11,22],"rate":2,"type":1,"speed":[150,175],"number":1,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":20,"z":19},"position":{"x":[0,0,0,0,0,0,0],"y":[-75,-30,0,30,60],"z":[0,0,0,0,-2.5]},"width":[0,13,15,12,5],"height":[0,17,20,18,5],"propeller":false,"texture":[9,9,9,4,4]},"side":{"section_segments":10,"offset":{"x":40,"y":10,"z":-10},"position":{"x":[-30,-10,5,10,5,-10,-25],"y":[-100,-70,-40,-10,20,50,80],"z":[0,0,0,0,0,0,10]},"width":[0,20,20,20,20,20,0],"height":[15,20,25,25,25,25,0],"texture":[4,63,3,4,4,63]},"side2":{"section_segments":12,"offset":{"x":20,"y":-30,"z":0},"position":{"x":[-12,-12,-5,5,7.5,5,0],"y":[-50,-45,-27.5,0,20,70,105],"z":[0,0,-5,0,0,0,0]},"width":[0,10,15,17.5,17.5,15,0],"height":[0,5,20,25,25,25,0],"angle":0,"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"length":[50,30],"width":[15,100,50],"angle":[-10,30],"position":[0,20,25],"doubleside":true,"offset":{"x":0,"y":-10,"z":0},"bump":{"position":30,"size":5},"texture":[11,3]}},"typespec":{"name":"Cyclops","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[150,215],"reload":[4,6]},"generator":{"capacity":[35,50],"reload":[11,19]},"ship":{"mass":160,"speed":[65,85],"rotation":[50,70],"acceleration":[50,70]}},"shape":[2.385,2.536,2.422,2.299,2.22,2.176,2.162,2.065,2.006,1.98,1.981,2.125,2.123,2.123,2.172,2.262,2.385,2.371,2.264,2.199,2.194,2.257,2.36,2.718,2.708,2.665,2.708,2.718,2.36,2.257,2.194,2.199,2.264,2.371,2.385,2.262,2.172,2.123,2.123,2.125,1.981,1.98,2.006,2.065,2.162,2.176,2.22,2.299,2.422,2.536],"lasers":[{"x":0,"y":-2.38,"z":0,"angle":0,"damage":[11,22],"rate":2,"type":1,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.718}}';
var Trident_Defender_202 = '{"name":"Trident-Defender","level":2,"model":2,"size":1.2,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0]},"width":[1,25,15,30,30,20,10],"height":[1,20,20,30,30,10,0],"texture":[1,1,10,2,3],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":50,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"angle":0,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"offset":{"x":0,"y":60,"z":0},"length":[80,30],"width":[70,50,60],"texture":[4,63],"angle":[0,0],"position":[10,-20,-50],"bump":{"position":-10,"size":15}},"winglets":{"length":[30,20],"width":[10,30,0],"angle":[50,20],"position":[90,80,50],"texture":[63],"bump":{"position":10,"size":30},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Trident-Defender","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,0.516,0.457,0.415,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,0.415,0.457,0.516,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.804}}';

//Tier 3
var Omega_Defender_301 = '{"name":"Omega-Defender","level":3,"model":1,"size":1.5,"specs":{"shield":{"capacity":[180,250],"reload":[4,6]},"generator":{"capacity":[70,120],"reload":[16,25]},"ship":{"mass":275,"speed":[40,65],"rotation":[40,55],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":50,"y":-5,"z":0},"position":{"x":[5,0,-2,-10,-20,-30,-45],"y":[-102,-70,-60,-10,2,40,80,70],"z":[0,0,0,0,0,0,0]},"width":[0,7,10,26,23,21,0],"height":[0,5,5,5,5,5,0],"texture":[2,63,63,4],"angle":25,"propeller":true},"main1":{"section_segments":8,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-90,-95,-60,-15,0,70,90,85],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,17.5,30,30,20,10,0],"height":[0,10,25,30,30,20,10,0],"texture":[63,1,63,4,10,4,17],"angle":0,"propeller":true,"laser":{"damage":[19,30],"rate":2.5,"type":2,"speed":[120,160],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":60,"y":10,"z":0},"position":{"x":[-50,-30,-15,0,5,5,0,-20],"y":[-110,-90,-70,-35,-20,15,50,85],"z":[0,0,0,0,0,0,0,0]},"width":[0,8,15,20,20,20,20,0],"height":[0,10,25,30,30,30,25,0],"texture":[2,63,4,1,10,63,3]},"cockpit2":{"section_segments":8,"offset":{"x":0,"y":-60,"z":25},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,15,50,104],"z":[-9,-7,-5,0,0]},"width":[0,5,10,12.5,0],"height":[0,5,10,12,0],"texture":[9,9,9,63],"angle":0},"bottom_propulsor":{"section_segments":15,"offset":{"x":27.5,"y":-20,"z":10},"position":{"x":[-5,0,0,0,0],"y":[30,55,100,110,100],"z":[0,0,0,0,0]},"width":[0,12.5,12.5,10,0],"height":[0,15,15,10,0],"propeller":true,"texture":[63,4,2,16.9]}},"wings":{"join":{"offset":{"x":20,"y":60,"z":0},"length":[80,0],"width":[90,50],"angle":[0],"position":[-20,-70],"texture":[4],"bump":{"position":-20,"size":1}}},"typespec":{"name":"Omega-Defender","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[180,250],"reload":[4,6]},"generator":{"capacity":[70,120],"reload":[16,25]},"ship":{"mass":275,"speed":[40,65],"rotation":[40,55],"acceleration":[60,80]}},"shape":[2.554,3.015,2.877,2.738,2.649,2.569,2.532,2.502,2.448,2.456,3.178,3.096,3.023,3.023,3.031,2.801,2.78,2.941,2.977,2.933,2.961,3.049,3.092,2.839,3.015,3.006,3.015,2.839,3.092,3.049,2.961,2.933,2.977,2.941,2.78,2.801,3.031,3.023,3.023,3.096,3.178,2.456,2.448,2.502,2.532,2.569,2.649,2.738,2.877,3.015],"lasers":[{"x":0,"y":-2.55,"z":0,"angle":0,"damage":[19,30],"rate":2.5,"type":2,"speed":[120,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.178}}';
var Obridion_302 = '{"name":"Obridion","level":3,"model":2,"size":1.5,"specs":{"shield":{"capacity":[165,250],"reload":[3,5]},"generator":{"capacity":[90,120],"reload":[22,32]},"ship":{"mass":200,"speed":[45,75],"rotation":[30,50],"acceleration":[70,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-85,-65,-40,-25,-10,10,40,90,120,140,135],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,15,15,30,50,50,35,20,0],"height":[0,15,15,10,10,20,30,30,20,15,0],"texture":[3,3,63,4,3,63,10,3,13,17],"propeller":true,"laser":{"damage":[4,6],"rate":2,"type":2,"speed":[120,160],"angle":25,"recoil":0,"number":4,"error":0}},"sides":{"section_segments":8,"offset":{"x":70,"y":-40,"z":0},"position":{"x":[-30,-5,0,0,-5,-30,0,0,0,0],"y":[-20,30,50,70,100,150],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,15,15,15,0,15,15,0],"height":[0,25,25,25,25,0,20,10,0],"texture":[4,2,63,2,4,3,4,12],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":25,"y":-10,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-50,-25,-10,15,40,60],"z":[0,0,0,0,0,0,-2]},"width":[0,5,7.5,7.5,10,10,0],"height":[0,5,7.5,7.5,10,10,5,0],"angle":0,"laser":{"damage":[14,20],"rate":0.5,"type":2,"speed":[140,190],"recoil":20,"number":1,"error":0},"propeller":false,"texture":[6,4,3,63,10,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-65,-55,-45,-20,-10,30,50,75,100,139],"z":[-3,0,0,0,-5,-5,10,15,15,10,4]},"width":[0,7.5,10,10,10,10,15,15,15,15,4],"height":[0,7.5,10,12,5,5,15,15,15,15,0,15,10,0],"texture":[9,9,9,4,10,4,2,63,2,4],"propeller":false}},"wings":{"front":{"doubleside":true,"offset":{"x":14,"y":-90,"z":0},"length":[20],"width":[20,10],"angle":[0],"position":[0,0,0,50],"texture":[63],"bump":{"position":10,"size":20}},"join":{"doubleside":true,"offset":{"x":35,"y":25,"z":10},"length":[30],"width":[60,80],"angle":[10],"position":[0,0],"texture":[3.6],"bump":{"position":0,"size":10}}},"typespec":{"name":"Obridion","level":3,"model":2,"code":302,"specs":{"shield":{"capacity":[165,250],"reload":[3,5]},"generator":{"capacity":[90,120],"reload":[22,32]},"ship":{"mass":200,"speed":[45,75],"rotation":[30,50],"acceleration":[70,80]}},"shape":[3.75,3.463,3.019,3.027,2.012,2.163,2.105,2.067,2.09,2.156,2.257,2.409,2.474,2.57,2.633,2.723,2.822,2.975,3.008,3.061,3.167,3.336,3.511,3.059,3.054,3.006,3.054,3.059,3.511,3.336,3.167,3.061,3.008,2.975,2.822,2.723,2.633,2.57,2.475,2.409,2.257,2.156,2.09,2.067,2.105,2.163,2.012,3.027,3.019,3.463],"lasers":[{"x":0,"y":-3.75,"z":0,"angle":0,"damage":[4,6],"rate":2,"type":2,"speed":[120,160],"number":4,"spread":25,"error":0,"recoil":0},{"x":0.75,"y":-1.8,"z":0.6,"angle":0,"damage":[14,20],"rate":0.5,"type":2,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":20},{"x":-0.75,"y":-1.8,"z":0.6,"angle":0,"damage":[14,20],"rate":0.5,"type":2,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":20}],"radius":3.75}}';

var Y_Defender_304 = '{"name":"Y-Defender","level":3,"model":4,"size":1.5,"specs":{"shield":{"capacity":[175,225],"reload":[4,6]},"generator":{"capacity":[50,80],"reload":[18,25]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[70,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-100,-95,-50,-40,-20,-10,30,70,65],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,10,10,20,15,20,0],"height":[0,10,20,15,15,20,25,15,0],"texture":[1,2,2,63,2,10,2,12],"laser":{"damage":[20,40],"rate":2,"type":1,"speed":[130,170],"number":1,"recoil":75,"error":0}},"propulsors":{"section_segments":8,"offset":{"x":50,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-30,-25,20,25,40,50,60,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,15,5,25,20,15,15,0],"height":[0,20,15,5,25,20,20,10,0],"texture":[63,63,63,2,2,3,4,12],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-70,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false}},"wings":{"join":{"offset":{"x":14,"y":0,"z":0},"length":[25],"width":[20,10],"angle":[0],"position":[0,0,0,50],"texture":[63],"bump":{"position":10,"size":40}},"join2":{"offset":{"x":14,"y":50,"z":0},"length":[25],"width":[20,10],"angle":[0],"position":[0,0,0,50],"texture":[3],"bump":{"position":10,"size":40}},"winglets":{"offset":{"x":5,"y":40,"z":10},"length":[10,20],"width":[15,30,50],"angle":[60,-20],"position":[0,5,60],"texture":[63],"bump":{"position":10,"size":60}}},"typespec":{"name":"Y-Defender","level":3,"model":4,"code":304,"specs":{"shield":{"capacity":[175,225],"reload":[4,6]},"generator":{"capacity":[50,80],"reload":[18,25]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[70,80]}},"shape":[3,2.959,2.915,2.203,1.734,0.652,0.639,1.358,1.816,2.118,2.23,2.139,2.06,2.016,2.023,2.04,2.551,2.584,2.67,3.055,3.578,3.552,3.315,3.834,2.269,2.104,2.269,3.834,3.315,3.552,3.578,3.055,2.67,2.584,2.551,2.04,2.023,2.016,2.06,2.139,2.23,2.118,1.816,1.358,0.639,0.652,1.734,2.203,2.915,2.959],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[20,40],"rate":2,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":75}],"radius":3.834}}';

//Tier 4
var Kaell_Defender_401 = '{"name":"Kaell-Defender","level":4,"model":1,"size":1.7,"specs":{"shield":{"capacity":[195,275],"reload":[5,7]},"generator":{"capacity":[100,140],"reload":[25,40]},"ship":{"mass":300,"speed":[50,65],"rotation":[30,55],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-100,-90,-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,15,35,35,40,30,20,0],"height":[0,5,10,30,20,40,30,20,0],"texture":[6,3,2,11,10,63,2,17],"propeller":true,"laser":{"damage":[15,24],"rate":1.5,"type":1,"speed":[130,170],"number":1,"angle":0,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-30,0,30,40],"z":[0,0,0,0,0]},"width":[0,15,15,15,0],"height":[0,15,20,17,0],"texture":[1,9],"propeller":false},"side":{"section_segments":10,"offset":{"x":85,"y":30,"z":0},"position":{"x":[-5,0,0,0,0,0,-5],"y":[-80,-40,-20,0,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,10,10,10,10,10,5],"height":[10,15,20,20,20,15,10],"texture":[63,1,2,3,4,63]},"cannons":{"section_segments":10,"offset":{"x":37,"y":-10,"z":3},"position":{"x":[0,0,0,0,0,-5,-5,-10,-10],"y":[-80,-75,-50,-20,30,60,80,100,80],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,8,8,15,15,10,10,10,0],"height":[0,10,10,10,15,10,10,10,0],"angle":0,"laser":{"damage":[4,8],"rate":2.5,"type":1,"speed":[130,170],"number":1,"angle":0,"error":0},"propeller":true,"texture":[6,8,10,4,63,4,3,13]},"cannons2":{"section_segments":10,"offset":{"x":72,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-55,-40,-45,-20,0,30,60,80,100,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,2,5,5,5,10,10,10,10,10,0],"height":[0,2,5,5,5,10,10,10,10,0],"angle":0,"laser":{"damage":[18,28],"rate":1.5,"type":1,"speed":[130,190],"number":1,"angle":0,"error":0},"propeller":true,"texture":[6,12,2,12,11,63,4,3,13]}},"wings":{"main":{"offset":{"x":0,"y":45,"z":0},"length":[60,20],"width":[100,80,40],"texture":[8,63],"angle":[0,0],"position":[0,0,0],"bump":{"position":-10,"size":13}}},"typespec":{"name":"Kaell-Defender","level":4,"model":1,"code":401,"specs":{"shield":{"capacity":[195,275],"reload":[5,7]},"generator":{"capacity":[100,140],"reload":[25,40]},"ship":{"mass":300,"speed":[50,65],"rotation":[30,55],"acceleration":[90,110]}},"shape":[3.066,3.102,2.978,3.308,3.24,2.761,2.374,3.081,3.346,3.315,3.232,3.223,3.231,3.238,3.317,3.456,3.664,3.971,4.322,4.696,4.995,4.832,3.31,3.736,3.801,3.747,3.801,3.736,3.31,4.832,4.995,4.696,4.322,3.971,3.664,3.456,3.317,3.238,3.231,3.223,3.232,3.315,3.346,3.081,2.374,2.761,3.24,3.308,2.978,3.102],"lasers":[{"x":0,"y":-3.06,"z":0,"angle":0,"damage":[15,24],"rate":1.5,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.258,"y":-3.06,"z":0.102,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.258,"y":-3.06,"z":0.102,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.448,"y":-1.87,"z":0,"angle":0,"damage":[18,28],"rate":1.5,"type":1,"speed":[130,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.448,"y":-1.87,"z":0,"angle":0,"damage":[18,28],"rate":1.5,"type":1,"speed":[130,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.995}}';
//Tier 5

//Tier 6

//Tier 7

shiptree.push(Defender_V2_101);
shiptree.push(Cyclops_201);
shiptree.push(Trident_Defender_202);
shiptree.push(Omega_Defender_301);
shiptree.push(Obridion_302);

shiptree.push(Y_Defender_304);
shiptree.push(Kaell_Defender_401);

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
 ships: shiptree,
 reset_tree: true,
 soundtrack: "argon.mp3",
 friendly_colors: 2,
 mines_destroy_delay: 3000,
 custom_map: map,
 lives: 4,
};


this.tick = function(game) {

};
