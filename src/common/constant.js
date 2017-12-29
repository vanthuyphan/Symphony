/**
 * Created by Van Phan
 */
"use strict";

let _ = import('lodash');

const POST = {
    units: [
        {index: 0, value: undefined}, //place holder
        {index: 1, value: ' triệu'},
        {index: 2, value: ' triệu/m²'},
        {index: 3, value: ' tỷ'}
    ],
    modes: [
        {index: 0, value: undefined}, //place holder
        {index: 1, value: 'Bán', unitSuffix: ''},
        {index: 2, value: 'Cho thuê', unitSuffix: '/th'}
    ],
    types: [
        {index: 0, value: undefined}, //place holder
        {index: 1, value: 'Chung cư'},
        {index: 2, value: undefined}, //place holder
        {index: 3, value: 'Nhà phố'},
        {index: 4, value: 'Đất'}
    ],
    directions: [
        {index: 0, value: 'Không biết'},
        {index: 1, value: 'Bắc'},
        {index: 2, value: 'Đông bắc'},
        {index: 3, value: 'Đông'},
        {index: 4, value: 'Đông nam'},
        {index: 5, value: 'Nam'},
        {index: 6, value: 'Tây nam'},
        {index: 7, value: 'Tây'},``
        {index: 8, value: 'Tây bắc'}
    ],
    legals: [
        {index: 0, value: 'Không biết'},
        {index: 1, value: 'Sổ hồng'},
        {index: 2, value: 'Giấy đỏ'},
        {index: 3, value: 'Giấy tay'},
        {index: 4, value: 'Đang hợp thức hoá'},
        {index: 5, value: 'Giấy tờ hợp lệ'},
        {index: 6, value: 'Chủ quyền tư nhân'},
        {index: 7, value: 'Hợp đồng'}
    ],
    privacies: [
        {index: 0, value: undefined}, //place holder
        {
            index: 1,
            value: 'Cá nhân',
        },
        {
            index: 2,
            value: 'Bạn bè',
        },
        {
            index: 3,
            value: 'Cộng đồng',
        }
    ],
    infrastructures: [
        {index: 0, value: undefined}, //place holder
        {index: 1, value: 'Máy lạnh'},
        {index: 2, value: 'Máy sưởi'},
        {index: 3, value: 'Ti vi'},
        {index: 4, value: 'Wifi'},
        {index: 5, value: 'Bồn tắm'},
        {index: 6, value: 'Máy nóng lạnh'}
    ],
    comforts: [
        {index: 0, value: undefined}, //place holder
        {index: 1, value: 'Hồ bơi'},
        {index: 2, value: 'Trường học'},
        {index: 3, value: 'Gần bờ sông'},
        {index: 4, value: 'Bệnh viện'},
        {index: 5, value: 'Đường lớn'},
        {index: 6, value: 'Siêu thị'}
    ]
};
const Contact = {
    types: [
        {text: 'Môi giới', typ: 3},
        {text: 'Người mua', typ: 2},
        {text: 'Người bán', typ: 1}
    ]
};
const cityMap = {
    0: "Toàn Quốc",
    1: 'Hải Phòng',
    2: 'Long An',
    3: 'Bà Rịa Vũng Tàu',
    4: 'An Giang',
    5: 'Bắc Giang',
    6: 'Bắc Kạn',
    7: 'Bạc Liêu',
    8: 'Bắc Ninh',
    9: 'Bến Tre',
    10: 'Bình Định',
    11: 'Bình Phước',
    12: 'Bình Thuận',
    13: 'Cà Mau',
    14: 'Cần Thơ',
    15: 'Cao Bằng',
    16: 'Đắk Lắk',
    17: 'Đắk Nông',
    18: 'Điện Biên',
    19: 'Đồng Nai',
    20: 'Đồng Tháp',
    21: 'Gia Lai',
    22: 'Hà Giang',
    23: 'Hà Nam',
    24: 'Hồ Chí Minh',
    25: 'Hà Nội',
    26: 'Bình Dương',
    27: 'Đà Nẵng',
    28: 'Quảng Ngãi',
    29: 'Quảng Ninh',
    30: 'Quảng Trị',
    31: 'Sóc Trăng',
    32: 'Sơn La',
    33: 'Tây Ninh',
    34: 'Thái Bình',
    35: 'Thái Nguyên',
    36: 'Thanh Hóa',
    37: 'Thừa Thiên',
    38: 'Tiền Giang',
    39: 'Trà Vinh',
    40: 'Tuyên Quang',
    41: 'Vĩnh Long',
    42: 'Vĩnh Phúc',
    43: 'Yên Bái',
    44: 'Hà Tĩnh',
    45: 'Hải Dương',
    46: 'Hậu Giang',
    47: 'Hòa Bình',
    48: 'Hưng Yên',
    49: 'Khánh Hòa',
    50: 'Kiên Giang',
    51: 'Kon Tum',
    52: 'Lai Châu',
    53: 'Lâm Đồng',
    54: 'Lạng Sơn',
    55: 'Lào Cai',
    56: 'Nam Định',
    57: 'Nghệ An',
    58: 'Ninh Bình',
    59: 'Ninh Thuận',
    60: 'Phú Thọ',
    61: 'Phú Yên',
    62: 'Quảng Bình',
    63: 'Quảng Nam'
}
const districtMap = {
    37: 'An Dương',
    38: 'An Lão',
    39: 'Bạch Long Vĩ',
    40: ' Cát Hải',
    30: ' Đồ Sơn',
    31: ' Dương Kinh',
    32: ' Hải An',
    33: ' Hồng Bàng',
    34: ' Kiến An',
    41: ' Kiến Thụy',
    35: ' Lê Chân',
    36: ' Ngô Quyền',
    42: ' Thủy Nguyên',
    43: ' Tiên Lãng',
    44: ' Vĩnh Bảo',
    415: '  Bến Lức',
    416: '  Cần Đước',
    417: '  Cần Giuộc',
    418: '  Châu Thành',
    419: '  Đức Hòa',
    420: '  Đức Huệ',
    724: '  Kiến Tường',
    421: '  Mộc Hóa',
    429: '  Tân An',
    422: '  Tân Hưng',
    423: '  Tân Thạnh',
    424: '  Tân Trụ',
    425: '  Thạnh Hóa',
    426: '  Thủ Thừa',
    427: '  Vĩnh Hưng',
    103: '  Bà Rịa',
    96: '  Châu Đức',
    97: '  Côn Đảo',
    98: '  Đất Đỏ',
    99: '  Long Điền',
    100: '  Tân Thành',
    102: '  Vũng Tàu',
    101: '  Xuyên Mộc',
    85: '  An Phú',
    95: '  Châu Đốc',
    86: '  Châu Phú',
    87: '  Châu Thành',
    88: '  Chợ Mới',
    94: '  Long Xuyên',
    90: '  Phú Tân',
    91: '  Tân Châu',
    92: '  Thoại Sơn',
    93: '  Tịnh Biên',
    89: '  Tri Tôn',
    113: '  Bắc Giang',
    104: '  Hiệp Hòa',
    105: '  Lạng Giang',
    106: '  Lục Nam',
    107: '  Lục Ngạn',
    108: '  Sơn Động',
    109: '  Tân Yên',
    110: '  Việt Yên',
    111: '  Yên Dũng',
    112: '  Yên Thế',
    114: '  Ba Bể',
    121: '  Bắc Kạn',
    115: '  Bạch Thông',
    116: '  Chợ Đồn',
    117: '  Chợ Mới',
    118: '  Na Rì',
    119: '  Ngân Sơn',
    120: '  Pác Nặm',
    128: '  Bạc Liêu',
    122: '  Đông Hải',
    123: '  Giá Rai',
    124: '  Hòa Bình',
    125: '  Hồng Dân',
    126: '  Phước Long',
    127: '  Vĩnh Lợi',
    136: '  Bắc Ninh',
    129: '  Gia Bình',
    130: '  Lương Tài',
    131: '  Quế Võ',
    132: '  Thuận Thành',
    133: '  Tiên Du',
    134: '  Từ Sơn',
    135: '  Yên Phong',
    137: '  Ba Tri',
    144: '  Bến Tre',
    138: '  Bình Đại',
    139: '  Châu Thành',
    140: '  Chợ Lách',
    141: '  Giồng Trôm',
    705: '  Mỏ Cày Bắc',
    706: '  Mỏ Cày Nam',
    143: '  Thạnh Phú',
    145: '  An Lão',
    146: '  An Nhơn',
    147: '  Hoài Ân',
    148: '  Hoài Nhơn',
    149: '  Phù Cát',
    150: '  Phù Mỹ',
    155: '  Quy Nhơn',
    151: '  Tây Sơn',
    152: '  Tuy Phước',
    153: '  Vân Canh',
    154: '  Vĩnh Thạnh',
    164: '  Bình Long',
    165: '  Bù Đăng',
    166: '  Bù Đốp',
    699: '  Bù Gia Mập',
    167: '  Chơn Thành',
    168: '  Đồng Phú',
    171: '  Đồng Xoài',
    698: '  Hớn Quản',
    169: '  Lộc Ninh',
    728: '  Phú Riềng',
    170: '  Phước Long',
    172: '  Bắc Bình',
    173: '  Đảo Phú Quý',
    174: '  Đức Linh',
    175: '  Hàm Tân',
    176: '  Hàm Thuận Bắc',
    177: '  Hàm Thuận Nam',
    182: '  La Gi',
    181: '  Phan Thiết',
    178: '  Tánh Linh',
    179: '  Tuy Phong',
    191: '  Cà Mau',
    183: '  Cái Nước',
    184: '  Đầm Dơi',
    185: '  Năm Căn',
    186: '  Ngọc Hiển',
    187: '  Phú Tân',
    188: '  Thới Bình',
    189: '  Trần Văn Thời',
    190: '  U Minh',
    704: '  Thới Lai',
    81: '   Bình Thủy',
    82: '  Cái Răng',
    77: '  Cờ Đỏ',
    83: '  Ninh Kiều',
    84: '  Ô Môn',
    78: '  Phong Điền',
    79: '  Thốt Nốt',
    80: '  Vĩnh Thạnh',
    192: '  Bảo Lạc',
    193: '  Bảo Lâm',
    204: '  Cao Bằng',
    194: '  Hạ Lang',
    195: '  Hà Quảng',
    196: '  Hòa An',
    197: '  Nguyên Bình',
    198: '  Phục Hòa',
    199: '  Quảng Uyên',
    200: '  Thạch An',
    201: '  Thông Nông',
    202: '  Trà Lĩnh',
    203: '  Trùng Khánh',
    205: '  Buôn Đôn',
    697: '  Buôn Hồ',
    218: '  Buôn Ma Thuột',
    206: '  Cư Kuin',
    207: "  Cư M'gar",
    208: "  Ea H'Leo",
    209: '  Ea Kar',
    210: '  Ea Súp',
    211: '  Krông Ana',
    212: '  Krông Bông',
    213: '  Krông Buk',
    214: '  Krông Năng',
    215: '  Krông Pắc',
    216: '  Lăk',
    217: "  M'Đrắk",
    219: '  Cư Jút',
    220: '  Đắk Glong',
    221: '  Đắk Mil',
    222: "  Đắk R'Lấp",
    223: '  Đắk Song',
    226: '  Gia Nghĩa',
    224: '  Krông Nô',
    225: '  Tuy Đức',
    227: '  Điện Biên',
    228: '  Điện Biên Đông',
    234: '  Điện Biên Phủ',
    229: '  Mường Ảng',
    230: '  Mường Chà',
    235: '  Mường Lay',
    231: '  Mường Nhé',
    711: '  Nậm Pồ',
    232: '  Tủa Chùa',
    233: '  Tuần Giáo',
    245: '  Biên Hòa',
    236: '  Cẩm Mỹ',
    237: '  Định Quán',
    246: '  Long Khánh',
    238: '  Long Thành',
    239: '  Nhơn Trạch',
    240: '  Tân Phú',
    241: '  Thống Nhất',
    242: '  Trảng Bom',
    243: '  Vĩnh Cửu',
    244: '  Xuân Lộc',
    721: '  Cao Lãnh',
    248: '  Châu Thành',
    249: '  Hồng Ngự',
    247: '  Cao Lãnh',
    722: '  Hồng Ngự',
    250: '  Lai Vung',
    251: '  Lấp Vò',
    257: '  Sa Đéc',
    252: '  Tam Nông',
    253: '  Tân Hồng',
    254: '  Thanh Bình',
    255: '  Tháp Mười',
    273: '  An Khê',
    258: '  AYun Pa',
    259: '  Chư Păh',
    710: '  Chư Pưh',
    260: '  Chư Sê',
    261: '  Chư Prông',
    262: '  Đăk Đoa',
    263: '  Đắk Pơ',
    264: '  Đức Cơ',
    265: '  Ia Grai',
    266: '  Ia Pa',
    267: "  K'Bang",
    268: '  Kông Chro',
    269: '  Krông Pa',
    270: '  Mang Yang',
    271: '  Phú Thiện',
    272: '  Pleiku',
    274: '  Bắc Mê',
    275: '  Bắc Quang',
    276: '  Đồng Văn',
    284: '  Hà Giang',
    277: '  Hoàng Su Phì',
    278: '  Mèo Vạc',
    279: '  Quản Bạ',
    280: '  Quang Bình',
    281: '  Vị Xuyên',
    282: '  Xín Mần',
    283: '  Yên Minh',
    285: '  Bình Lục',
    286: '  Duy Tiên',
    287: '  Kim Bảng',
    288: '  Lý Nhân',
    290: '  Phủ Lý',
    289: '  Thanh Liêm',
    72: '  Bình Chánh',
    65: '  Bình Tân',
    66: '  Bình Thạnh',
    73: '  Cần Giờ',
    74: '  Củ Chi',
    67: '  Gò Vấp',
    75: '  Hóc Môn',
    76: '  Nhà Bè',
    68: '  Phú Nhuận',
    53: ' Quận 1',
    62: ' Quận 10',
    63: ' Quận 11',
    64: ' Quận 12',
    54: ' Quận 2',
    55: ' Quận 3',
    56: ' Quận 4',
    57: ' Quận 5',
    58: ' Quận 6',
    59: ' Quận 7',
    60: ' Quận 8',
    61: ' Quận 9',
    69: '  Tân Bình',
    70: '  Tân Phú',
    71: '  Thủ Đức',
    2: '  Ba Đình',
    18: '  Ba Vì',
    718: '  Bắc Từ Liêm',
    7: '  Cầu Giấy',
    24: '  Chương Mỹ',
    20: '  Đan Phượng',
    10: '  Đông Anh',
    3: '  Đống Đa',
    11: '  Gia Lâm',
    15: '  Hà Đông',
    4: '  Hai Bà Trưng',
    21: '  Hoài Đức',
    1: '  Hoàn Kiếm',
    8: '  Hoàng Mai',
    9: '  Long Biên',
    17: '  Mê Linh',
    29: '  Mỹ Đức',
    14: '  Nam Từ Liêm',
    27: '  Phú Xuyên',
    19: '  Phúc Thọ',
    22: '  Quốc Oai',
    12: '  Sóc Sơn',
    16: '  Sơn Tây',
    6: '  Tây Hồ',
    23: '  Thạch Thất',
    25: '  Thanh Oai',
    13: '  Thanh Trì',
    5: '  Thanh Xuân',
    26: '  Thường Tín',
    28: '  Ứng Hòa',
    716: '  Bàu Bàng',
    156: '  Bến Cát',
    157: '  Dầu Tiếng',
    158: '  Dĩ An',
    159: '  Phú Giáo',
    160: '  Tân Uyên',
    163: '  Thủ Dầu Một',
    161: '  Thuận An',
    45: '  Cẩm Lệ',
    46: '  Hải Châu',
    51: '  Hòa Vang',
    52: '  Hoàng Sa',
    47: '  Liên Chiểu',
    48: '  Ngũ Hành Sơn',
    49: '  Sơn Trà',
    50: '  Thanh Khê',
    521: '  Ba Tơ',
    522: '  Bình Sơn',
    523: '  Đức Phổ',
    524: '  Lý Sơn',
    525: '  Minh Long',
    526: '  Mộ Đức',
    527: '  Nghĩa Hành',
    534: '  Quảng Ngãi',
    528: '  Sơn Hà',
    529: '  Sơn Tây',
    530: '  Sơn Tịnh',
    531: '  Tây Trà',
    532: '  Trà Bồng',
    533: '  Tư Nghĩa',
    535: '  Ba Chẽ',
    536: '  Bình Liêu',
    547: '  Cẩm Phả',
    537: '  Cô Tô',
    538: '  Đầm Hà',
    539: '  Đông Triều',
    546: '  Hạ Long',
    540: '  Hải Hà',
    541: '  Hoành Bồ',
    548: '  Móng Cái',
    708: '  Quảng Yên',
    542: '  Tiên Yên',
    549: '  Uông Bí',
    543: '  Vân Đồn',
    550: '  Cam Lộ',
    551: '  Đa Krông',
    552: '  Đảo Cồn cỏ',
    558: '  Đông Hà',
    553: '  Gio Linh',
    554: '  Hải Lăng',
    555: '  Hướng Hóa',
    559: '  Quảng Trị',
    556: '  Triệu Phong',
    557: '  Vĩnh Linh',
    695: '  Châu Thành',
    560: '  Cù Lao Dung',
    561: '  Kế Sách',
    562: '  Long Phú',
    563: '  Mỹ Tú',
    564: '  Mỹ Xuyên',
    565: '  Ngã Năm',
    568: '  Sóc Trăng',
    566: '  Thạnh Trị',
    707: '  Trần Đề',
    567: '  Vĩnh Châu',
    569: '  Bắc Yên',
    570: '  Mai Sơn',
    571: '  Mộc Châu',
    572: '  Mường La',
    573: '  Phù Yên',
    574: '  Quỳnh Nhai',
    579: '  Sơn La',
    575: '  Sông Mã',
    576: '  Sốp Cộp',
    577: '  Thuận Châu',
    726: '  Vân Hồ',
    578: '  Yên Châu',
    580: '  Bến Cầu',
    581: '  Châu Thành',
    582: '  Dương Minh Châu',
    583: '  Gò Dầu',
    584: '  Hòa Thành',
    585: '  Tân Biên',
    586: '  Tân Châu',
    588: '  Tây Ninh',
    587: '  Trảng Bàng',
    589: '  Đông Hưng',
    590: '  Hưng Hà',
    591: '  Kiến Xương',
    592: '  Quỳnh Phụ',
    596: '  Thái Bình',
    593: '  Thái Thụy',
    594: '  Tiền Hải',
    595: '  Vũ Thư',
    597: '  Đại Từ',
    598: '  Định Hóa',
    599: '  Đồng Hỷ',
    600: '  Phổ Yên',
    601: '  Phú Bình',
    602: '  Phú Lương',
    605: '  Sông Công',
    604: '  Thái Nguyên',
    603: '  Võ Nhai',
    606: '  Bá Thước',
    631: '  Bỉm Sơn',
    607: '  Cẩm Thủy',
    608: '  Đông Sơn',
    609: '  Hà Trung',
    610: '  Hậu Lộc',
    611: '  Hoằng Hóa',
    612: '  Lang Chánh',
    613: '  Mường Lát',
    614: '  Nga Sơn',
    615: '  Ngọc Lặc',
    616: '  Như Thanh',
    617: '  Như Xuân',
    618: '  Nông Cống',
    619: '  Quan Hóa',
    620: '  Quan Sơn',
    621: '  Quảng Xương',
    632: '  Sầm Sơn',
    622: '  Thạch Thành',
    630: '  Thanh Hóa',
    623: '  Thiệu Hóa',
    624: '  Thọ Xuân',
    625: '  Thường Xuân',
    626: '  Tĩnh Gia',
    627: '  Triệu Sơn',
    628: '  Vĩnh Lộc',
    629: '  Yên Định',
    633: '  A Lưới',
    641: '  Huế',
    634: '  Hương Thủy',
    635: '  Hương Trà',
    636: '  Nam Đông',
    637: '  Phong Điền',
    638: '  Phú Lộc',
    639: '  Phú Vang',
    640: '  Quảng Điền',
    642: '  Cái Bè',
    727: '  Cai Lậy',
    644: '  Châu Thành',
    645: '  Chợ Gạo',
    651: '  Gò Công',
    646: '  Gò Công Đông',
    647: '  Gò Công Tây',
    643: '    Cai Lậy',
    650: '  Mỹ Tho',
    649: '  Tân Phú Đông',
    648: '  Tân Phước',
    652: '  Càng Long',
    653: '  Cầu Kè',
    654: '  Cầu Ngang',
    655: '  Châu Thành',
    656: '  Duyên Hải',
    657: '  Tiểu Cần',
    658: '  Trà Cú',
    659: '  Trà Vinh',
    660: '  Chiêm Hóa',
    661: '  Hàm Yên',
    712: '  Lâm Bình',
    662: '  Na Hang',
    663: '  Sơn Dương',
    665: '  Tuyên Quang',
    664: '  Yên Sơn',
    666: '  Bình Minh',
    667: '  Bình Tân',
    668: '  Long Hồ',
    669: '  Mang Thít',
    670: '  Tam Bình',
    671: '  Trà Ôn',
    673: '  Vĩnh Long',
    672: '  Vũng Liêm',
    674: '  Bình Xuyên',
    675: '  Lập Thạch',
    681: '  Phúc Yên',
    696: '  Sông Lô',
    676: '  Tam Đảo',
    677: '  Tam Dương',
    678: '  Vĩnh Tường',
    680: '  Vĩnh Yên',
    679: '  Yên Lạc',
    682: '  Lục Yên',
    683: '  Mù Cang Chải',
    713: '  Nghĩa Lộ',
    684: '  Trạm Tấu',
    685: '  Trấn Yên',
    686: '  Văn Chấn',
    687: '  Văn Yên',
    689: '  Yên Bái',
    688: '  Yên Bình',
    291: '  Cẩm Xuyên',
    292: '  Can Lộc',
    293: '  Đức Thọ',
    301: '  Hà Tĩnh',
    302: '  Hồng Lĩnh',
    294: '  Hương Khê',
    295: '  Hương Sơn',
    296: '  Kỳ Anh',
    297: '  Lộc Hà',
    298: '  Nghi Xuân',
    299: '  Thạch Hà',
    300: '  Vũ Quang',
    303: '  Bình Giang',
    304: '  Cẩm Giàng',
    305: '  Chí Linh',
    306: '  Gia Lộc',
    314: '  Hải Dương',
    307: '  Kim Thành',
    308: '  Kinh Môn',
    309: '  Nam Sách',
    310: '  Ninh Giang',
    311: '  Thanh Hà',
    312: '  Thanh Miện',
    313: '  Tứ Kỳ',
    315: '  Châu Thành',
    316: '  Châu Thành A',
    317: '  Long Mỹ',
    320: '  Ngã Bảy',
    318: '  Phụng Hiệp',
    321: '  Vị Thanh',
    319: '  Vị Thủy',
    322: '  Cao Phong',
    323: '  Đà Bắc',
    332: '  Hòa Bình',
    324: '  Kim Bôi',
    325: '  Kỳ Sơn',
    326: '  Lạc Sơn',
    327: '  Lạc Thủy',
    328: '  Lương Sơn',
    329: '  Mai Châu',
    330: '  Tân Lạc',
    331: '  Yên Thủy',
    333: '  Ân Thi',
    342: '  Hưng Yên',
    334: '  Khoái Châu',
    335: '  Kim Động',
    336: '  Mỹ Hào',
    337: '  Phù Cừ',
    338: '  Tiên Lữ',
    339: '  Văn Giang',
    340: '  Văn Lâm',
    341: '  Yên Mỹ',
    343: '  Cam Lâm',
    351: '  Cam Ranh',
    344: '  Diên Khánh',
    345: '  Khánh Sơn',
    346: '  Khánh Vĩnh',
    350: '  Nha Trang',
    347: '  Ninh Hòa',
    348: '  Trường Sa',
    349: '  Vạn Ninh',
    352: '  An Biên',
    353: '  An Minh',
    354: '  Châu Thành',
    723: '  Giang Thành',
    355: '  Giồng Riềng',
    356: '  Gò Quao',
    365: '  Hà Tiên',
    357: '  Hòn Đất',
    358: '  Kiên Hải',
    359: '  Kiên Lương',
    360: '  Phú Quốc',
    364: '  Rạch Giá',
    361: '  Tân Hiệp',
    362: '  U minh Thượng',
    363: '  Vĩnh Thuận',
    366: '  Đắk Glei',
    367: '  Đắk Hà',
    368: '  Đắk Tô',
    729: "  Ia H'Drai",
    369: '  Kon Plông',
    370: '  Kon Rẫy',
    374: '  Kon Tum',
    371: '  Ngọc Hồi',
    372: '  Sa Thầy',
    373: '  Tu Mơ Rông',
    380: '  Lai Châu',
    375: '  Mường Tè',
    709: '  Nậm Nhùn',
    376: '  Phong Thổ',
    377: '  Sìn Hồ',
    378: '  Tam Đường',
    691: '  Tân Uyên',
    379: '  Than Uyên',
    381: '  Bảo Lâm',
    392: '  Bảo Lộc',
    382: '  Cát Tiên',
    383: '  Đạ Huoai',
    391: '  Đà Lạt',
    384: '  Đạ Tẻh',
    385: '  Đam Rông',
    386: '  Di Linh',
    387: '  Đơn Dương',
    388: '  Đức Trọng',
    389: '  Lạc Dương',
    390: '  Lâm Hà',
    393: '  Bắc Sơn',
    394: '  Bình Gia',
    395: '  Cao Lộc',
    396: '  Chi Lăng',
    397: '  Đình Lập',
    398: '  Hữu Lũng',
    403: '  Lạng Sơn',
    399: '  Lộc Bình',
    400: '  Tràng Định',
    401: '  Văn Lãng',
    402: '  Văn Quan',
    404: '  Bắc Hà',
    405: '  Bảo Thắng',
    406: '  Bảo Yên',
    407: '  Bát Xát',
    414: '  Lào Cai',
    408: '  Mường Khương',
    409: '  Sa Pa',
    410: '  Văn Bàn',
    411: '  Si Ma Cai',
    430: '  Giao Thủy',
    431: '  Hải Hậu',
    432: '  Mỹ Lộc',
    439: '  Nam Định',
    433: '  Nam Trực',
    434: '  Nghĩa Hưng',
    435: '  Trực Ninh',
    436: '  Vụ Bản',
    437: '  Xuân Trường',
    438: '  Ý Yên',
    440: '  Anh Sơn',
    441: '  Con Cuông',
    458: '  Cửa Lò',
    442: '  Diễn Châu',
    443: '  Đô Lương',
    725: '  Hoàng Mai',
    444: '  Hưng Nguyên',
    445: '  Kỳ Sơn',
    446: '  Nam Đàn',
    447: '  Nghi Lộc',
    448: '  Nghĩa Đàn',
    449: '  Quế Phong',
    450: '  Quỳ Châu',
    451: '  Quỳ Hợp',
    452: '  Quỳnh Lưu',
    453: '  Tân Kỳ',
    692: '  Thái Hòa',
    454: '  Thanh Chương',
    455: '  Tương Dương',
    457: '  Vinh',
    456: '  Yên Thành',
    459: '  Gia Viễn',
    460: '  Hoa Lư',
    461: '  Kim Sơn',
    462: '  Nho Quan',
    465: '  Ninh Bình',
    466: '  Tam Điệp',
    463: '  Yên Khánh',
    464: '  Yên Mô',
    467: '  Bác Ái',
    468: '  Ninh Hải',
    469: '  Ninh Phước',
    470: '  Ninh Sơn',
    472: '  Phan Rang - Tháp Chàm',
    471: '  Thuận Bắc',
    693: '  Thuận Nam',
    473: '  Cẩm Khê',
    474: '  Đoan Hùng',
    475: '  Hạ Hòa',
    476: '  Lâm Thao',
    477: '  Phù Ninh',
    486: '  Phú Thọ',
    478: '  Tam Nông',
    479: '  Tân Sơn',
    480: '  Thanh Ba',
    481: '  Thanh Sơn',
    482: '  Thanh Thủy',
    485: '  Việt Trì',
    483: '  Yên Lập',
    487: '  Đông Hòa',
    488: '  Đồng Xuân',
    489: '  Phú Hòa',
    490: '  Sơn Hòa',
    491: '  Sông Cầu',
    492: '  Sông Hinh',
    493: '  Tây Hòa',
    494: '  Tuy An',
    495: '  Tuy Hòa',
    720: '  Ba Đồn',
    496: '  Bố Trạch',
    502: '  Đồng Hới',
    497: '  Lệ Thủy',
    498: '  Minh Hóa',
    499: '  Quảng Ninh',
    500: '  Quảng Trạch',
    501: '  Tuyên Hóa',
    503: '  Bắc Trà My',
    504: '  Đại Lộc',
    505: '  Điện Bàn',
    506: '  Đông Giang',
    507: '  Duy Xuyên',
    508: '  Hiệp Đức',
    520: '  Hội An',
    509: '  Nam Giang',
    510: '  Nam Trà My',
    694: '  Nông Sơn',
    511: '  Núi Thành',
    512: '  Phú Ninh',
    513: '  Phước Sơn',
    514: '  Quế Sơn',
    519: '  Tam Kỳ',
    515: '  Tây Giang',
    516: '  Thăng Bình',
    517: '  Tiên Phước',
}

exports.getConstant = () => {
    return POST;
}

exports.mapPost = post => {
    return mapPost(post);
}

exports.mapProject = project => {
    return mapProject(project);
}

exports.accentsTidy = string => {
    return accentsTidy(string);
}

function mapPost(post) {
    if (!post) return {};
    let postTypeNumber = post.typ;
    post.tit = post.tit.toTitleCase();
    post.unit = POST.units[post.unit] ? POST.units[post.unit].value : undefined;
    post.mode = POST.modes[post.mode] ? POST.modes[post.mode].value : undefined;
    post.typ = POST.types[post.typ] ? POST.types[post.typ].value : undefined;
    post.dir = POST.directions[post.dir] ? POST.directions[post.dir].value : undefined;
    post.leg = POST.legals[post.leg] ? POST.legals[post.leg].value : undefined;
    post.nob = postTypeNumber === 4 ? undefined : post.nob;
    post.now = postTypeNumber === 4 ? undefined : post.now;
    post.nof = postTypeNumber !== 3 ? undefined : post.nof;
    post.fac = transform(post.fac, POST.comforts);
    post.fea = transform(post.fea, POST.infrastructures);
    post.url = createPostUrl(post.tit, post.lid, post.dis, post.districtName);
    if (post.des) {
        post.des = post.des.split("\n").join('<br>');
    }
    if (post.pri == 0 || !post.pri) {
        post.pri = 'thỏa thuận'
    }
    if (post.are == 0 || !post.are) {
        post.are = 'không xác định'
    }
    return post;
}

function createProjectUrl(title, id) {
    let url = accentsTidy(title.split(" ").join('-').toLowerCase());
    return '/' + url + '-' + 'pid' + id;
}

function createPostLookbackUrls(post) {
    let urls = [];
    if (post.cit) {
        urls.push(createPotsCityUrl(post));
    }
    if (post.dis) {
        urls.push(createPotsDistrictUrl(post));
    }
    let title = post.tit;
    urls.push({name: title, url: createPostUrl(post.tit, post.lid, post.dis, post.districtName)});
    post.urls = urls;
    return post;
}

function createPostUrl(title, lid, district, districtName) {
    var districtName = districtName || districtMap[district];
    if (districtName) {
        districtName = accentsTidy(districtName.trim().toLowerCase());
        let url = accentsTidy(title.split(" ").join('-').toLowerCase());
        return "/" + districtName + '/' + url + '-' + 'lid' + lid;
    } else {
        let url = accentsTidy(title.split(" ").join('-').toLowerCase());
        return '/' + url + '-' + 'lid' + lid;
    }
}

function createPotsCityUrl(post) {
    let cityName = accentsTidy(cityMap[post.cit || 0].trim()).toLowerCase();
    let url = post.mode == 'Bán' ? cityName + '/mua-ban-bat-dong-san' : cityName + '/cho-thue-bat-dong-san';
    return {name: cityMap[post.cit], url: url};
}

function createPotsDistrictUrl(post) {
    let cityName = accentsTidy(cityMap[post.cit || 0].trim()).toLowerCase();
    let districtName = accentsTidy(districtMap[post.dis].trim()).toLowerCase();
    let url = cityName + '/' + districtName;
    url = post.mode == 'Bán' ? url + '/mua-ban-bat-dong-san' : url + '/cho-thue-bat-dong-san';
    return {name: districtMap[post.dis], url: url};
}

function mapProject(project) {
    if (project.overviewTab) {
        project.overviewTab.description = changeNewLineCharactor(project.overviewTab.description);
        project.featureTab.description = changeNewLineCharactor(project.featureTab.description);
        project.locationTab.description = changeNewLineCharactor(project.locationTab.description);
        project.title = project.overviewTab.title;

        project.investor = _.map(project.investor).map(function (investor) {
            return investor.description = changeNewLineCharactor(investor.description);
        })
    }
    project.title = project.title.toTitleCase();
    project.url = createProjectUrl(project.title || '', project.pid);
    project.priceUnit = POST.units[project.priceUnit] ? POST.units[project.priceUnit].value : undefined;
    if (project.price == 0 || !project.price) {
        project.price = 'thỏa thuận'
    }
    if (project.are == 0 || !project.are) {
        project.are = 'không xác định'
    }
    return project;
}

function changeNewLineCharactor(string) {
    return string.split('\n').join('<br>');
}

exports.mapPosts = function (posts) {
    return _.map(posts).map(function (post) {
        return mapPost(post);
    })
}

exports.createLookBackUrls = function (post) {
    return createPostLookbackUrls(post);
}

exports.mapProjects = function (projects) {
    return _.map(projects).map(function (projects) {
        return mapProject(projects);
    })
}

function transform(array, seed) {
    return _.map(array).map(function (element) {
        return seed[element].value;
    })
}

function accentsTidy(str) {
    var defaultDiacriticsRemovalMap = [
        {
            'base': 'A',
            'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        },
        {'base': 'AA', 'letters': /[\uA732]/g},
        {'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g},
        {'base': 'AO', 'letters': /[\uA734]/g},
        {'base': 'AU', 'letters': /[\uA736]/g},
        {'base': 'AV', 'letters': /[\uA738\uA73A]/g},
        {'base': 'AY', 'letters': /[\uA73C]/g},
        {'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
        {'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
        {
            'base': 'D',
            'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        },
        {'base': 'DZ', 'letters': /[\u01F1\u01C4]/g},
        {'base': 'Dz', 'letters': /[\u01F2\u01C5]/g},
        {
            'base': 'E',
            'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        },
        {'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
        {
            'base': 'G',
            'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        },
        {
            'base': 'H',
            'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        },
        {
            'base': 'I',
            'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        },
        {'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g},
        {
            'base': 'K',
            'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        },
        {
            'base': 'L',
            'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        },
        {'base': 'LJ', 'letters': /[\u01C7]/g},
        {'base': 'Lj', 'letters': /[\u01C8]/g},
        {'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
        {
            'base': 'N',
            'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        },
        {'base': 'NJ', 'letters': /[\u01CA]/g},
        {'base': 'Nj', 'letters': /[\u01CB]/g},
        {
            'base': 'O',
            'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        },
        {'base': 'OI', 'letters': /[\u01A2]/g},
        {'base': 'OO', 'letters': /[\uA74E]/g},
        {'base': 'OU', 'letters': /[\u0222]/g},
        {'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
        {'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
        {
            'base': 'R',
            'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        },
        {
            'base': 'S',
            'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        },
        {
            'base': 'T',
            'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        },
        {'base': 'TZ', 'letters': /[\uA728]/g},
        {
            'base': 'U',
            'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        },
        {'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
        {'base': 'VY', 'letters': /[\uA760]/g},
        {'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
        {'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
        {
            'base': 'Y',
            'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        },
        {
            'base': 'Z',
            'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        },
        {
            'base': 'a',
            'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        },
        {'base': 'aa', 'letters': /[\uA733]/g},
        {'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g},
        {'base': 'ao', 'letters': /[\uA735]/g},
        {'base': 'au', 'letters': /[\uA737]/g},
        {'base': 'av', 'letters': /[\uA739\uA73B]/g},
        {'base': 'ay', 'letters': /[\uA73D]/g},
        {'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
        {'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
        {
            'base': 'd',
            'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        },
        {'base': 'dz', 'letters': /[\u01F3\u01C6]/g},
        {
            'base': 'e',
            'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        },
        {'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
        {
            'base': 'g',
            'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        },
        {
            'base': 'h',
            'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        },
        {'base': 'hv', 'letters': /[\u0195]/g},
        {
            'base': 'i',
            'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        },
        {'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
        {
            'base': 'k',
            'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        },
        {
            'base': 'l',
            'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        },
        {'base': 'lj', 'letters': /[\u01C9]/g},
        {'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
        {
            'base': 'n',
            'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        },
        {'base': 'nj', 'letters': /[\u01CC]/g},
        {
            'base': 'o',
            'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        },
        {'base': 'oi', 'letters': /[\u01A3]/g},
        {'base': 'ou', 'letters': /[\u0223]/g},
        {'base': 'oo', 'letters': /[\uA74F]/g},
        {'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
        {'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
        {
            'base': 'r',
            'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        },
        {
            'base': 's',
            'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        },
        {
            'base': 't',
            'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        },
        {'base': 'tz', 'letters': /[\uA729]/g},
        {
            'base': 'u',
            'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        },
        {'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
        {'base': 'vy', 'letters': /[\uA761]/g},
        {'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
        {'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
        {
            'base': 'y',
            'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        },
        {
            'base': 'z',
            'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        }
    ];

    for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
        str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
    }

    return str.replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-');
};

String.prototype.toTitleCase = function () {
    var parts = this.trim().split(' ');
    var result = '';
    parts.forEach(part => {
        let s = part.charAt(0);
        result += s.toUpperCase() + part.slice(1).toLowerCase() + " ";
    });
    return result;
};