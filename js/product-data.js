const productData = [
    {
        model: "BPL Exhaust Fan Basic 200 mm-BFEB-0201WH",
        articleCode: 491902858,
    },
    {
        model: "BPL Exhaust Fan Basic 250mm-BFEB-0301WH",
        articleCode: 491902859,
    },
    {
        model: "BPL Ceiling Fan Basic 1200mm-BFCB-1200IV",
        articleCode: 491902860,
    },
    {
        model: "BPL Ceiling Fan Basic 1200mm-BFCB-1201BR",
        articleCode: 491902861,
    },
    {
        model: "BPL Ceiling Fan Basic 1200mm-BFCB-1202WH",
        articleCode: 491902862,
    },
    {
        model: "BPL Ceiling Fan Basic 0600mm-BFCB-0600WH",
        articleCode: 491902863,
    },
    {
        model: "BPL Ceiling Fan Basic 060mm-BFCB-0601IV",
        articleCode: 491902864,
    },
    {
        model: "BPL Ceiling Fan Basic 0600mm-BFCB-0602BR",
        articleCode: 491902865,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1203WH",
        articleCode: 491902866,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1204BR",
        articleCode: 491902867,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1205IV",
        articleCode: 491902868,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1206BR",
        articleCode: 491902869,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1207WH",
        articleCode: 491902870,
    },
    {
        model: "BPL Ceiling Fan HS 1200mm-BFCB-1208IV",
        articleCode: 491902871,
    },
    { model: "BPL Table Fan 400 MM-BFTB-0400WH", articleCode: 491903263 },
    {
        model: "BPL Pedestal Fan 400 MM-BFPB-0400WH",
        articleCode: 491959015,
    },
    { model: "BPL Wall Fan 400 MM-BFWB-0400WH", articleCode: 491959016 },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1211BL",
        articleCode: 492284040,
    },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1212BL",
        articleCode: 492284041,
    },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1213WH",
        articleCode: 492284042,
    },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1214BL",
        articleCode: 492284043,
    },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1215BL",
        articleCode: 492284044,
    },
    {
        model: "BPL Ceiling Fan Deco 1200mm-BFCD-1216WH",
        articleCode: 492284045,
    },
    {
        model: "BPL 20W REGULAR LED BATTEN BN20RG0A-CDL",
        articleCode: 491902794,
    },
    {
        model: "BPL 22W REGULAR LED BATTEN BN22RG0A-CDL",
        articleCode: 491902795,
    },
    {
        model: "BPL 30W ALUMINIUM BATTEN BN30AL0A-CDL",
        articleCode: 491902796,
    },
    {
        model: "BPL 20W SENSOR LED BATTEN BN20SN0B-CDL",
        articleCode: 491902828,
    },
    {
        model: "BPL 20W LED EMERGNCY BATTEN BN20EM0B-CDL",
        articleCode: 491902829,
    },
    {
        model: "BPL 7W REGULAR LED BULB BB07RG0A-CDL",
        articleCode: 491902790,
    },
    { model: "BPL 9W LED BULB BB09RG0A-CDL 6500K", articleCode: 491902791 },
    {
        model: "BPL 12W REGULAR LED BULB BB12RG0A-CDL",
        articleCode: 491902792,
    },
    {
        model: "BPL 18W REGULAR LED BULB BB18RG0A-CDL",
        articleCode: 491902793,
    },
    {
        model: "BPL 9W EMERGENCY LED BULB BB09EM0A-CDL",
        articleCode: 491902797,
    },
    {
        model: "BPL 0.5W WHITE DECO BULB BD01RG0A-W",
        articleCode: 491902798,
    },
    {
        model: "BPL 0.5W YELLOW DECO BULB BD01RG0A-Y",
        articleCode: 491902799,
    },
    { model: "BPL 0.5W RED DECO BULB BD01RG0A-R", articleCode: 491902800 },
    {
        model: "BPL 0.5W GREEN DECO BULB BD01RG0A-G",
        articleCode: 491902801,
    },
    {
        model: "BPL 10W LED REGULAR T-BULB BT10RG0B-CDL",
        articleCode: 491902824,
    },
    {
        model: "BPL 18W LED REGULAR T-BULB BT18RG0B-CDL",
        articleCode: 491902825,
    },
    {
        model: "BPL 26W LED REGULAR T-BULB BT26RG0B-CDL",
        articleCode: 491902826,
    },
    {
        model: "BPL 7W SENSOR LED BULB BB07SN0B-CDL",
        articleCode: 491902827,
    },
    {
        model: "BPL 25W REGULAR T-BULB BT25RG0B-CDL",
        articleCode: 492284205,
    },
    { model: "BPL 9W Smart LED Bulb BB09SM0A-5C", articleCode: 492573344 },
    { model: "BPL 30W REGULAR BULB BH30RG0B-CDL", articleCode: 492664296 },
    { model: "BPL 40W REGULAR BULB BH40RG0B-CDL", articleCode: 492664297 },
    { model: "BPL 50W REGULAR BULB BH50RG0B-CDL", articleCode: 492664298 },
    { model: "BPL SAC 1.0T INV3S Sx BS-V123SX20", articleCode: 581026667 },
    { model: "BPL SAC 1.0T INV3S Mx BS-V123MX20", articleCode: 581026668 },
    { model: "BPL SAC 1.5T INV3S Sx BS-V183SX20", articleCode: 581026669 },
    { model: "BPL SAC 1.5T INV3S Mx BS-V183MX21", articleCode: 581026670 },
    { model: "BPL SAC 1.5T INV3S Mx BS-V183MX20", articleCode: 581026671 },
    { model: "BPL SAC 1.5T INV5S Px BS-V185PX20", articleCode: 581026672 },
    { model: "BPL SAC 2.0T INV3S Sx BS-V243SX20", articleCode: 581026673 },
    { model: "BPL SAC 1.0T INV3S Px BS-V123PX20", articleCode: 581026696 },
    { model: "BPL SAC 1.5T INV3S Px BS-V183PX20", articleCode: 581026697 },
    { model: "BPL SAC 1.5T INV5S Sx BS-V185SX20", articleCode: 581026698 },
    { model: "BPL SAC 1.5T INV5S Mx BS-V185MX20", articleCode: 581026699 },
    { model: "BPL SAC 2.0T INV3S Mx BS-V243MX20", articleCode: 581026700 },
    { model: "BPL SAC 2.0T INV3S Px BS-V243PX20", articleCode: 581026701 },
    { model: "BPL SAC 2.0T INV3S Mx BS-V243MX11", articleCode: 581109971 },
    { model: "BPL SAC 1.0T INV3S Sx BS-V123SX10", articleCode: 581110090 },
    { model: "BPL SAC 1.5T INV3S Sx BS-V183SX10", articleCode: 581110091 },
    { model: "BPL SAC 1.5T INV5S Sx BS-V185SX10", articleCode: 581110092 },
    { model: "BPL SAC 1.0T INV3S Mx BS-V123MX10", articleCode: 581110093 },
    { model: "BPL SAC 1.5T INV3S Mx BS-V183MX10", articleCode: 581110094 },
    { model: "BPL SAC 1.5T INV5S Mx BS-V185MX10", articleCode: 581110095 },
    { model: "BPL SAC 1.0T INV3S Px BS-V123PX10", articleCode: 581110096 },
    { model: "BPL SAC 1.5T INV3S Px BS-V183PX10", articleCode: 581110097 },
    { model: "BPL SAC 1.5T INV5S Px BS-V185PX10", articleCode: 581110098 },
    { model: "BPL SAC 2.0T INV3S Sx BS-V243SX10", articleCode: 581110162 },
    { model: "BPL SAC 1.0T INV3S Sx BS-V123SX11", articleCode: 581110163 },
    { model: "BPL SAC 1.5T INV3S Mx BS-V183MX11", articleCode: 581110164 },
    { model: "BPL SAC 1.5T INV5S Mx BS-V185MX11", articleCode: 581110165 },
    { model: "BPL SAC 1T INV3S BAS-I12CSSM", articleCode: 581027080 },
    { model: "BPL SAC 1T INV3S BAS-I3BCSSY", articleCode: 581027081 },
    { model: "BPL SAC 1T INV5S BAS-I12ESSM", articleCode: 581027082 },
    { model: "BPL SAC 1T INV5S BAS-I3BESSY", articleCode: 581027083 },
    { model: "BPL SAC 1.5T INV3S BAS-I18CSSM", articleCode: 581027084 },
    { model: "BPL SAC 1.5T INV3S BAS-I5ACSSY", articleCode: 581027085 },
    { model: "BPL SAC 1.5T INV3S BAS-D18CSSG", articleCode: 581027086 },
    { model: "BPL SAC 1.5T INV3S BAS-D18CSSM", articleCode: 581027087 },
    { model: "BPL SAC 1.5T INV3S BAS-D5ACSSY", articleCode: 581027088 },
    { model: "BPL SAC 1.5T INV3S BAS-D5ACSSR", articleCode: 581027089 },
    { model: "BPL SAC 1.5T INV5S BAS-D18ESPW", articleCode: 581027090 },
    { model: "BPL SAC 1.5T INV5S BAS-D5AESGD", articleCode: 581027091 },
    { model: "BPL SAC 1.5T INV5S BAS-D5AESPW", articleCode: 581027092 },
    { model: "BPL SAC 2T INV3S BAS-D24CSPW", articleCode: 581027093 },
    { model: "BPL SAC 2T INV3S BAS-D7ACSGD", articleCode: 581027094 },
    { model: "BPL SAC 2T INV3S BAS-D7ACSPW", articleCode: 581027095 },
    { model: "BPL SAC 0.9T INV3S BAS-I11CAFC", articleCode: 581110221 },
    { model: "BPL SAC 0.9T INV3S BAS-I3ACAFC", articleCode: 581110222 },
    { model: "BPL SAC 1T INV3S BAS-I12CAFC", articleCode: 581110226 },
    { model: "BPL SAC 1T INV3S BAS-I3BCAPW", articleCode: 581110227 },
    { model: "BPL SAC 1T INV5S BAS-I12EAFC", articleCode: 581110230 },
    { model: "BPL SAC 1T INV5S BAS-I3BEAPW", articleCode: 581110231 },
    { model: "BPL SAC 1.5T INV3S BAS-I18CAFC", articleCode: 581110234 },
    { model: "BPL SAC 1.5T INV3S BAS-I5ACAPW", articleCode: 581110235 },
    { model: "BPL SAC 1.5T INV5S BAS-I18EAFC", articleCode: 581110239 },
    { model: "BPL SAC 1.5T INV5S BAS-I5AEAFC", articleCode: 581110240 },
    { model: "BPL SAC 2T INV3S BAS-I24CAFC", articleCode: 581110245 },
    { model: "BPL SAC 2T INV3S BAS-I7ACAFC", articleCode: 581110246 },
    { model: "BPL SAC 1T FS2S BAS-F12BAFC", articleCode: 581110251 },
    { model: "BPL SAC 1T FS2S BAS-F3BBAFC", articleCode: 581110252 },
    { model: "BPL SAC 1.5T FS2S BAS-F18BAFC", articleCode: 581110257 },
    { model: "BPL SAC 1.5T FS2S BAS-F5ABAFC", articleCode: 581110258 },
    { model: "BPL SAC 2T FS2S BAS-F24BAFC", articleCode: 581110263 },
    { model: "BPL SAC 2T FS2S BAS-F7ABAFC", articleCode: 581110264 },
    { model: "BPL WAC 1.5T FS2S BAW-F18BPSY", articleCode: 493627310 },
    { model: "BPL WAC 1.5T FS2S BAW-F5ABPSY", articleCode: 493627311 },
    { model: "BPL WAC 1T FS2S BAW-F12BPSY", articleCode: 493627314 },
    { model: "BPL WAC 1T FS2S BAW-F3BBPSY", articleCode: 493627315 },
    { model: "BPL SAC 1.5T INV3S BAS-H18CPYG", articleCode: 581027107 },
    { model: "BPL SAC 1.5T INV3S BAS-H5ACPYG", articleCode: 581027108 },
    { model: "BPL WAC 1.5T INV3S BAW-I18CBPW", articleCode: 493672563 },
    { model: "BPL WAC 1.5T INV3S BAW-I5ACBPW", articleCode: 493672564 },
    {
        model: "BPL Wireless Soundbar BWLSBF102 Black",
        articleCode: 491935981,
    },
    { model: "BPL Soundbar BSBF502 Black 180w", articleCode: 491935982 },
    { model: "BPL Soundbar BSBF302 Black 120w", articleCode: 491935983 },
    { model: "BPL Sample for Wireless Soundbar", articleCode: 491935998 },
    { model: "BPL Soundbar BSBL101 40w", articleCode: 491936001 },
    { model: "BPL Soundbar BSBL301 100w", articleCode: 491936002 },
    { model: "BPL WIRELESS SOUNDBAR BWLSBR303", articleCode: 491936003 },
    {
        model: "BPL Wireless Soundbar BWLSBF102 Grey",
        articleCode: 491936082,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF502 Grey",
        articleCode: 491936083,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF302 Grey",
        articleCode: 491936084,
    },
    { model: "BPL WIRELESS SOUNDBAR BWLSBR503", articleCode: 491936131 },
    { model: "BPL Party Speaker 80W BPS101", articleCode: 491935978 },
    { model: "BPL Party Speaker 100W BPS301", articleCode: 491935979 },
    { model: "BPL Party Speaker 200W BPS501", articleCode: 491935980 },
    {
        model: "BPL WL Speaker Stereo BWLSF102 Black",
        articleCode: 491935984,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 Black",
        articleCode: 491935985,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF502 Black",
        articleCode: 491935986,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR303 Black",
        articleCode: 491935987,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF302 Black",
        articleCode: 491935988,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF508 Black",
        articleCode: 491935989,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL301 Black",
        articleCode: 491935990,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL101 Grey",
        articleCode: 491936054,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF102 Green",
        articleCode: 491936096,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 White",
        articleCode: 491936097,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF502 Green",
        articleCode: 491936098,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR303 Wooden",
        articleCode: 491936099,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF302 Blue",
        articleCode: 491936100,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL301 Orange",
        articleCode: 491936101,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL101 Blue",
        articleCode: 491936102,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 Maroon",
        articleCode: 491936126,
    },
    { model: "BPL WL Speaker Stereo BWLSF502 Red", articleCode: 491936127 },
    { model: "BPL WL Speaker Stereo BWLSF302 Red", articleCode: 491936128 },
    { model: "BPL WL Speaker Stereo BWLSL101 Red", articleCode: 491936129 },
    {
        model: "BPL WL Smart Speaker BWLSS101 Black",
        articleCode: 491973533,
    },
    { model: "BPL WL Smart Speaker BWLSS101 Red", articleCode: 491973534 },
    { model: "BPL Multimedia Speaker 32W BMMS101", articleCode: 491936130 },
    {
        model: "BPL Wrap Wire Earphone BWE301 Black",
        articleCode: 491935968,
    },
    { model: "BPL Sample for Wired Earphone", articleCode: 491935993 },
    {
        model: "BPL Wrap Wire Earphone BWE301 Green",
        articleCode: 491936085,
    },
    {
        model: "BPL Wrap Wire Earphone BWE301 Maroon",
        articleCode: 491936123,
    },
    { model: "BPL Wired Headphone BWH101 Black", articleCode: 491935977 },
    { model: "BPL Sample for Wired Headphone", articleCode: 491935996 },
    { model: "BPL Wired Headphone BWH101 Grey", articleCode: 491936095 },
    { model: "BPL WL Earphone BWLE301 Black", articleCode: 491935969 },
    { model: "BPL WL Earphone BWLE301", articleCode: 491935970 },
    {
        model: "BPL Wireless Neckband BWLNB101 Green",
        articleCode: 491935971,
    },
    {
        model: "BPL Wireless Neckband BWLNB301 Black",
        articleCode: 491935972,
    },
    { model: "BPL Sample for Wireless Earphpone", articleCode: 491935994 },
    {
        model: "BPL Sample for Wireless TWS Earphone",
        articleCode: 491935997,
    },
    { model: "BPL WL Earphone BWLE301 Grey", articleCode: 491936086 },
    { model: "BPL WL Earphone BWLE301 White", articleCode: 491936087 },
    { model: "BPL WL Earphone BWLE301 Black", articleCode: 491936088 },
    { model: "BPL Wireless Neckband BWLNB101 Red", articleCode: 491936089 },
    {
        model: "BPL Wireless Neckband BWLNB301 Grey",
        articleCode: 491936090,
    },
    { model: "BPL True Wireless BTWS101 C", articleCode: 491936171 },
    { model: "BPL True Wireless BTWS301C", articleCode: 491936172 },
    { model: "TWS Earphone Airdopes 141", articleCode: 492796565 },
    { model: "Wireless Earphone  255pro", articleCode: 492796566 },
    { model: "Wireless Earphone 255pro plus", articleCode: 492796567 },
    { model: "TWS Earphone Airbuds Mini", articleCode: 492796568 },
    { model: "BPL WL Headphone BWLH101 Grey", articleCode: 491935975 },
    { model: "BPL WL Headphone BWLH301 BG", articleCode: 491935976 },
    { model: "BPL WL Headphone BWLH101 White", articleCode: 491936093 },
    { model: "BPL WLHeadphone BWLH301 Green", articleCode: 491936094 },
    { model: "BPL True Wireless BTWS101 Black", articleCode: 491935973 },
    { model: "BPL True Wireless BTWS301 Cyan", articleCode: 491935974 },
    { model: "BPL True Wireless BTWS101 White", articleCode: 491936091 },
    { model: "BPL True Wireless BTWS301 White", articleCode: 491936092 },
    { model: "BPL True Wireless BTWS101 Teal", articleCode: 491936124 },
    {
        model: "BPL True Wireless BTWS301 Rose Gold",
        articleCode: 491936125,
    },
    { model: "BPL Party Speaker 80W BPS101", articleCode: 491935978 },
    { model: "BPL Party Speaker 100W BPS301", articleCode: 491935979 },
    { model: "BPL Party Speaker 200W BPS501", articleCode: 491935980 },
    {
        model: "BPL Wireless Soundbar BWLSBF102 Black",
        articleCode: 491935981,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF502 Black",
        articleCode: 491935982,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF302 Black",
        articleCode: 491935983,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF102 Black",
        articleCode: 491935984,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 Black",
        articleCode: 491935985,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF502 Black",
        articleCode: 491935986,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR303 Black",
        articleCode: 491935987,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF302 Black",
        articleCode: 491935988,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF508 Black",
        articleCode: 491935989,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL301 Black",
        articleCode: 491935990,
    },
    { model: "BPL Sample for Wireless Speaker", articleCode: 491935991 },
    { model: "BPL Sample for Party Speaker", articleCode: 491935992 },
    { model: "BPL Sample for Wireless Soundbar", articleCode: 491935998 },
    { model: "BPL Sample for MM speaker", articleCode: 491935999 },
    { model: "BPL Wireless Soundbar BWLSBL101", articleCode: 491936001 },
    { model: "BPL Wireless Soundbar BWLSBL301", articleCode: 491936002 },
    { model: "BPL Wireless Soundbar BWLSBR303", articleCode: 491936003 },
    {
        model: "BPL WL Speaker Stereo BWLSL101 Grey",
        articleCode: 491936054,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF102 Grey",
        articleCode: 491936082,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF502 Grey",
        articleCode: 491936083,
    },
    {
        model: "BPL Wireless Soundbar BWLSBF302 Grey",
        articleCode: 491936084,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF102 Green",
        articleCode: 491936096,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 White",
        articleCode: 491936097,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF502 Green",
        articleCode: 491936098,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR303 Wooden",
        articleCode: 491936099,
    },
    {
        model: "BPL WL Speaker Stereo BWLSF302 Blue",
        articleCode: 491936100,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL301 Orange",
        articleCode: 491936101,
    },
    {
        model: "BPL WL Speaker Stereo BWLSL101 Blue",
        articleCode: 491936102,
    },
    {
        model: "BPL WL Speaker Stereo BWLSR103 Maroon",
        articleCode: 491936126,
    },
    { model: "BPL WL Speaker Stereo BWLSF502 Red", articleCode: 491936127 },
    { model: "BPL WL Speaker Stereo BWLSF302 Red", articleCode: 491936128 },
    { model: "BPL WL Speaker Stereo BWLSL101 Red", articleCode: 491936129 },
    { model: "BPL Multimedia Speaker 32W BMMS101", articleCode: 491936130 },
    { model: "BPL Wireless Soundbar BWLSBR503", articleCode: 491936131 },
    {
        model: "BPL WL Smart Speaker BWLSS101 Black",
        articleCode: 491973533,
    },
    { model: "BPL WL Smart Speaker BWLSS101 Red", articleCode: 491973534 },
    { model: "BPL REF DC 193 L BRD-2100AVMR", articleCode: 491903161 },
    { model: "BPL REF DC 193 L BRD-2100AVDB", articleCode: 491903162 },
    { model: "BPL REF DC 193 L BRD-2100AVSS", articleCode: 491903163 },
    { model: "BPL REF DC 193 L BRD-2100AVCS", articleCode: 491903164 },
    { model: "BPL REF DC 193 L BRD-2100AGBK", articleCode: 491903165 },
    { model: "BPL REF DC 193 L BRD-2100AGDB", articleCode: 491903166 },
    { model: "BPL REF DC 220L BRD-2400BVMR", articleCode: 492573242 },
    { model: "BRD-2400BVDB", articleCode: 492573243 },
    { model: "BRD-2400BVDB", articleCode: 492573244 },
    { model: "BPL REF DC 193 L BRD-2100BVDB", articleCode: 492573245 },
    { model: "BPL REF DC 193 L BRD-2100BVSS", articleCode: 492573246 },
    { model: "BPL REF DC 193 L BRD-2100BVCS", articleCode: 492573247 },
    { model: "BPL REF DC 193 L BRD-2100BGBK", articleCode: 492573248 },
    { model: "BPL REF DC 193 L BRD-2100BGDB", articleCode: 492573249 },
    { model: "BPL REF DC 45L BRC-0600BPBK", articleCode: 492573250 },
    { model: "BPL REF DC 95L BRC-1100BPMR", articleCode: 492573251 },
    { model: "BPL REF DC 45L BRC-0600BPJA", articleCode: 492573252 },
    { model: "BPL REF DC 95L BRC-1100BPJA", articleCode: 492573253 },
    { model: "BPL FF 340 L BRF-3600AVJG", articleCode: 492284018 },
    { model: "BPL FF 365 L BRF-3800AVJG", articleCode: 492284019 },
    { model: "BPL FF 340 L BRF-3600AVSS", articleCode: 492284020 },
    { model: "BPL FF 365 L BRF-3800AVSS", articleCode: 492284021 },
    { model: "BPL FF 450 L BRF-4700AVJG", articleCode: 492391743 },
    { model: "BPL FF 500 L BRF-5200AVJG", articleCode: 492391744 },
    { model: "BPL FF 450 L BRF-4700AVSS", articleCode: 492391745 },
    { model: "BPL FF 500 L BRF-5200AVSS", articleCode: 492391746 },
    { model: "BPL REF SBS 570 L BRS-5900AVDG", articleCode: 491959183 },
    { model: "BPL Ref FF 260L BRF-G280RBPHGZ", articleCode: 492911306 },
    { model: "BPL Ref FF 260L BRF-G280RCPUKZ", articleCode: 492911307 },
    { model: "BPL Ref FF 280L BRF-G300RBPHGZ", articleCode: 492911308 },
    { model: "BPL Ref FF 280L BRF-G300RCPUKZ", articleCode: 492911309 },
    { model: "BPL Ref FF 310L BRF-G330RBPHGZ", articleCode: 492911310 },
    { model: "BPL Ref FF 310L BRF-G330RCPUKZ", articleCode: 492911311 },
    { model: "BPL FF 365 L BRF-3800AVJG", articleCode: 492284019 },
    { model: "BPL FF 365 L BRF-3800AVSS", articleCode: 492284021 },
    { model: "BPL FF 500 L BRF-5200AVJG", articleCode: 492391744 },
    { model: "BPL FF 500 L BRF-5200AVSS", articleCode: 492391746 },
    {
        model: "BPL Ref FF  255L/280L 3S BRF-G300RCPUKZ",
        articleCode: 492911309,
    },
    {
        model: "BPL Ref FF 235L/260L 2S BRF-G280RBPHGZ",
        articleCode: 492911306,
    },
    { model: "BPL DC Ref BRD-F191EBPTMP", articleCode: 493672597 },
    {
        model: "BPL Ref FF 235L/260L 3S BRF-G280RCPUKZ",
        articleCode: 492911307,
    },
    { model: "BPL FF 340 L BRF-3600AVJG", articleCode: 492284018 },
    {
        model: "BPL REF DC 174L/193L 3S BRD-2100AVMR",
        articleCode: 491903161,
    },
    {
        model: "BPL REF DC 176L/193L 3S BRD-2100AGDB",
        articleCode: 491903166,
    },
    {
        model: "BPL REF DC 174L/193L 3S BRD-2100AVDB",
        articleCode: 491903162,
    },
    {
        model: "BPL REF DC 216L/220L 3S BRD-2400BVDB",
        articleCode: 492573243,
    },
    {
        model: "BPL Ref FF 255L/280L 2S BRF-G300RBPHGZ",
        articleCode: 492911308,
    },
    {
        model: "BPL REF DC 176L/193L 3S BRD-2100AGBK",
        articleCode: 491903165,
    },
    {
        model: "BPL REF DC 216L/220L 3S BRD-2400BVMR",
        articleCode: 492573242,
    },
    {
        model: "BPL REF COMPACT 93L/95L 1S BRC-1100BPMR",
        articleCode: 492573251,
    },
    { model: "BPL FF 340 L BRF-3600AVSS", articleCode: 492284020 },
    {
        model: "BPL Ref FF 275L/310L 2S BRF-G330RBPHGZ",
        articleCode: 492911310,
    },
    {
        model: "BPL Ref FF 275L/310L 3S BRF-G330RCPUKZ",
        articleCode: 492911311,
    },
    {
        model: "BPL REF DC 174L/193L 3S BRD-2100AVCS",
        articleCode: 491903164,
    },
    {
        model: "BPL REF COMPACT 44L/45L 2S BRC-0600BPBK",
        articleCode: 492573250,
    },
    { model: "BPL DC Ref BRD-F190RBPSMP", articleCode: 493672565 },
    { model: "BPL DC Ref BRD-F191EBPTBP", articleCode: 493672598 },
    { model: "BPL FF 450 L BRF-4700AVSS", articleCode: 492391745 },
    { model: "BPL FF 450 L BRF-4700AVJG", articleCode: 492391743 },
    {
        model: "BPL REF DC 174L/193L 3S BRD-2100AVSS",
        articleCode: 491903163,
    },
    { model: "BPL REF SBS 570 L BRS-5900AVDG", articleCode: 491959183 },
    {
        model: "BPL REF DC 175L/190L 2S BRD-F190EBPTBP",
        articleCode: 493672567,
    },
    {
        model: "BPL REF DC 175L/190L 2S BRD-F190EBPTMP",
        articleCode: 493672566,
    },
    { model: "BPL WM FAFL 6.0Kg BFW-6000MXCW", articleCode: 491959060 },
    { model: "BPL WM FAFL 7.0Kg BFW-7000PXCW", articleCode: 491959061 },
    { model: "BPL WM FAFL 7.0Kg BFW-7001MXCW", articleCode: 491959417 },
    { model: "BPL WM FATL 6.5Kg BTW-6500SXSG", articleCode: 491959035 },
    { model: "BPL WM FATL 7.0Kg BTW-7000MXSG", articleCode: 491959036 },
    { model: "BPL WM FATL 8.0Kg BTW-8000MXSG", articleCode: 491959037 },
    { model: "BPL WM SATT 8.0Kg BSW-8000PXPP", articleCode: 491959278 },
    { model: "BPL WM SATT 8.5Kg BSW-8500PXBL", articleCode: 491959279 },
    { model: "BPL WM SATT 9.0Kg BSW-9000PXBL", articleCode: 491959280 },
    { model: "BPL WM SATT 7.0Kg BSW-7000MXYL", articleCode: 491959420 },
    { model: "BPL WM SATT 10Kg BSW-1000PXPN", articleCode: 491959421 },
    { model: "BPL WM SATT 8.0Kg BSW-8000PXBL", articleCode: 492391650 },
    { model: "BPL WM SATT 8.5Kg BSW-8500PXLB", articleCode: 492391651 },
    { model: "BPL SATT 12.0KG BWS-N12EFBKD", articleCode: 493691991 },
    { model: "KELVINATOR SATT 6.5Kg KWS-A650DG", articleCode: 491604425 },
    { model: "KELVINATOR SATT 6.5Kg KWS-A650CR", articleCode: 491604426 },
    { model: "KELVINATOR SATT 6.5Kg KWS-A650PP", articleCode: 491604427 },
    { model: "KELVINATOR SATT 8.0Kg KWS-A800TB", articleCode: 491604428 },
    { model: "KELVINATOR SATT 8.0Kg KWS-A800CR", articleCode: 491604429 },
    { model: "KELVINATOR SATT 8.5Kg KWS-A850BR", articleCode: 491604430 },
    { model: "KELVINATOR SATT 7.0Kg KWS-A700DG", articleCode: 491604431 },
    { model: "KELVINATOR SATT 7.0Kg KWS-A700MR", articleCode: 491604432 },
    { model: "KELVINATOR SATT 7.5Kg KWS-A750SM", articleCode: 491604433 },
    { model: "KELVINATOR SATT 8.0Kg KWS-A800IB", articleCode: 491604434 },
    { model: "KELVINATOR FATL 6.5Kg KWT-A650LG", articleCode: 491604435 },
    { model: "KELVINATOR FATL 7.0Kg KWT-A700LG", articleCode: 491604436 },
    { model: "KELVINATOR FATL 8.0Kg KWT-A800SG", articleCode: 491604437 },
    { model: "KELVINATOR SATT 8.5Kg KWS-A850CBG", articleCode: 491604464 },
    {
        model: "KELVINATOR SATT 10.0 Kg KWS-A1000CBG",
        articleCode: 491604465,
    },
    { model: "KELVINATOR FAFL 6 Kg KWF-A600CW", articleCode: 491604466 },
    { model: "KELVINATOR FAFL 7.0Kg KWF-A700SG", articleCode: 491604467 },
    { model: "KELVINATOR SATT 7.5Kg KWS-A750EP", articleCode: 491902898 },
    { model: "KELVINATOR SATT 8.5Kg KWS-A850EP", articleCode: 491902899 },
    { model: "KELVINATOR SATT 6.5Kg KWS-B650CR", articleCode: 492283950 },
    { model: "KELVINATOR SATT 6.5Kg KWS-B650BL", articleCode: 492283951 },
    { model: "KELVINATOR SATT 8.5Kg KWS-B850BL", articleCode: 492283952 },
    { model: "KELVINATOR Washer 7.5Kg KWW-B750BR", articleCode: 492391789 },
    { model: "KELVINATOR FAFL 7.0Kg KWF-C700CW", articleCode: 492579445 },
    { model: "KELVINATOR FAFL 8.0Kg KWF-C800CW", articleCode: 492579446 },
    { model: "KELVINATOR SATT  12kg KWS C120DG", articleCode: 493620614 },
    {
        model: "KELV DC REF KFL215WT WINE TONE 200L",
        articleCode: 490937336,
    },
    { model: "KELVINATOR COMPACT 45L KRC-A060SGP", articleCode: 491604408 },
    { model: "KELVINATOR COMPACT 95L KRC-A110SGP", articleCode: 491604409 },
    { model: "KELVINATOR DC 170L KRD-A190MRP", articleCode: 491604410 },
    { model: "KELVINATOR DC 170L KRD-A190DBP", articleCode: 491604411 },
    {
        model: "KEL REF DC 175L/190L 2S KRD-A210MRP",
        articleCode: 491604412,
    },
    {
        model: "KEL REF DC 175L/190L 2S KRD-A210DBP",
        articleCode: 491604413,
    },
    { model: "KELVINATOR DC 190L KRD-A210HSP", articleCode: 491604414 },
    { model: "KELVINATOR DC 190L KRD-A210BKG", articleCode: 491604415 },
    {
        model: "KEL REF DC 180L/190L 2S KRD-A210SGG",
        articleCode: 491604416,
    },
    { model: "KELVINATOR FF 350L KRF-A370HSV", articleCode: 491604417 },
    { model: "KELVINATOR SBS 584L KRS-A600BKG", articleCode: 491604418 },
    { model: "KELVINATOR FF 250L KRF-A270BGV", articleCode: 491604419 },
    { model: "KELVINATOR FF 250L KRF-A270BSV", articleCode: 491604420 },
    { model: "KELVINATOR FF 250L KRF-A270ISV", articleCode: 491604421 },
    { model: "KELVINATOR FF 270L KRF-A290BGV", articleCode: 491604422 },
    { model: "KELVINATOR FF 270L KRF-A290BSV", articleCode: 491604423 },
    { model: "KELVINATOR FF 270L KRF-A290ISV", articleCode: 491604424 },
    { model: "KELVINATOR COMPACT 45L KRC-B060SGP", articleCode: 491903072 },
    {
        model: "KEL REF DC 180L/190L 2S KRD-B210MRG",
        articleCode: 491903073,
    },
    { model: "KELVINATOR DC 190L KRD-B210DBG", articleCode: 491903074 },
    {
        model: "KEL REF DC 180L/190L 2S KRD-B210PRG",
        articleCode: 491903075,
    },
    {
        model: "KEL REF DC 180L/190L 2S KRD-B211MRG",
        articleCode: 491903076,
    },
    { model: "KELVINATOR SBS 500L KRS-B520SSV", articleCode: 491959184 },
    { model: "KELVINATOR FF 252L KRF-B270DBV", articleCode: 491959185 },
    { model: "KELVINATOR FF 252L KRF-B270PRV", articleCode: 491959186 },
    { model: "KELVINATOR FF 272L KRF-B290DBV", articleCode: 491959187 },
    { model: "KELVINATOR FF 272L KRF-B290PRV", articleCode: 491959188 },
    { model: "KELVINATOR SBS 584L KRS-B600BKG", articleCode: 492284383 },
    { model: "KELVINATOR FF 252L KRF-B270BGV", articleCode: 492391747 },
    { model: "KELVINATOR FF 252L KRF-B270ISV", articleCode: 492391748 },
    { model: "KELVINATOR FF 272L KRF-B290BGV", articleCode: 492391749 },
    { model: "KELVINATOR FF 272L KRF-B290ISV", articleCode: 492391750 },
    { model: "KELVINATOR FF 450L KRF-C470HSV", articleCode: 492391751 },
    {
        model: "KEL REF DC 164L/170L 2S KRD-C190MRP",
        articleCode: 492911043,
    },
    {
        model: "KEL REF FF 232L/255L 2S KRF-G260RBPHSZ",
        articleCode: 492911298,
    },
    {
        model: "KEL REF FF 232L/255L 2S KRF-G260RBVMMZ",
        articleCode: 492911299,
    },
    {
        model: "KEL REF FF 252L/275L 2S KRF-G280RBPHSZ",
        articleCode: 492911300,
    },
    {
        model: "KEL REF FF 252L/275L 2S KRF-G280RBVMMZ",
        articleCode: 492911301,
    },
    {
        model: "KEL REF FF 272L/307L 2S KRF-G310RBPHSZ",
        articleCode: 492911302,
    },
    {
        model: "KEL REF FF 272L/307L 3S KRF-G310RCVMBZ",
        articleCode: 492911303,
    },
    {
        model: "KEL REF FF 304L/335L 2S KRF-G340RBPHSZ",
        articleCode: 492911304,
    },
    {
        model: "KEL REF FF 304L/335L 3S KRF-G340RCVMBZ",
        articleCode: 492911305,
    },
    {
        model: "KEL REF DC 164L/170L 3S KRD-F180ECPAMP",
        articleCode: 493620595,
    },
    {
        model: "KELVINATOR FF 252L 2S KRF-I260RBVIST",
        articleCode: 493627282,
    },
    {
        model: "KELVINATOR FF 252L 2S KRF-I260RBVBGT",
        articleCode: 493692132,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F200RBPSWS WINE",
        articleCode: 493715131,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F200EBPHGS GREY",
        articleCode: 493715132,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F200EBPKWS KELLY",
        articleCode: 493715133,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F200EBPKBS KELLY",
        articleCode: 493715134,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F201EBPKWS KELLY",
        articleCode: 493715135,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F201EBPKBS KELLY",
        articleCode: 493715136,
    },
    {
        model: "KEL REF DC 187L 3S KRD-F200ECPCWS BLOSOM",
        articleCode: 493715137,
    },
    {
        model: "KEL REF DC 187L 3S KRD-F200ECPCBS BLOSOM",
        articleCode: 493715138,
    },
    {
        model: "KEL REF DC 170L 2S KRD-F180RBPSWS WINE",
        articleCode: 493715205,
    },
    {
        model: "KEL REF DC 167L 2S KRD-F180RBPHGS GREY",
        articleCode: 493715206,
    },
    {
        model: "KEL REF DC 187L 2S KRD-F200EBPLBS LILY",
        articleCode: 493715257,
    },
    {
        model: "KEL REF DC 201L 2S KRD-F211EBPHGS Inox",
        articleCode: 493841759,
    },
    {
        model: "KEL REF DC 201L 2S KRD-F210EBPHGS Inox",
        articleCode: 493841760,
    },
    {
        model: "KEL REF DC 201L 3S KRD-I210ECPHGS Inox",
        articleCode: 493841761,
    },
    {
        model: "KEL REF DC 201L 3S KRD-I211ECEEWS ALLYNA",
        articleCode: 493841762,
    },
    {
        model: "KEL REF DC 201L 3S KRD-I210ECEEWS ALLYNA",
        articleCode: 493841763,
    },
    {
        model: "KEL REF DC 201L 3S KRD-I210ECEEBS ALLYNA",
        articleCode: 493841764,
    },
    {
        model: "KEL REF DC 201L 3S KRD-I210ECEFBS FREYA",
        articleCode: 493841765,
    },
    {
        model: "KEL REF DC 201L 4S KRD-I210EDEGWS FRUSIA",
        articleCode: 493841766,
    },
    {
        model: "KEL REF DC 201L 4S KRD-I211EDEIWS BLOOM",
        articleCode: 493841767,
    },
    {
        model: "KEL REF DC 201L 5S KRD-I210EEEIWS BLOOM",
        articleCode: 493841768,
    },
    {
        model: "KEL REF DC 221L 2S KRD-F231EBPHGS Inox",
        articleCode: 493841769,
    },
    {
        model: "KEL REF DC 221L 2S KRD-F230EBPHGS Inox",
        articleCode: 493841770,
    },
    {
        model: "KEL REF DC 221L 3S KRD-I231ECEEWS ALLYNA",
        articleCode: 493841771,
    },
    {
        model: "KEL REF DC 221L 3S KRD-I230ECEEWS ALLYNA",
        articleCode: 493841772,
    },
    {
        model: "KEL REF DC 221L 3S KRD-I230ECEEBS ALLYNA",
        articleCode: 493841773,
    },
    {
        model: "KEL REF DC 221L 4S KRD-I231EDEIWS BLOOM",
        articleCode: 493841774,
    },
    { model: "KELVINATOR DW 8 PLACE KDP-08B01W", articleCode: 491959151 },
    { model: "KELVINATOR DW 8 PLACE KDP-08B01W", articleCode: 491959152 },
    { model: "KELVINATOR DW 8 PLACE KDP-08B01W", articleCode: 491959153 },
    { model: "KELVINATOR DW 8 PLACE KDP-08B01W", articleCode: 491959154 },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12310B",
        articleCode: 581026650,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18310B",
        articleCode: 581026651,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12320B",
        articleCode: 581026674,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18320B",
        articleCode: 581026675,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18320M",
        articleCode: 581026676,
    },
    {
        model: "Kelvinator SAC 1T INV5S  KAS-X12520B",
        articleCode: 581026677,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S  KAS-X18520B",
        articleCode: 581026678,
    },
    {
        model: "Kelvinator SAC 2T INV3S  KAS-X24320B",
        articleCode: 581026679,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12320M",
        articleCode: 581026688,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12320P",
        articleCode: 581026689,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18320P",
        articleCode: 581026690,
    },
    {
        model: "Kelvinator SAC 1T INV5S  KAS-X12520M",
        articleCode: 581026691,
    },
    {
        model: "Kelvinator SAC 1T INV5S  KAS-X12520P",
        articleCode: 581026692,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S  KAS-X18520M",
        articleCode: 581026693,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S  KAS-X18520P",
        articleCode: 581026694,
    },
    {
        model: "Kelvinator SAC 2T INV3S  KAS-X24321B",
        articleCode: 581026695,
    },
    {
        model: "Kelvinator SAC 1.5T FS3S  KAS-Y18320B",
        articleCode: 581026737,
    },
    {
        model: "Kelvinator SAC 1.5T FS3S  KAS-Y18321B",
        articleCode: 581026826,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12300B",
        articleCode: 581109871,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12301B",
        articleCode: 581109872,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12300P",
        articleCode: 581109873,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12300M",
        articleCode: 581109874,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18301B",
        articleCode: 581109875,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18300B",
        articleCode: 581109876,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18300M",
        articleCode: 581109877,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18300P",
        articleCode: 581109878,
    },
    {
        model: "Kelvinator SAC 2.0T INV3S KAS-X24300B",
        articleCode: 581109879,
    },
    {
        model: "Kelvinator SAC 1T INV5S  KAS-X12500P",
        articleCode: 581109880,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S  KAS-X18500P",
        articleCode: 581109881,
    },
    {
        model: "Kelvinator SAC 1T INV3S  KAS-X12310B",
        articleCode: 581110084,
    },
    {
        model: "Kelvinator SAC 1T INV5S  KAS-X12510B",
        articleCode: 581110085,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S  KAS-X18310B",
        articleCode: 581110086,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S  KAS-X18510B",
        articleCode: 581110087,
    },
    {
        model: "Kelvinator SAC 2.0T INV3S  KAS-X24310B",
        articleCode: 581110088,
    },
    {
        model: "Kelvinator SAC 1.5T FS3S  KAS-Y18310B",
        articleCode: 581110089,
    },
    {
        model: "Kelvinator Window 1.0T FS3S KAW-Y12310B",
        articleCode: 491959031,
    },
    {
        model: "Kelvinator Window 1.5T FS3S KAW-Y18310B",
        articleCode: 491959032,
    },
    {
        model: "Kelvinator Window 1.5T FS3S KAW-Y18320B",
        articleCode: 492392026,
    },
    { model: "KEL SAC 1.5T 3STAR LUS53.CDE1", articleCode: 581101970 },
    { model: "KELVINATOR SAC 1.5T 5S LHS55", articleCode: 581102133 },
    { model: "KELV SAC 1T 5S LSJ35 WS1 MDA Wht", articleCode: 581107173 },
    { model: "KELV SAC 1.5T 5S LSJ55 WS1 MDA Wht", articleCode: 581107174 },
    {
        model: "Kelvinator SAC 0.9T INV3S KAS-I11CAFC",
        articleCode: 581110218,
    },
    {
        model: "Kelvinator SAC 0.9T INV3S KAS-I3ACAFC",
        articleCode: 581110219,
    },
    {
        model: "Kelvinator SAC 0.9T INV3S KAS-I3ACAPW",
        articleCode: 581110220,
    },
    {
        model: "Kelvinator SAC 1T INV3S KAS-I12CAFC",
        articleCode: 581110224,
    },
    {
        model: "Kelvinator SAC 1T INV3S KAS-I3BCAPW",
        articleCode: 581110225,
    },
    {
        model: "Kelvinator SAC 1T INV5S KAS-I12EAFC",
        articleCode: 581110228,
    },
    {
        model: "Kelvinator SAC 1T INV5S KAS-I3BEAPW",
        articleCode: 581110229,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I18CAFC",
        articleCode: 581110232,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I5ACAPW",
        articleCode: 581110233,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S KAS-I18EAFC",
        articleCode: 581110236,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S KAS-I5AEAFC",
        articleCode: 581110237,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S KAS-I5AEAPW",
        articleCode: 581110238,
    },
    { model: "Kelvinator SAC 2T FS2S KAS-F24BAFC", articleCode: 581110260 },
    { model: "Kelvinator SAC 2T FS2S KAS-F7ABAFC", articleCode: 581110261 },
    { model: "Kelvinator SAC 2T FS2S KAS-F7ABAPW", articleCode: 581110262 },
    { model: "Kelvinator SAC 1T FS2S KAS-F12BAFC", articleCode: 581110248 },
    { model: "Kelvinator SAC 1T FS2S KAS-F3BBAFC", articleCode: 581110249 },
    { model: "Kelvinator SAC 1T FS2S KAS-F3BBAPW", articleCode: 581110250 },
    {
        model: "Kelvinator SAC 1.5T FS2S KAS-F18BAFC",
        articleCode: 581110254,
    },
    {
        model: "Kelvinator SAC 1.5T FS2S KAS-F5ABAFC",
        articleCode: 581110255,
    },
    {
        model: "Kelvinator SAC 1.5T FS2S KAS-F5ABAPW",
        articleCode: 581110256,
    },
    {
        model: "Kelvinator SAC 2T INV3S KAS-I24CAFC",
        articleCode: 581110242,
    },
    {
        model: "Kelvinator SAC 2T INV3S KAS-I7ACAFC",
        articleCode: 581110243,
    },
    {
        model: "Kelvinator SAC 2T INV3S KAS-I7ACAPW",
        articleCode: 581110244,
    },
    {
        model: "Kelvinator SAC 1T INV3S KAS-I12CPTC",
        articleCode: 581027096,
    },
    {
        model: "Kelvinator SAC 1T INV3S KAS-I12CPYG",
        articleCode: 581027097,
    },
    {
        model: "Kelvinator SAC 1T INV3S KAS-I3BCPSB",
        articleCode: 581027098,
    },
    {
        model: "Kelvinator SAC 1T INV5S KAS-I12EPTC",
        articleCode: 581027099,
    },
    {
        model: "Kelvinator SAC 1T INV5S KAS-I12EPYG",
        articleCode: 581027100,
    },
    {
        model: "Kelvinator SAC 1T INV5S KAS-I3BEPSB",
        articleCode: 581027101,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I18CPTC",
        articleCode: 581027102,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I18CPYG",
        articleCode: 581027103,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I5ACPSB",
        articleCode: 581027104,
    },
    {
        model: "Kelvinator WAC 1.5T INV3S KAW-I18CPSC",
        articleCode: 493627306,
    },
    {
        model: "Kelvinator WAC 1.5T INV3S KAW-I5ACPSC",
        articleCode: 493627307,
    },
    {
        model: "Kelvinator WAC 1.5T FS2S KAW-F18BPSC",
        articleCode: 493627308,
    },
    {
        model: "Kelvinator WAC 1.5T FS2S KAW-F5ABPSC",
        articleCode: 493627309,
    },
    {
        model: "Kelvinator WAC 1.0T FS2S KAW-F12BPSC",
        articleCode: 493627312,
    },
    {
        model: "Kelvinator WAC 1.0T FS2S KAW-F3BBPSC",
        articleCode: 493627313,
    },
    {
        model: "Kelvinator SAC 1.25T INV3S KHS-I15CPYS",
        articleCode: 581027109,
    },
    {
        model: "Kelvinator SAC 1.25T INV3S KHS-I4ACPGF",
        articleCode: 581027110,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KHS-I18CPYS",
        articleCode: 581027111,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KHS-I5ACPGF",
        articleCode: 581027112,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S KHS-I18EPYS",
        articleCode: 581027113,
    },
    {
        model: "Kelvinator SAC 1.5T INV5S KHS-I5AEPGF",
        articleCode: 581027114,
    },
    {
        model: "Kelvinator SAC 2T INV3S KHS-I24CPYS",
        articleCode: 581027115,
    },
    {
        model: "Kelvinator SAC 2T INV3S KHS-I7ACPGF",
        articleCode: 581027116,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-H18CPTC",
        articleCode: 581027105,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-H5ACPTC",
        articleCode: 581027106,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I18CBPW",
        articleCode: 581110216,
    },
    {
        model: "Kelvinator SAC 1.5T INV3S KAS-I5ACBPW",
        articleCode: 581110217,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV0036K4",
        articleCode: 491903174,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00410K4",
        articleCode: 491903175,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00615K4",
        articleCode: 491903176,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00825K4",
        articleCode: 491903177,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00210",
        articleCode: 491959504,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00515",
        articleCode: 491959505,
    },
    {
        model: "Kelvinator STORAGE HEATER KWHSMV00725",
        articleCode: 491959506,
    },
    {
        model: "Kelvinator Instant Heater KWHIV0013",
        articleCode: 491903035,
    },
    { model: "Kel Dummy Instant Heater KWHIV0013", articleCode: 492284326 },
    {
        model: "Kelvinator Tower Cooler-30 ltr KCT-A300",
        articleCode: 491604448,
    },
    {
        model: "Kelvinator Tower Cooler-50 ltr KCT-A500",
        articleCode: 491604449,
    },
    {
        model: "Kelvinator Persnl Cooler 22 Ltr KCP-A220",
        articleCode: 491604450,
    },
    {
        model: "Kelvinator Persnl Cooler 36 Ltr KCP-A360",
        articleCode: 491604451,
    },
    {
        model: "Kelvinator Desert Cooler-55 ltr KCD-A550",
        articleCode: 491604452,
    },
    {
        model: "Kelvinator Desert Cooler-90 Ltr KCD-A900",
        articleCode: 491604453,
    },
    {
        model: "Kelvinator Window Cooler-50 Ltr KCW-A500",
        articleCode: 491604454,
    },
    {
        model: "Kelvinator Desert Cooler-65 ltr KCD-A650",
        articleCode: 491604455,
    },
    {
        model: "Kelvinator Tower Cooler-20 ltr KCT-A200",
        articleCode: 491604456,
    },
    {
        model: "Kelvinator Tower Cooler-34 ltr KCT-A340",
        articleCode: 491604457,
    },
    {
        model: "Kelvinator Window Cooler-50 Ltr KCW-B500",
        articleCode: 491959062,
    },
    {
        model: "Kelvinator Personal Cooler-22L KCP-B220",
        articleCode: 491959067,
    },
    {
        model: "Kelvinator Personal Cooler-36L KCP-B360",
        articleCode: 491959068,
    },
    {
        model: "Kelvinator Tower Cooler-30L KCT-B300",
        articleCode: 491959069,
    },
    {
        model: "Kelvinator Personal Cooler-42L KCP-B420",
        articleCode: 491959070,
    },
    {
        model: "Kelvinator Desert Cooler-70L KCD-B700",
        articleCode: 491959176,
    },
    {
        model: "Kelvinator Desert Cooler-70L KCD-B701",
        articleCode: 491959177,
    },
    {
        model: "Kelvinator Tower Cooler-18L KCT-B180",
        articleCode: 491959178,
    },
    {
        model: "Kelvinator Tower Cooler-32L KCT-B320",
        articleCode: 491959179,
    },
    {
        model: "Kelvinator Personal Cooler-22L KCP-C220",
        articleCode: 492573167,
    },
    {
        model: "Kelvinator Personal Cooler-36L KCP-C360",
        articleCode: 492573168,
    },
    {
        model: "Kelvinator Desert Cooler-70L KCD-C700",
        articleCode: 492573237,
    },
    {
        model: "Kelvinator Desert Cooler-70L KCD-C701",
        articleCode: 492573238,
    },
    { model: "Kelvinator Old Air Cooler", articleCode: 491894595 },
    { model: "Kelvinator KCD8001MBUP  80 L", articleCode: 493627328 },
    { model: "Kelvinator Cooler-65L KCD6501MBUP", articleCode: 493627326 },
    {
        model: "Kelvinator Desert Cooler-55 ltr KCD-A550",
        articleCode: 491604452,
    },
    {
        model: "Kelvinator Desert Cooler-65 ltr KCD-A650",
        articleCode: 491604455,
    },
    {
        model: "Kelvinator Desert Cooler-90 Ltr KCD-A900",
        articleCode: 491604453,
    },
    {
        model: "Kelvinator Persnl Cooler 22 Ltr KCP-A220",
        articleCode: 491604450,
    },
    {
        model: "Kelvinator Persnl Cooler 36 Ltr KCP-A360",
        articleCode: 491604451,
    },
    {
        model: "Kelvinator Tower Cooler-30 ltr KCT-A300",
        articleCode: 491604448,
    },
    {
        model: "Kelvinator Tower Cooler-50 ltr KCT-A500",
        articleCode: 491604449,
    },
    {
        model: "Kelvinator Window Cooler-50 Ltr KCW-A500",
        articleCode: 491604454,
    },
    { model: "Kelvoinator Cooler   KCD-B700", articleCode: 491959176 },
    {
        model: "Kelvinator Desert Cooler-90 Ltr KCD-A900",
        articleCode: 491604453,
    },
    {
        model: "Kelvinator Tower Cooler-30 ltr KCT-A300",
        articleCode: 491604448,
    },
    {
        model: "Kelvinator Tower Cooler-50 ltr KCT-A500",
        articleCode: 491604449,
    },
    {
        model: "Kelvinator Tower Cooler-30L KCT-B300",
        articleCode: 491959069,
    },
    {
        model: "Kelvinator Tower Cooler-18L KCT-B180",
        articleCode: 491959178,
    },
    {
        model: "Kelvinator Tower Cooler-32L KCT-B320",
        articleCode: 491959179,
    },
    {
        model: "Kelvinator Personal Cooler-22L KCP-B220",
        articleCode: 491959067,
    },
    {
        model: "Kelvinator Personal Cooler-36L KCP-B360",
        articleCode: 491959068,
    },
    {
        model: "Kelvinator Personal Cooler-42L KCP-B420",
        articleCode: 491959070,
    },
    {
        model: "Kelvinator Window Cooler-50 Ltr KCW-A500",
        articleCode: 491604454,
    },
    {
        model: "Kelvinator Window Cooler-50 Ltr KCW-B500",
        articleCode: 491959062,
    },
    { model: "WYZR Desert Cooler 50L-WCD050DGL", articleCode: 494227355 },
    { model: "WYZR Tower Cooler 30L-WCT030DGC", articleCode: 494227341 },
    { model: "WYZR Personal Cooler 36L-WCP036DGC", articleCode: 494227340 },
    { model: "WYZR Personal Cooler 22L-WCP022DGC", articleCode: 494227339 },
    { model: "WYZR Window Cooler 55L-WCW055DGB", articleCode: 494227347 },
    { model: "WYZR Desert Cooler-60L-WCD060DGD", articleCode: 494227349 },
    { model: "WYZR Desert Cooler 75L-WCD075DGL", articleCode: 494227356 },
    { model: "WYZR Desert Cooler-85L-WCD085DGD", articleCode: 494227350 },
    { model: "WYZR INSTANT HEATER WIWH3L3KW", articleCode: 494404292 },
    {
        model: "WYZR STORAGE HEATER 6L WSWHPP06L3KW5SGL",
        articleCode: 494338861,
    },
    {
        model: "WYZR STORAGE HEATER 10L WSWHPP10L2KW5SGL",
        articleCode: 494338593,
    },
    {
        model: "WYZR STORAGE HEATER 15L WSWHPP15L2KW5SGL",
        articleCode: 494338594,
    },
    {
        model: "WYZR STORAGE HEATER 25L WSWHPP25L2KW5SGL",
        articleCode: 494338595,
    },
    { model: "WYZR CF 1200 Breezify HS White 1SC", articleCode: 494338718 },
    { model: "WYZR CF 1200 Breezify HS Brown 1SC", articleCode: 494338719 },
    {
        model: "WYZR CF 1200 Breezify HS Smoke Brown 1SC",
        articleCode: 494338720,
    },
    {
        model: "WYZR CF 1200 Casa Breeze HS Brown 1SC",
        articleCode: 494338710,
    },
    {
        model: "WYZR CF 1200 Casa Breeze HS Ivory 1SC",
        articleCode: 494338711,
    },
    {
        model: "WYZR CF 1200 Casa Breeze HS Blue 1SC",
        articleCode: 494338712,
    },
    {
        model: "WYZR CF 1200 Casa Cool HS S Brown 1SC",
        articleCode: 494338715,
    },
    {
        model: "WYZR CF 1200 Casa Cool HS Ivory Gold 1SC",
        articleCode: 494338717,
    },
    { model: "WYZR CF 1200 Wind Max White 1SA", articleCode: 494338721 },
    { model: "WYZR CF 1200 Wind Max Blue 1SA", articleCode: 494338722 },
    {
        model: "WYZR CF 1200 Breeze Pro BLDC Brown 5SA",
        articleCode: 494338713,
    },
    {
        model: "WYZR CF 1200 Breeze Pro BLDC White 5SA",
        articleCode: 494338714,
    },
    { model: "WYZR EF 200 Ventilo HS Off White P", articleCode: 494338862 },
    { model: "WYZR EF 250 Ventilo HS Off White P", articleCode: 494338863 },
    { model: "WYZR TF 400 Cool Flow White Grey A", articleCode: 494338656 },
    { model: "WYZR PF 400 Cool Flow White Grey P", articleCode: 494338657 },
    { model: "WYZR WF 400 Cool Flow White Grey P", articleCode: 494338658 },
    { model: "WYZR PrF 225 Wind Mate C1 P", articleCode: 494338872 },
    { model: "WYZR MIXER GRINDER WMG41150 2J", articleCode: 494338406 },
    { model: "WYZR MIXER GRINDER WMG41250 3J", articleCode: 494338408 },
    { model: "WYZR MIXER GRINDER WMG42375 3J", articleCode: 494338419 },
    { model: "WYZR MIXER GRINDER WMG42475 4J", articleCode: 494338420 },
    { model: "WYZR SUPERB 500w Mixer Grinder 2J", articleCode: 494338406 },
    { model: "WYZR SUPERB 500w Mixer Grinder 3J", articleCode: 494338408 },
    {
        model: "WYZR POWERMIX 750w Mixer Grinder 3J",
        articleCode: 494338419,
    },
    { model: "WYZR Immersion heater WIMH1000W", articleCode: 494338372 },
    { model: "WYZR Immersion heater WIMH1500W", articleCode: 494338375 },
    { model: "WYZR Immersion heater WIMH1000WP", articleCode: 494338377 },
    { model: "WYZR Immersion heater WIMH1500WP", articleCode: 494338379 },
    {
        model: "WYZR Instant water heater WIWH3L3KW",
        articleCode: 494404292,
    },
    {
        model: "WYZR Storage water heater WSWHMET10L2KW5SPO",
        articleCode: 494338600,
    },
    {
        model: "WYZR Storage water heater WSWHMET15L2KW5SPO",
        articleCode: 494338601,
    },
    {
        model: "WYZR Storage water heater WSWHMET25L2KW5SPO",
        articleCode: 494338602,
    },
    {
        model: "WYZR Storage water heater WSWHPP06L3KW5S",
        articleCode: 494338861,
    },
    {
        model: "WYZR Storage water heater WSWHPP10L2KW5S",
        articleCode: 494338593,
    },
    {
        model: "WYZR Storage water heater WSWHPP15L2KW5S",
        articleCode: 494338594,
    },
    {
        model: "WYZR Storage water heater WSWHPP25L2KW5S",
        articleCode: 494338595,
    },
    { model: "WYZR Electric Kettle WEKS00115", articleCode: 494338483 },
    { model: "WYZR Dry Iron WDIS0002 750W", articleCode: 494338655 },
    { model: "WYZR Dry Iron WDIS0004 1000W", articleCode: 494338654 },
    {
        model: "WYZR Heavy weight iron WDIS0005 1000W",
        articleCode: 494338607,
    },
    { model: "WYZR Steam iron WSIS0006 1200W", articleCode: 494338608 },
    { model: "BPL Room Heater Fan BRHF2000R", articleCode: 494460043 },
    { model: "BPL Room Heater Fan BFRH2000V", articleCode: 494460484 },
    { model: "BPL Room Heater Fan BRHF2000E", articleCode: 494460474 },
    { model: "WYZR Room Heater Fan WFRH2000R", articleCode: 494460046 },
    { model: "WYZR Room Heater Fan WFRH2000V", articleCode: 494460485 },
    { model: "WYZR Room Heater Fan WFRH2000E", articleCode: 494460475 },
    { model: "BPL Room Heater Halogen BRHH3RR", articleCode: 494460041 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WHRH3RR", articleCode: 494460044 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'BRHF-2000"', articleCode: 494460043 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: 'WRHF-2000"', articleCode: 494460046 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "BPL Room Heater Halogen BRHH3R", articleCode: 494459904 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Halogen WRHH-3R", articleCode: 494459907 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "WYZR Room Heater Quartz WRHQ-2R", articleCode: 494459908 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    { model: "BPL Room Heater Quartz BRHQ2RR", articleCode: 494460042 },
    {
        model: "KLVN MIXER GRNDR 3JR 500W FBLO KMG00150",
        articleCode: 492391573,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG00250 3J",
        articleCode: 492391574,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG00355 3J",
        articleCode: 492391575,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG00455 3J",
        articleCode: 492391576,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG00575 3J 750W",
        articleCode: 492391577,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG00675 3J 750W",
        articleCode: 492391578,
    },
    {
        model: "Kelvinator MIXER GRINDER KMGJ00780 4J 800W",
        articleCode: 492391579,
    },
    {
        model: "Kelvinator MIXER GRINDER KMG20850 3J 500W",
        articleCode: 492911263,
    },
    {
        model: "Kelvinator GAS STOVE KGSGTR2222B GT",
        articleCode: 493627034,
    },
    {
        model: "Kelvinator GAS STOVE KGSGTR2233B GT",
        articleCode: 493627035,
    },
    { model: "KLVN HAND MXR 200W PL BLK KHM00120", articleCode: 491903036 },
    { model: "Kelvinator Hand Blender KHBC00230", articleCode: 491903038 },
    { model: "KLVN HAND BLENDR 250W BLK KHB00125", articleCode: 491959148 },
    {
        model: "Kelvinator Electric Kettle KEKS00415",
        articleCode: 491903077,
    },
    {
        model: "Kelvinator Electric Kettle KEKS00310",
        articleCode: 491903078,
    },
    {
        model: "Kelvinator Electric Kettle KEKSM00512",
        articleCode: 491903079,
    },
    {
        model: "KLVN ELCTR SS KTL 1.8L 1200W KEKS00118",
        articleCode: 491959054,
    },
    {
        model: "Kelvinator Pop-up Toaster KPTPM0022S",
        articleCode: 491903081,
    },
    {
        model: "Kelvinator Pop-up Toaster  KPTP0012S",
        articleCode: 491903099,
    },
    {
        model: "Kelvinator Sandwich Maker KSMS0012S",
        articleCode: 491902986,
    },
    {
        model: "Kelvinator Sandwich Maker KSMG0022S",
        articleCode: 491902987,
    },
    { model: "Kelvinator Coffee Maker KDCMS001", articleCode: 491959017 },
    { model: "Kelvinator OTG KOTGR00220", articleCode: 491903148 },
    { model: "Kelvinator OTG KOTGR00230", articleCode: 491903149 },
    { model: "Kelvinator OTG KOTG00110", articleCode: 491903150 },
    {
        model: "Kelvinator E RiceCooker KRCO001182B",
        articleCode: 491903100,
    },
    { model: "Kelvinator DRY IRONS KDISP0051", articleCode: 491959162 },
    { model: "Kelvinator DRY IRONS KDISP0061", articleCode: 491959163 },
    { model: "Kelvinator DRY IRONS KDISP0071", articleCode: 491959164 },
    { model: "Kelvinator DRY IRONS KDISP0081", articleCode: 491959165 },
    { model: "Kelvinator DRY IRONS KDIP10911", articleCode: 492391638 },
    { model: "Kelvinator DRY IRONS KDIP11011", articleCode: 492391639 },
    { model: "Kelvinator DRY IRONS KDIP11111", articleCode: 492391640 },
    { model: "Kelvinator DRY IRONS KDIP11211", articleCode: 492391641 },
    { model: "KELVINATOR STEAM IRON KSIG00112", articleCode: 491959170 },
    { model: "KELVINATOR STEAM IRON KSIG00212", articleCode: 491959171 },
    {
        model: "Kelvinator Instant Heater KWHIV0013",
        articleCode: 491903035,
    },
    { model: "KELVINATOR INSTANT GEYSER KIH 331", articleCode: 491213503 },
    {
        model: "Kel STORAGE Heater 10L KSWHVCM10L2KW4S",
        articleCode: 493715164,
    },
    { model: "Induction CT KICTP20114", articleCode: 493627162 },
    { model: "kelvinator induction kictp20116", articleCode: 493627163 },
    { model: "BPL MIXER GRINDER BMG00255 3J 550W", articleCode: 492391643 },
    { model: "BPL MIXER GRINDER BMG00460 3J 600W", articleCode: 492391645 },
    {
        model: "BPL MIXER GRINDER BMGJ20575 3J 750W",
        articleCode: 493620682,
    },
    { model: "BPL MIXER GRINDER BMG20675 3J 750W", articleCode: 493620683 },
    {
        model: "BPL MIXER GRINDER BMGJ20775 4J 750W",
        articleCode: 493620684,
    },
    { model: "BPL Mixer Grinder BMG30975 3J", articleCode: 493692418 },
    { model: "BPL MIXER GRINDER BMG34150 3J", articleCode: 493858819 },
    { model: "BPL Gas Stove BGSGTR0012B", articleCode: 491903040 },
    { model: "BPL Gas Stove BGSGTR0023B", articleCode: 491903041 },
    { model: "BPL Gas Stove BGSGTR0034B", articleCode: 491903042 },
    { model: "BPL GAS STOVE BGSGTS0042B", articleCode: 491903172 },
    { model: "BPL GAS STOVE BGSGTS0053B", articleCode: 491903173 },
    { model: "BPL INDUCTION COOKER BICTT00114", articleCode: 491903252 },
    {
        model: "BPL INDCTN COOKER 2000W TCH P BICTT00220",
        articleCode: 491903253,
    },
    { model: "BPL INDUCTION COOKER BICTTXL00320", articleCode: 491903254 },
    { model: "BPL HAND MIXER PLST 300W BHM00135", articleCode: 491903037 },
    { model: "BPL Hand Chopper BCH00130", articleCode: 491903043 },
    {
        model: "BPL HAND BLENDER 4IN1 600W BHBC00260",
        articleCode: 491903039,
    },
    {
        model: "BPL CHR RED MIXER BLENDER 400W BMBC00140",
        articleCode: 491903044,
    },
    { model: "BPL Electric Kettle CT BEKPS00317", articleCode: 491903092 },
    { model: "BPL Electric Kettle CT BEKPS00116", articleCode: 491903093 },
    { model: "BPL Electric Kettle CT BEKPS00216", articleCode: 491903094 },
    { model: "BPL Electric Kettle MC BEKPS00412", articleCode: 491903095 },
    {
        model: "BPL ELCTR SS KTL 1.7L 1200W BEKPS00517",
        articleCode: 491903096,
    },
    { model: "BPL ELECTRIC KETTLE CT BEKPS00616", articleCode: 491959457 },
    { model: "BPL ELECTRIC KETTLE CT BEKPS00716", articleCode: 491959458 },
    { model: "BPL Pop-up Toaster  BPTPM0022S", articleCode: 491903098 },
    { model: "BPL POP-UP TOASTER  BPTP0012S", articleCode: 491903250 },
    { model: "BPL POP-UP TOASTER  BPTPM0032S", articleCode: 491903251 },
    { model: "BPL Sandwich Maker BSMS0012S", articleCode: 491902984 },
    { model: "BPL Sandwich Maker BSMG0022S", articleCode: 491902985 },
    { model: "BPL Sandwich Maker BSMG0034S", articleCode: 491903097 },
    { model: "BPL SANDWICH MAKER BSMS0042S", articleCode: 491959055 },
    { model: "BPL SANDWICH MAKER BSMG0052S", articleCode: 491959056 },
    { model: "BPL COFFEE MAKER  BDCMD0016C", articleCode: 491903182 },
    { model: "BPL OTG BOTGRBQC00440", articleCode: 491959174 },
    { model: "BPL OTG BOTGRBBQC00540", articleCode: 491959175 },
    { model: "BPL OTG BOTGRBQC00230", articleCode: 491959173 },
    { model: "BPL E RICECOOKER BRCO001182B", articleCode: 491902981 },
    { model: "BPL E RICECOOKER BRCO00218", articleCode: 491902982 },
    { model: "BPL E RICECOOKER BRCO003222B", articleCode: 491902983 },
    {
        model: "BPL MIXER BLNDR 400W CHR RED BMBC00140",
        articleCode: 491903044,
    },
    { model: "BPL Mixer Blender BMBJ00240", articleCode: 491903045 },
    { model: "BPL Centrifugal Juicer BJC00150", articleCode: 491903046 },
    { model: "BPL DRY IRONS BDIP10911", articleCode: 492391634 },
    { model: "BPL DRY IRONS BDIP11011", articleCode: 492391635 },
    { model: "BPL DRY IRONS BDIP11111", articleCode: 492391636 },
    { model: "BPL DRY IRONS BDIP11211", articleCode: 492391637 },
    { model: "BPL DRY IRONS BDIS0011", articleCode: 491959158 },
    { model: "BPL DRY IRONS BDIS0021", articleCode: 491959159 },
    { model: "BPL DRY IRONS BDIS0031", articleCode: 491959160 },
    { model: "BPL DRY IRONS BDIS0041", articleCode: 491959161 },
    { model: "BPL STEAM IRON BSIBE00522", articleCode: 491959168 },
    { model: "BPL STEAM IRON BSIBE00622", articleCode: 491959169 },
    { model: "BPL STEAM IRON BSIG00112", articleCode: 491903145 },
    { model: "BPL STEAM IRON BSIG00212", articleCode: 491903146 },
    { model: "BPL INSTANT HEATER BWHIPV0013", articleCode: 491959364 },
    { model: "BPL INSTANT HEATER BWHIPV0023", articleCode: 491959365 },
    { model: "BPL STORAGE HEATER BWHSMV00615KDD5", articleCode: 491903110 },
    { model: "BPL STORAGE HEATER BWHSMV00825KDD5", articleCode: 491903111 },
    {
        model: "BPL STORAGE HEATER 25L BSWHVCM25L2KW5S",
        articleCode: 493715159,
    },
    { model: "BPL BEARD TRIMMER BBTD0013C", articleCode: 491903183 },
    { model: "BPL Desert Cooler 100L-BCD100DGN", articleCode: 494227358 },
    { model: "BPL Desert Cooler 55L-BCD055DGN", articleCode: 494227357 },
    { model: "BPL Desert Cooler 65L-BCD065CGP", articleCode: 494227359 },
    { model: "BPL Window Cooler 60L-BCW060CGB", articleCode: 494227345 },
    { model: "BPL Tower Cooler-18L-BCT018BEB", articleCode: 494227343 },
    { model: "BPL Personal Cooler 36L-BCP036CGC", articleCode: 494227335 },
    { model: "BPL Personal Cooler 30L-BCP030CGB", articleCode: 494227342 },
    { model: "BPL Personal Cooler 22L-BCP022CGC", articleCode: 494227334 },
    { model: "BPL Personal Cooler 18L-BCP018MBEL", articleCode: 494227352 },
    { model: "BPL Desert Cooler 90L-BCD090CGP", articleCode: 494227360 },
    { model: "BPL Desert Cooler 75L-BCD075BEL", articleCode: 494227351 },
    { model: "BPL INSTANT HEATER BIWHBLAZE3L3KW", articleCode: 491959332 },
    {
        model: "BPL STORAGE HEATER 6L BSWHPP06L3KW5SGL",
        articleCode: 494338860,
    },
    {
        model: "BPL STORAGE HEATER 10L BSWHPP10L2KW5SGL",
        articleCode: 494338589,
    },
    {
        model: "BPL STORAGE HEATER 15L BSWHPP15L2KW5SGL",
        articleCode: 494338590,
    },
    {
        model: "BPL STORAGE HEATER 25L BSWHPP25L2KW5SGL",
        articleCode: 494338591,
    },
    {
        model: "BPL STORAGE HEATER 10L BSWHMET10L2KW5SPO",
        articleCode: 494338597,
    },
    {
        model: "BPL STORAGE HEATER 15L BSWHMET15L2KW5SPO",
        articleCode: 494338598,
    },
    {
        model: "BPL STORAGE HEATER 25L BSWHMET25L2KW5SPO",
        articleCode: 494338599,
    },
    {
        model: "BPL STORAGE HEATER 10L BSWHMET10L2KW5SGL",
        articleCode: 494338945,
    },
    {
        model: "BPL STORAGE HEATER 15L BSWHMET15L2KW5SGL",
        articleCode: 494338946,
    },
    {
        model: "BPL Immersion heater 1000W BIMHNWP1000",
        articleCode: 493858070,
    },
    {
        model: "BPL Immersion heater 1500W BIMHNWP1500",
        articleCode: 492858071,
    },
    { model: "BPL STORAGE HEATER 15L", articleCode: 493715162 },
    {
        model: "LYF MIXER GRINDER LMG20250 3J 500 W",
        articleCode: 493620689,
    },
    {
        model: "LYF MIXER GRINDER LMG20575 4J 750 W",
        articleCode: 493620687,
    },
    {
        model: "LYF MIXER GRINDER LMG20150 2J 500 W",
        articleCode: 493620690,
    },
    { model: "Lyf INSTANT HEATER LWHIV2013", articleCode: 493627120 },
    {
        model: "LYF MIXER GRINDER LMG20475 3J 750 W",
        articleCode: 493620686,
    },
    {
        model: "LYF ELECTRIC KETTLE LEKS00115 1500W 1.5L",
        articleCode: 493627116,
    },
    {
        model: "LYF DRY IRON LDIHV20511 Heavy Weight",
        articleCode: 493627185,
    },
    {
        model: "LYF DRY IRON LDIHV20511 Heavy Weight",
        articleCode: 493627185,
    },
    {
        model: "LYF DRY IRON LDIP20275 750W Plastic body",
        articleCode: 493627182,
    },
    {
        model: "LYF MIXER GRINDER LMG20250 3J Black 500W",
        articleCode: 493620689,
    },
    {
        model: "LYF MIXER GRINDER LMG20475 3J Black 750W",
        articleCode: 493620686,
    },
    {
        model: "LYF MIXER GRINDER LMG20575 4J Black 750W",
        articleCode: 493620687,
    },
    { model: "LYF DRY IRON LDISP20411 1100W", articleCode: 493627184 },
    { model: "LYF DRY IRONS LDIS20175 750W", articleCode: 493627181 },
    { model: "LYF DRY IRON LDISP20311 1000W", articleCode: 493627183 },
    {
        model: "LYF  ELECTRIC KETTLE LEKS00115 1500W 1.5L",
        articleCode: 493627116,
    },
    {
        model: "LYF GAS STOVE LGSGTR2042B Glass Top",
        articleCode: 493627036,
    },
    {
        model: "LYF GAS STOVE LGSGTR2053B Glass Top",
        articleCode: 493627037,
    },
    {
        model: "LYF GAS STOVE LGSSSR2032B Steel Stove",
        articleCode: 493627038,
    },
    { model: "LYF INSTANT HEATER LWHIV2013", articleCode: 493627120 },
    {
        model: "LYF MIXER GRINDER LMG20150 2J White 500W (Black)",
        articleCode: 493620690,
    },
    {
        model: "LYF MIXER GRINDER LMG20355 3J Black 550W",
        articleCode: 493620688,
    },
    { model: "LD32HL2000A", articleCode: 493179512 },
    { model: "LD43UL7000A", articleCode: 493179513 },
    { model: "LWS-N75EASPP", articleCode: 493858060 },
    { model: "RECONNECT SAC 2.0T INV3S RHSAB2005", articleCode: 581108189 },
    { model: "RECONNECT SAC 1.5T INV3S RHSAB1507", articleCode: 581108188 },
    { model: "RECONNECT SAC 1.5T INV3S RHSAB1506", articleCode: 581107819 },
    { model: "RECONNECT SAC 1.0T INV3S RHSAB1006", articleCode: 581107818 },
    { model: "RECONNECT 32inch tv", articleCode: 493666560 },
    { model: "REECONNECT 43 inch Tv", articleCode: 493666562 },
    { model: "reconnect split ac 1.5 RHSSAB 1509", articleCode: 491296880 },
    { model: "Reconnect otg", articleCode: 492284002 },
    { model: "Reconnect  OTG", articleCode: 492284003 },
    {
        model: "Reeconnect 8.5 kg semi  washing matchine",
        articleCode: 491431432,
    },
    { model: "reconnect Hand blander H1027B", articleCode: 490845342 },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 SM",
        articleCode: 491615120,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 TH",
        articleCode: 491615121,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 CA",
        articleCode: 491615122,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 MY",
        articleCode: 491615123,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 BP",
        articleCode: 491615124,
    },
    {
        model: "RECONNECT POWERBANK10000MAHQPD DPB301 IM",
        articleCode: 491615125,
    },
    {
        model: "RECONNECT POWERBANK10000MAHQPD DPB301 AV",
        articleCode: 491615126,
    },
    {
        model: "RECONNECT POWERBANK10000MAHQPD DPB301 DP",
        articleCode: 491615127,
    },
    {
        model: "RECONNECT POWERBANK10000MAHQPD DPB301 SM",
        articleCode: 491615128,
    },
    {
        model: "RECONNECT POWERBANK10000MAHQPD DPB301 MY",
        articleCode: 491615129,
    },
    {
        model: "RECONNECT POWERBANK20000MAHQPD DPB502 HK",
        articleCode: 491615130,
    },
    {
        model: "RECONNECT POWERBANK20000MAHQPD DPB502 MY",
        articleCode: 491615131,
    },
    {
        model: "RECONNECT POWERBANK20000MAHQPD DPB502 TH",
        articleCode: 491615132,
    },
    {
        model: "RECONNECT POWERBANK20000MAHQPD DPB502 BP",
        articleCode: 491615133,
    },
    {
        model: "RECONNECT POWERBANK20000MAHQPD DPB502 AV",
        articleCode: 491615134,
    },
    {
        model: "RECONNECT POWERBANK10000MAH WL DPB501 IM",
        articleCode: 491615286,
    },
    {
        model: "RECONNECT POWERBANK10000MAH WL DPB501 CA",
        articleCode: 491615287,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB102 SW",
        articleCode: 491615299,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB101 CA",
        articleCode: 491615319,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB101 MY",
        articleCode: 491615320,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB101 SM",
        articleCode: 491615321,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB101 TH",
        articleCode: 491615322,
    },
    {
        model: "RECONNECT POWERBANK 10000MAH2A DPB101 BP",
        articleCode: 491615323,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB103 SM",
        articleCode: 491691594,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB103 CA",
        articleCode: 491691595,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB103 MY",
        articleCode: 491691596,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB103 BP",
        articleCode: 491691597,
    },
    {
        model: "Reconnect PowerBank 10000mAh2A DPB103 SW",
        articleCode: 491691598,
    },
    {
        model: "RECONNECT 18W WALL CHARGER DQWC301 CA",
        articleCode: 491615135,
    },
    {
        model: "RECONNECT 18W WALL CHARGER DQWC301 AV",
        articleCode: 491615136,
    },
    {
        model: "RECONNECT 18W WALL CHARGER DQWC301 TH",
        articleCode: 491615137,
    },
    {
        model: "Reconnect 18W Wall Charger DQWC301 MY",
        articleCode: 491615138,
    },
    {
        model: "RECONNECT WIRELESS CHARGER10W DWLC101 AV",
        articleCode: 491615139,
    },
    {
        model: "RECONNECT WIRELESS CHARGER10W DWLC101 BP",
        articleCode: 491615140,
    },
    {
        model: "RECONNECT WIRELESS CHARGER10W DWLC101 MY",
        articleCode: 491615141,
    },
    {
        model: "RECONNECT WIRELESS CHARGER10W DWLC101 CA",
        articleCode: 491615142,
    },
    {
        model: "RECONNECT WIRELESS CHARGER10W DWLC101 IM",
        articleCode: 491615143,
    },
    {
        model: "Reconnect 2 USB Wall Charger DWC101 CA",
        articleCode: 491615144,
    },
    {
        model: "Reconnect 2 USB Wall Charger DWC101 BP",
        articleCode: 491615145,
    },
    {
        model: "Reconnect 2 USB Wall Charger DWC101 HK",
        articleCode: 491615146,
    },
    {
        model: "Reconnect 2 USB Wall Charger DWC101 CM",
        articleCode: 491615147,
    },
    {
        model: "Reconnect 18W Car Charger DCC301 BP",
        articleCode: 491615148,
    },
    {
        model: "Reconnect 18W Car Charger DCC301 AV",
        articleCode: 491615149,
    },
    {
        model: "Reconnect 18W Car Charger DCC301 CA",
        articleCode: 491615150,
    },
    {
        model: "Reconnect 18W Car Charger DCC301 IM",
        articleCode: 491615151,
    },
    {
        model: "Reconnect FastCharge Carcharger DCC302BP",
        articleCode: 491691599,
    },
    {
        model: "Reconnect FastCharge Carcharger DCC302AV",
        articleCode: 491691600,
    },
    {
        model: "Reconnect FastCharge Carcharger DCC302CA",
        articleCode: 491691601,
    },
    {
        model: "Reconnect FastCharge Carcharger DCC302IM",
        articleCode: 491691602,
    },
    {
        model: "RECONNECT 10 INCH E- SLATE DES301 DD",
        articleCode: 491615212,
    },
    {
        model: "RECONNECT 10 INCH E- SLATE DES301 PR",
        articleCode: 491615213,
    },
    {
        model: "Reconnect 8.5 Inch E- Slate DES101 MY",
        articleCode: 491615214,
    },
    {
        model: "Reconnect 8.5 Inch E- Slate DES101 SM",
        articleCode: 491615215,
    },
    { model: "Reconnect Dual Cable DCB301 MY", articleCode: 491615095 },
    { model: "Reconnect Dual Cable DCB301 CM", articleCode: 491615096 },
    { model: "Reconnect Dual Cable DCB301 CA", articleCode: 491615097 },
    {
        model: "Reconnect Dual Cable DCB301 IM Face",
        articleCode: 491615098,
    },
    { model: "Reconnect Dual Cable DCB301 IM Arc", articleCode: 491615099 },
    {
        model: "Reconnect Key Chain C Cable DCB101 CA",
        articleCode: 491615100,
    },
    {
        model: "Reconnect Key Chain C Cable DCB101 IM",
        articleCode: 491615101,
    },
    {
        model: "Reconnect Key Chain C Cable DCB101 CM",
        articleCode: 491615102,
    },
    {
        model: "Reconnect Key Chain C Cable DCB101 AV",
        articleCode: 491615103,
    },
    {
        model: "RECONNECT LIGHTNING CABLE DCB501 TH",
        articleCode: 491615104,
    },
    {
        model: "RECONNECT LIGHTNING CABLE DCB501 AV",
        articleCode: 491615105,
    },
    {
        model: "RECONNECT LIGHTNING CABLE DCB501 CM",
        articleCode: 491615106,
    },
    {
        model: "Reconnect Reversible Cable DCB102 CA",
        articleCode: 491615107,
    },
    {
        model: "Reconnect Reversible Cable DCB102 IM",
        articleCode: 491615108,
    },
    {
        model: "Reconnect Reversible Cable DCB102 MY",
        articleCode: 491615109,
    },
    {
        model: "Reconnect Reversible Cable DCB102 CM",
        articleCode: 491615110,
    },
    { model: "Reconnect Type C Cable DCB103 TR", articleCode: 491615111 },
    { model: "Reconnect Type C Cable DCB103 HK", articleCode: 491615112 },
    { model: "Reconnect Type C Cable DCB103 BP", articleCode: 491615113 },
    { model: "Reconnect Type C Cable DCB103 CA", articleCode: 491615114 },
    {
        model: "Reconnect KeyChain Micro Cable DCB104 CA",
        articleCode: 491615240,
    },
    {
        model: "Reconnect KeyChain Micro Cable DCB104 IM",
        articleCode: 491615241,
    },
    {
        model: "Reconnect KeyChain Micro Cable DCB104 CM",
        articleCode: 491615242,
    },
    {
        model: "Reconnect KeyChain Micro Cable DCB104 AV",
        articleCode: 491615243,
    },
    { model: "Reconnect WL Speaker 2W DBTM101 CA", articleCode: 491600527 },
    { model: "Reconnect WL Speaker 2W DBTM101 DP", articleCode: 491600528 },
    { model: "Reconnect WL Speaker 2W DBTM101 MY", articleCode: 491600529 },
    { model: "Reconnect WL Speaker 2W DBTM101 SM", articleCode: 491600530 },
    { model: "Reconnect WL Speaker 3W DBTM102 BP", articleCode: 491600531 },
    { model: "Reconnect WL Speaker 3W DBTM102 CA", articleCode: 491600532 },
    {
        model: "Reconnect WL Speaker 3W DBTM102 MY Red",
        articleCode: 491600533,
    },
    {
        model: "Reconnect WL Speaker 3W DBTM102 MY Blue",
        articleCode: 491600534,
    },
    { model: "Reconnect WL Speaker 3W DISS501 MY", articleCode: 491600535 },
    { model: "Reconnect WL Speaker 3W DISS501 CA", articleCode: 491600536 },
    { model: "Reconnect WL Speaker 3W DISS501 BP", articleCode: 491600537 },
    {
        model: "Reconnect WL Speaker 10W DBTS101 IM",
        articleCode: 491600538,
    },
    {
        model: "Reconnect WL Speaker 10W DBTS101 AV",
        articleCode: 491600539,
    },
    {
        model: "Reconnect WL Speaker 10W DBTS101 CA",
        articleCode: 491600540,
    },
    {
        model: "Reconnect WL Speaker 16W DBTS301 CA",
        articleCode: 491600541,
    },
    {
        model: "Reconnect WL Speaker 16W DBTS301 MV",
        articleCode: 491600542,
    },
    {
        model: "Reconnect WL Speaker 16W DBTS301 IM",
        articleCode: 491600543,
    },
    {
        model: "Reconnect WL Party Speaker30W DPSB101 AV",
        articleCode: 491600544,
    },
    { model: "Reconnect WL Speaker 3W DBTM103 MY", articleCode: 491630476 },
    { model: "Reconnect WL Speaker 3W DBTM103 CA", articleCode: 491630477 },
    { model: "Reconnect WL Speaker 3W DBTM103 TH", articleCode: 491630478 },
    { model: "Reconnect Wired Earphone DWE101 CS", articleCode: 491600545 },
    { model: "Reconnect Wired Earphone DWE101 MY", articleCode: 491600546 },
    { model: "Reconnect Wired Earphone DWE101 SW", articleCode: 491600547 },
    { model: "Reconnect Wired Earphone DWE102 IM", articleCode: 491600548 },
    { model: "Reconnect Wired Earphone DWE102 MY", articleCode: 491600549 },
    { model: "Reconnect Wired Earphone DWE102 AV", articleCode: 491600550 },
    {
        model: "Reconnect Wired EarphoneSporty DWE501 CA",
        articleCode: 491600551,
    },
    {
        model: "Reconnect Wired EarphoneSporty DWE501 BP",
        articleCode: 491600552,
    },
    {
        model: "Reconnect Wired EarphoneSporty DWE501 IM",
        articleCode: 491600553,
    },
    {
        model: "Reconnect Wired Headphone OVE DWH101 IM",
        articleCode: 491615066,
    },
    {
        model: "Reconnect Wired Headphone OVE DWH101 BP",
        articleCode: 491615067,
    },
    {
        model: "Reconnect Wired Headphone OVE DWH101 CA",
        articleCode: 491615068,
    },
    {
        model: "Reconnect Wired Headphone Kids DWH102 MY",
        articleCode: 491615069,
    },
    {
        model: "Reconnect Wired Headphone Kids DWH102 FR",
        articleCode: 491615070,
    },
    {
        model: "Reconnect Wired Headphone Kids DWH102 SM",
        articleCode: 491615071,
    },
    {
        model: "Reconnect WL EarphoneNeckband DBTE301 CA",
        articleCode: 491600554,
    },
    {
        model: "Reconnect WL EarphoneNeckband DBTE301 MY",
        articleCode: 491600555,
    },
    {
        model: "Reconnect WL EarphoneNeckband DBTE301 HK",
        articleCode: 491600556,
    },
    { model: "Reconnect WL Earphone DBTE101 CA", articleCode: 491600557 },
    { model: "Reconnect WL Earphone DBTE101 DP", articleCode: 491600558 },
    { model: "Reconnect WL Earphone DBTE101 AV", articleCode: 491600559 },
    {
        model: "Reconnect WL Earphone Sporty DBTE501 CA",
        articleCode: 491600560,
    },
    {
        model: "Reconnect WL Earphone Sporty DBTE501 IM",
        articleCode: 491600561,
    },
    {
        model: "Reconnect WL Earphone Sporty DBTE501 AV",
        articleCode: 491600562,
    },
    {
        model: "Reconnect WL Headphone ANC DBTH502 AV",
        articleCode: 491600563,
    },
    {
        model: "Reconnect WL Headphone ANC DBTH502 BP",
        articleCode: 491600564,
    },
    {
        model: "Reconnect WL Headphone ANC DBTH502 DP",
        articleCode: 491600565,
    },
    {
        model: "Reconnect WL Headphone ONB DBTH302 AV",
        articleCode: 491600566,
    },
    {
        model: "Reconnect WL Headphone ONB DBTH302 CA",
        articleCode: 491600567,
    },
    {
        model: "Reconnect WL Headphone ONB DBTH302 SM",
        articleCode: 491600568,
    },
    {
        model: "Reconnect WL Headphone OVE DBTH303 IM",
        articleCode: 491600569,
    },
    {
        model: "Reconnect WL Headphone OVE DBTH303 DP",
        articleCode: 491600570,
    },
    {
        model: "Reconnect WL Headphone OVE DBTH303 CA",
        articleCode: 491600571,
    },
    {
        model: "Reconnect WL Headphone OVM DBTH501 IM",
        articleCode: 491600572,
    },
    {
        model: "Reconnect WL Headphone OVM DBTH501 AV",
        articleCode: 491600573,
    },
    {
        model: "Reconnect WL Headphone OVM DBTH501 CA",
        articleCode: 491600574,
    },
    {
        model: "Reconnect WL Headphone ONF DBTH301 CA",
        articleCode: 491600575,
    },
    {
        model: "Reconnect WL Headphone ONF DBTH301 AV",
        articleCode: 491600576,
    },
    {
        model: "Reconnect WL Headphone ONF DBTH301 BP",
        articleCode: 491600577,
    },
    {
        model: "Reconnect WL Headphone OVF DBTH101 AV",
        articleCode: 491600578,
    },
    {
        model: "Reconnect WL Headphone OVF DBTH101 MY",
        articleCode: 491615064,
    },
    {
        model: "Reconnect WL Headphone OVF DBTH101 CA",
        articleCode: 491615065,
    },
    { model: "Reconnect TWS Earphone DTWS101 CA", articleCode: 491615072 },
    { model: "Reconnect TWS Earphone DTWS101 DP", articleCode: 491615073 },
    { model: "Reconnect TWS Earphone DTWS101 BP", articleCode: 491615074 },
    {
        model: "Reconnect Sandwich Maker  DSM302 CA",
        articleCode: 491604309,
    },
    {
        model: "Reconnect Sandwich Maker  DSM302 MY",
        articleCode: 491604310,
    },
    {
        model: "Reconnect Sandwich Maker  DSM301 AV",
        articleCode: 491604311,
    },
    {
        model: "Reconnect Sandwich Maker  DSM301 MY",
        articleCode: 491604312,
    },
    {
        model: "Reconnect Disney DSM303 MY SandwichMaker",
        articleCode: 491959050,
    },
    {
        model: "Reconnect Disney DSM303 CA SandwichMaker",
        articleCode: 491959051,
    },
    {
        model: "Reconnect Disney DSM304 AV SandwichMaker",
        articleCode: 491959052,
    },
    {
        model: "Reconnect Disney DSM304 MY SandwichMaker",
        articleCode: 491959053,
    },
    {
        model: "Reconnect POP UP Toaster DPUT101 CA",
        articleCode: 491604313,
    },
    {
        model: "Reconnect POP UP Toaster DPUT101 MY",
        articleCode: 491604314,
    },
    {
        model: "Reconnect POP UP Toaster DPUT301 PR",
        articleCode: 491604315,
    },
    {
        model: "Reconnect POP UP Toaster DPUT301 CM",
        articleCode: 491604316,
    },
    {
        model: "Reconnect POP UP Toaster DPUT102 AV",
        articleCode: 491604317,
    },
    {
        model: "Reconnect POP UP Toaster DPUT102 MY",
        articleCode: 491604318,
    },
    {
        model: "Reconnect POP UP Toaster DPUT103 CA",
        articleCode: 491891847,
    },
    {
        model: "Reconnect POP UP Toaster DPUT103 MY",
        articleCode: 491891848,
    },
    { model: "Reconnect Beard Trimmer DBT101 CA", articleCode: 491539227 },
    {
        model: "Reconnect Beard Trimmer LI-ION DBT301 IM",
        articleCode: 491604302,
    },
    {
        model: "Reconnect Beard Trimmer LI-ION DBT301 BP",
        articleCode: 491604303,
    },
    {
        model: "Reconnect Multi Grooming Kit DMGK101 BP",
        articleCode: 491604304,
    },
    {
        model: "Reconnect Hair Dryer 1000W DHD101 MY",
        articleCode: 491604281,
    },
    {
        model: "Reconnect Hair Dryer 1000W DHD101 PR",
        articleCode: 491604282,
    },
    {
        model: "Reconnect Hair Dryer 1600W DHD301 MY",
        articleCode: 491604283,
    },
    {
        model: "Reconnect Hair Dryer 1600W DHD301 MI",
        articleCode: 491604284,
    },
    {
        model: "Reconnect Hair Dryer 1200W DHD302 MY",
        articleCode: 491959123,
    },
    {
        model: "Reconnect Hair Dryer 1200W DHD302 MI",
        articleCode: 491959124,
    },
    {
        model: "Reconnect Hair Straightener WP DHS301 MI",
        articleCode: 491604305,
    },
    {
        model: "Reconnect Hair Straightener WP DHS301 PR",
        articleCode: 491604306,
    },
    {
        model: "Reconnect Hair Straightener DHS101 MY",
        articleCode: 491604307,
    },
    {
        model: "Reconnect Hair Straightener DHS101 PR",
        articleCode: 491604308,
    },
    {
        model: "BPL 43 FHD ANDROID SMART TV 43F-A4301",
        articleCode: 492796630,
    },
    {
        model: "BPL 43 FHD ANDROID SMART TV 43F-A4300",
        articleCode: 491893307,
    },
    {
        model: "BPL 50 UHD ANDROID SMART TV 50U-A4310",
        articleCode: 491893308,
    },
    { model: "BPL 43 FHD LED TV 43F-A1000", articleCode: 491895045 },
    {
        model: "BPL 43 FHD ANDROID SMART TV 43F-B4300",
        articleCode: 492166356,
    },
    {
        model: "BPL 50 UHD ANDROID SMART TV 50U-B4310",
        articleCode: 492166357,
    },
    {
        model: "BPL 55 UHD ANDROID SMART TV 55U-B4310",
        articleCode: 492166358,
    },
    {
        model: "BPL 43 FHD ANDROID SMART TV 43F-B4000",
        articleCode: 492338720,
    },
    {
        model: "BPL 50 UHD ANDROID SMART TV 50U-B4000",
        articleCode: 492338721,
    },
    {
        model: "BPL 50 UHD ANDROID SMART TV 50U-A4311",
        articleCode: 492403673,
    },
    {
        model: "BPL 50 UHD ANDROID SMART TV 50U B4001",
        articleCode: 492403970,
    },
    {
        model: "BPL 32 HD ANDROID SMART TV 32H-A4300",
        articleCode: 491893306,
    },
    { model: "BPL 32 HD LED TV 32H-A1000", articleCode: 491895044 },
    {
        model: "BPL 32 HD ANDROID SMART TV 32H-A4301",
        articleCode: 492166140,
    },
    {
        model: "BPL 32 HD ANDROID SMART TV 32H-B4300",
        articleCode: 492166355,
    },
    {
        model: "BPL 32 HD ANDROID SMART TV 32H-B4000",
        articleCode: 492338719,
    },
    { model: "BPL 24 HD LED TV 24H-A1000", articleCode: 491895043 },
    {
        model: "BPL 55 UHD ANDROID SMART TV 55U-A4310",
        articleCode: 491893309,
    },
    {
        model: "BPL 65 UHD ANDROID SMART TV 65U-A4310",
        articleCode: 491893310,
    },
    {
        model: "BPL 75 UHD ANDROID SMART TV 75U-A4010",
        articleCode: 491893311,
    },
    {
        model: "BPL 65 UHD ANDROID SMART TV 65U-B4310",
        articleCode: 492166359,
    },
    {
        model: "BPL 70 UHD ANDROID SMART TV 70U-B4310",
        articleCode: 492166360,
    },
    { model: "BPL 43U-C7311 BPL TV", articleCode: 493179499 },
    { model: "BPL 32 HD COOLITA SMART TV HC2001", articleCode: 493286013 },
    {
        model: "BPL 55 UHD Google SMART TV 55U-D5310",
        articleCode: 493711877,
    },
    {
        model: "BPL 50 UHD Google SMART TV 50U-D5310",
        articleCode: 493666592,
    },
    { model: "32H-C4301", articleCode: 493711908 },
    { model: "32HD Coolita Smart TV  32H-C2002", articleCode: 493666663 },
    { model: "32HD Coolita Smart TV  32H-C2001", articleCode: 493286013 },
    { model: "32HD Linux Smart TV  32H-D2300", articleCode: 493841909 },
    { model: "32HD Linux Smart TV  32H-D2301", articleCode: 493842114 },
    { model: "32HD WebOS Smart TV  32H-D7300", articleCode: 493666593 },
    { model: "32HD Google Smart TV  32H-D5300", articleCode: 493666591 },
    { model: "43UHD WebOS Smart TV  43U-C7312", articleCode: 493666664 },
    {
        model: "BPL 32 HD ANDROID SMART TV 32H-D4301",
        articleCode: 493911591,
    },
    {
        model: "BPL 32 HD Coolita SMART TV 32H-C2002",
        articleCode: 493666663
    },
    { model: "32H-C4301", articleCode: 493711908 },
    {
        model: "BPL 32 HD Coolita SMART TV 32HC2001",
        articleCode: 493286013
    },
    { model: "BPL 32 HD Linux SMART TV 32H-D2300", articleCode: 493841909 },
    { model: "BPL 32 HD Linux SMART TV 32H-D2301", articleCode: 493842114 },
    { model: "BPL 32 HD WEBOS SMART TV 32H-D7300", articleCode: 493666593 },
    {
        model: "BPL 32 HD GOOGLE SMART TV 32H-D5300",
        articleCode: 493666591,
    },
    {
        model: "BPL 43 UHD WebOS SMART TV 43U-C7312",
        articleCode: 493666664,
    },

    {
        "model": "BPL 43 FHD ANDROID SMART TV 43F-A4300",
        "articleCode": 491893307
    },
    {
        "model": "LYF Induction Stove LICTP24012",
        "articleCode": 494404856
    },
    {
        "model": "BPL SATT 14 Kg BWS-N14ETNKP",
        "articleCode": 494459537
    },
    {
        "model": "BPL INFRARED BIRCT2422P",
        "articleCode": 494460325
    },
    {
        "model": "BPL 40F SMART TV PLUS 40FF2340",
        "articleCode": 494581078
    },
    {
        "model": "LYF 43 UHD WebOS SMART TV LD43UL7000A",
        "articleCode": 493179513
    },
    {
        "model": "BPL 43 4K UHD SMART WebOS TV 43U-C7312",
        "articleCode": 493666664
    },
    {
        "model": "LYF Desert Cooler 50L-LCD050BUL",
        "articleCode": 494227353
    },
    {
        "model": "BPL 32 HD READY SMART TV PLUS 32HF2300",
        "articleCode": 494581076
    },
    {
        "model": "BPL 55 4K HOME THEATRE ONKYO TV 55UE7340",
        "articleCode": 494443101
    },
    {
        "model": "BPL REF FF 261L2S BRF-F280RBPHSI INOX HS",
        "articleCode": 494459893
    },
    {
        "model": "LYF 43 UHD WebOS SMART TV LD43UL7000A",
        "articleCode": 493179513
    },
    {
        "model": "BPL 43 4K UHD SMART WebOS TV 43U-C7312",
        "articleCode": 493666664
    },
    {
        "model": "LYF Desert Cooler 50L-LCD050BUL",
        "articleCode": 494227353
    },
    {
        "model": "BPL 32 HD READY SMART TV PLUS 32HF2300",
        "articleCode": 494581076
    },
    {
        "model": "BPL 55 4K HOME THEATRE ONKYO TV 55UE7340",
        "articleCode": 494443101
    },
    {
        "model": "BPL REF FF 261L2S BRF-F280RBPHSI INOX HS",
        "articleCode": 494459893
    },
    {
        "model": "LYF 43 UHD WebOS SMART TV LD43UL7000A",
        "articleCode": 493179513
    },
    {
        "model": "BPL 43 4K UHD SMART WebOS TV 43U-C7312",
        "articleCode": 493666664
    },
    {
        "model": "LYF Desert Cooler 50L-LCD050BUL",
        "articleCode": 494227353
    },
    {
        "model": "BPL 32 HD READY SMART TV PLUS 32HF2300",
        "articleCode": 494581076
    },
    {
        "model": "BPL 55 4K HOME THEATRE ONKYO TV 55UE7340",
        "articleCode": 494443101
    },
    {
        "model": "BPL REF FF 261L2S BRF-F280RBPHSI INOX HS",
        "articleCode": 494459893
    },
    {
        "model": "BPL 32Q HOMETHEATRE ONKYO QLEDTV32HE7542",
        "articleCode": 494443104
    },
    {
        "model": "BPL INSTANT HEATER 5L BIWH5L3KW",
        "articleCode": 494426558
    },
    {
        "model": "BPL 43 4K HOMETHEATRE HARMAN TV 43UE5330",
        "articleCode": 494410231
    },
    {
        "model": "BPL MIXER GRINDER BMG34150 3J",
        "articleCode": 493858819
    },
    {
        "model": "Wyzr Mixer Grinder WMG41250 500 W 3J",
        "articleCode": 494338408
    },
    {
        "model": "BPL 43F HOME THEATRE ONKYO TV 43F-E5340",
        "articleCode": 494443106
    },
    {
        "model": "BPL 32 HD READY SMART TV PRO 32HF2301",
        "articleCode": 494581077
    },
    {
        "model": "BPL MIXER GRINDER BMG46250 3J 500w",
        "articleCode": 494338767
    },
    {
        "model": "BPL Induction Cooktop BICTP23016 1600W",
        "articleCode": 494226826
    },
    {
        "model": "BPL 32QLED HOMETHEATRE ONKYO WTV32QF7540",
        "articleCode": 494581149
    },
    {
        "model": "WYZR PF 400 Cool Stream White P",
        "articleCode": 494426637
    },
    {
        "model": "BPL 32 HD SMART LINUX LITE TV 32H-E2300",
        "articleCode": 494249940
    },
    {
        "model": "SATT 7.5 Kg BPL BWS-N75EASPP",
        "articleCode": 494338474
    }
    ,
    {
        "model": "BPL 50 UHD ANDROID SMART TV 50U-A4310",
        "articleCode": 491893308
    },
    {
        "model": "BPL 75 4K UHD SMART ANDROID TV 75U-A4010",
        "articleCode": 491893311
    },
    {
        "model": "BPL 32 HD LED TV 32H-A1000",
        "articleCode": 491895044
    },
    {
        "model": "BPL 43 FHD LED TV 43F-A1000",
        "articleCode": 491895045
    },
    {
        "model": "BPL STORAGE HEATER BWHSMV00615KDD5",
        "articleCode": 491903110
    },
    {
        "model": "BPL STORAGE HEATER BWHSMV00825KDD5",
        "articleCode": 491903111
    },
    {
        "model": "BPL Party Speaker 200W BPS501",
        "articleCode": 491935980
    },
    {
        "model": "BPL Wireless Soundbar BWLSBF102 Black",
        "articleCode": 491935981
    },
    {
        "model": "BPL WIRELESS Soundbar BWLSBF502 Blk 180w",
        "articleCode": 491935982
    },
    {
        "model": "BPL Soundbar BSBF302 Black 120w",
        "articleCode": 491935983
    },
    {
        "model": "BPL Soundbar BSBL101 40w",
        "articleCode": 491936001
    },
    {
        "model": "BPL Wireless Soundbar BWLSBF102 Grey",
        "articleCode": 491936082
    },
    {
        "model": "BPL Wireless Soundbar BWLSBF302 Grey",
        "articleCode": 491936084
    },
    {
        "model": "BPL WIRELESS SOUNDBAR BWLSBR503",
        "articleCode": 491936131
    },
    {
        "model": "BPL 50 UHD ANDROID SMART TV 50U-B4310",
        "articleCode": 492166357
    },
    {
        "model": "BPL 55 UHD ANDROID SMART TV 55U-B4310",
        "articleCode": 492166358
    },
    {
        "model": "BPL 65 UHD ANDROID SMART TV 65U-B4310",
        "articleCode": 492166359
    },
    {
        "model": "BPL 70 UHD ANDROID SMART TV 70U-B4310",
        "articleCode": 492166360
    },
    {
        "model": "BPL 32 HD ANDROID SMART TV 32H-B4000",
        "articleCode": 492338719
    },
    {
        "model": "BPL 43 FHD ANDROID SMART TV 43F-B4000",
        "articleCode": 492338720
    },
    {
        "model": "BPL 50 UHD ANDROID SMART TV 50U-B4000",
        "articleCode": 492338721
    },
    {
        "model": "BPL 50 UHD ANDROID SMART TV 50U B4001",
        "articleCode": 492403970
    },
    {
        "model": "BPL 32 HD ANDROID SMART TV 32H-B4002",
        "articleCode": 492796799
    },
    {
        "model": "BPL 55 UHD ANDROID SMART TV 55U-A4311",
        "articleCode": 492796800
    },
    {
        "model": "BPL 32 HD ANDROID SMART TV 32H-C4300",
        "articleCode": 492913049
    },
    {
        "model": "BPL 43 FHD ANDROID SMART TV 43F-C4300",
        "articleCode": 492913050
    },
    {
        "model": "BPL 50 UHD ANDROID SMART TV 50U-C4310",
        "articleCode": 492913051
    },
    {
        "model": "BPL 24 HD NON-SMART TV 24H-C1000",
        "articleCode": 492913056
    },
    {
        "model": "BPL 32 HD NON-SMART TV 32H-C1000",
        "articleCode": 492913057
    },
    {
        "model": "BPL 32 HD Coolita SMART TV 32HC2001",
        "articleCode": 493286013
    },
    {
        "model": "BPL 43 UHD WebOS SMART TV 43UC7310",
        "articleCode": 493286014
    },
    {
        "model": "BPL WAC 1.5T FS2S BAW-F18BPSY",
        "articleCode": 493627310
    },
    {
        "model": "BPL WAC 1.5T FS2S BAW-F5ABPSY",
        "articleCode": 493627311
    },
    {
        "model": "BPL WAC 1T FS2S BAW-F12BPSY",
        "articleCode": 493627314
    },
    {
        "model": "BPL WAC 1T FS2S BAW-F3BBPSY",
        "articleCode": 493627315
    },
    {
        "model": "BPL 32 HD SMART GOOGLE TV 32H-D5300",
        "articleCode": 493666591
    },
    {
        "model": "BPL 50 4K UHD SMART GOOGLE TV 50U-D5310",
        "articleCode": 493666592
    },
    {
        "model": "BPL 32 HD Coolita SMART TV 32H-C2002",
        "articleCode": 493666663
    },
    {
        "model": "BPL 65 UHD ANDROID SMART TV 65U-C4310",
        "articleCode": 493666684
    },
    {
        "model": "BPL WAC 1.5T INV3S BAW-I18CBPW",
        "articleCode": 493672563
    },
    {
        "model": "BPL WAC 1.5T INV3S BAW-I5ACBPW",
        "articleCode": 493672564
    },
    {
        "model": "BPL REF DC 175L/190L 2S BRD-F190EBPTBP",
        "articleCode": 493672567
    },
    {
        "model": "BPL 43 FHD GOOGLE SMART LED TV 43F-D5300",
        "articleCode": 493711875
    },
    {
        "model": "BPL 43 4K UHD SMART GOOGLE TV 43U-D5310",
        "articleCode": 493711876
    },
    {
        "model": "BPL 75 UHD GOOGLE SMART LED TV 75U-D5310",
        "articleCode": 493711879
    },
    {
        "model": "BPL 43 4K UHD SMART ANDROID TV 43U-D4310",
        "articleCode": 493711880
    },
    {
        "model": "BPL 50 UHD ANDROID SMART LED TV50U-D4310",
        "articleCode": 493711881
    },
    {
        "model": "BPL 55 UHD ANDROID SMART LED TV55U-D4310",
        "articleCode": 493711882
    },
    {
        "model": "BPL 65 UHD ANDROID SMART LED TV65U-D4310",
        "articleCode": 493711883
    },
    {
        "model": "BPL 75 UHD ANDROID SMART LED TV75U-D4310",
        "articleCode": 493711884
    },
    {
        "model": "BPL 32 HD SMART Linux TV 32H-D2301",
        "articleCode": 493842114
    },
    {
        "model": "BPL 32 HD SMART WEBOS TV 32H-D7300 INX",
        "articleCode": 493911729
    },
    {
        "model": "BPL Induction Cooktop BICTP23016 1600W",
        "articleCode": 494226826
    },
    {
        "model": "BPL PERSONAL COOLER BCP022CGC 22L",
        "articleCode": 494227334
    },
    {
        "model": "BPL Personal Cooler 36L-BCP036CGC",
        "articleCode": 494227335
    },
    {
        "model": "BPL Personal Cooler 30L-BCP030CGB",
        "articleCode": 494227342
    },
    {
        "model": "BPL Tower Cooler-18L-BCT018BEB",
        "articleCode": 494227343
    },
    {
        "model": "BPL WINDOW COOLER BCW060CGB 60L",
        "articleCode": 494227345
    },
    {
        "model": "BPL Desert Cooler 75L-BCD075BEL",
        "articleCode": 494227351
    },
    {
        "model": "BPL Personal Cooler 18L-BCP018BEL",
        "articleCode": 494227352
    },
    {
        "model": "BPL DESERT COOLER BCD100DGN 100L",
        "articleCode": 494227358
    },
    {
        "model": "BPL Desert Cooler 90L-BCD090CGP",
        "articleCode": 494227360
    },
    {
        "model": "BPL 32 HD LINUX SMART TV 32H-E2301",
        "articleCode": 494249941
    },
    {
        "model": "BPL REF CMPCT 85L2S BRC-F110RBPSKV BLACK",
        "articleCode": 494338900
    },
    {
        "model": "BPL 43 4K HOMETHEATRE HARMAN TV 43UE5330",
        "articleCode": 494410231
    },
    {
        "model": "BPL 55Q HOMETHEATRE HARMAN Q TV 55UE5530",
        "articleCode": 494410234
    },
    {
        "model": "BPL 32 HD HOME THEATRE ONKYO TV 32HE5340",
        "articleCode": 494410394
    },
    {
        "model": "BPL 32Q HOMETHEATRE ONKYO QLEDTV32HE7541",
        "articleCode": 494410397
    },
    {
        "model": "BPL 43Q HOMETHEATRE ONKYO QLEDTV43UE7540",
        "articleCode": 494410398
    },
    {
        "model": "BPL 43Q HOMETHEATRE ONKYO QLEDTV43UE7541",
        "articleCode": 494410399
    },
    {
        "model": "BPL 55 UHD WEBOS LITE SMART TV 55U-E7320",
        "articleCode": 494443100
    },
    {
        "model": "BPL 32Q HOMETHEATRE ONKYO QLEDTV32HE7543",
        "articleCode": 494443105
    },
    {
        "model": "BPL 32 HD LINUX SMART TV 32H-E2322",
        "articleCode": 494443107
    },
    {
        "model": "BPL 43 4K HOME THEATRE ONKYO TV 43UE5340",
        "articleCode": 494443465
    },
    {
        "model": "BPL 55 4K HOME THEATRE ONKYO TV 55UE5340",
        "articleCode": 494443466
    },
    {
        "model": "BPL 65 4K HOME THEATRE ONKYO TV 65UE5340",
        "articleCode": 494443467
    },
    {
        "model": "BPL 65Q HOMETHEATRE HARMAN Q TV 65UE5530",
        "articleCode": 494443468
    },
    {
        "model": "BPL REF FF 281L2S BRF-I300RBPHSI INOX HS",
        "articleCode": 494459894
    },
    {
        "model": "BPL SATT 9.0 Kg BWS-N90ETBKD",
        "articleCode": 494459916
    },
    {
        "model": "BPL Desert Cooler 50L-BCD050BKB",
        "articleCode": 494460160
    },
    {
        "model": "BPL DESERT COOLER BCD055DGB 55L",
        "articleCode": 494460161
    },
    {
        "model": "BPL Desert Cooler 75L-BCD075DGB",
        "articleCode": 494460163
    },
    {
        "model": "BPL Desert Cooler 70L-BCD070CGB",
        "articleCode": 494460166
    },
    {
        "model": "BPL Personal Cooler 18L-BCP018CGL",
        "articleCode": 494460168
    },
    {
        "model": "BPL Desert Cooler 110L-BCD110DGL",
        "articleCode": 494460170
    },
    {
        "model": "BPL Desert Cooler 65L-BCD065DGC",
        "articleCode": 494460172
    },
    {
        "model": "BPL Desert Cooler 85L-BCD085DGC",
        "articleCode": 494460173
    },
    {
        "model": "BPL Tower Cooler 55L-BCT055CGC",
        "articleCode": 494460174
    },
    {
        "model": "BPL Commercial Cooler 120L-BCC120GBR",
        "articleCode": 494460177
    },
    {
        "model": "BPL Commercial Cooler 140L-BCC140GBR",
        "articleCode": 494460178
    },
    {
        "model": "BPL Tower Cooler-18L-BCT018CGB",
        "articleCode": 494460183
    },
    {
        "model": "BPL Tower Cooler-32L-BCT032CGB",
        "articleCode": 494460184
    },
    {
        "model": "BPL REF DC 201L5S BRD-I221EEEIWS FLORA W",
        "articleCode": 494460305
    },
    {
        "model": "BPL REF DC 201L5S BRD-I220EEEIWS FLORA W",
        "articleCode": 494460306
    },
    {
        "model": "BPL WAC 18K FS3S BAW-F183PMSC5",
        "articleCode": 494460469
    },
    {
        "model": "BPL SATT 9.0 Kg BWS-N90EFWKD",
        "articleCode": 494460497
    },
    {
        "model": "BPL SATT 9.0 Kg BWS-N12EFWKD",
        "articleCode": 494460498
    },
    {
        "model": "BPL Personal Cooler 12L-BCP012DGL",
        "articleCode": 494496023
    },
    {
        "model": "BPL Comm Cooler 125L-BCC125CGBH",
        "articleCode": 494496025
    },
    {
        "model": "BPL Comm Cooler 85L-BCC085GDR",
        "articleCode": 494496027
    },
    {
        "model": "BPL 55Q HOMETHEATRE ONKYO QLEDTV55QF5540",
        "articleCode": 494496053
    },
    {
        "model": "DUMMY BPL SAC 18K INV3S BAS-V183ATFC5",
        "articleCode": 494509730
    },
    {
        "model": "DUMMY BPL SAC 19K INV3S BAS-V193ABFG5",
        "articleCode": 494509731
    },
    {
        "model": "DUMMY BPL SAC 12K INV3S BAS-V123ABFG5",
        "articleCode": 494509732
    },
    {
        "model": "DUMMY BPL SAC 12K INV3S BAS-F183APPW5",
        "articleCode": 494509733
    },
    {
        "model": "DUMMY BPL SAC 19K INV3SBAS-V193PTSC5S",
        "articleCode": 494509740
    },
    {
        "model": "DUMMY BPL SAC 18K INV3S BAS-V183PBTC5",
        "articleCode": 494509741
    },
    {
        "model": "DUMMY BPL SAC 18K INV3S BAS-V243PBTC5",
        "articleCode": 494509742
    },
    {
        "model": "DUMMY BPL SAC 18K INV3S BAS-V195PBYG5",
        "articleCode": 494509743
    },
    {
        "model": "BPL STORAGE HEATER 35L BSWHMET35L2KW4SGL",
        "articleCode": 494509878
    },
    {
        "model": "BPL STORAGE HEATER 50L BSWHMET50L2KW4SGL",
        "articleCode": 494509879
    },
    {
        "model": "BPL Comm Cooler 115L-BCC115GDR",
        "articleCode": 494509885
    },
    {
        "model": "BPL Window Cooler 60L-BCW060DGC",
        "articleCode": 494509975
    },
    {
        "model": "BPL REF DC188L1S BRD-F210EAENWD MILEY WN",
        "articleCode": 494510273
    },
    {
        "model": "BPL REF DC187L3S BRD-F210ECEDBS DREAM BL",
        "articleCode": 494510277
    },
    {
        "model": "BPL REF DC187L3S BRD-F210ECEDWS DREAM WN",
        "articleCode": 494510278
    },
    {
        "model": "BPL REF DC187L3S BRD-F211ECEDBS DREAM BL",
        "articleCode": 494510279
    },
    {
        "model": "BPL REF DC201L2S BRD-F220EBEIWS FLORA WN",
        "articleCode": 494510283
    },
    {
        "model": "BPL REF DC201L3S BRD-F220ECEDBS DREAM BL",
        "articleCode": 494510285
    },
    {
        "model": "BPL REF DC201L3S BRD-F220ECEDWS DREAM WN",
        "articleCode": 494510286
    },
    {
        "model": "BPL REF DC201L3S BRD-F221ECEDWS DREAM WN",
        "articleCode": 494510287
    },
    {
        "model": "BPL REF DC221L3S BRD-F240ECEDBS DREAM BL",
        "articleCode": 494510294
    },
    {
        "model": "BPL REF DC221L3S BRD-F240ECEDWS DREAM WN",
        "articleCode": 494510295
    },
    {
        "model": "BPL REF DC221L3S BRD-F241ECEDWS DREAM WN",
        "articleCode": 494510296
    },
    {
        "model": "BPL REF COMPACT 85L BRC-F105RBPSKV BLACK",
        "articleCode": 494510311
    },
    {
        "model": "BPL REF SBS 562L BRS-I580RNVHGT HL GREY",
        "articleCode": 494510314
    },
    {
        "model": "BPL REF FF 253L 2S BRF-I270RBVIST SILVER",
        "articleCode": 494510316
    },
    {
        "model": "BPL 32 HD READY SMART TV PLUS 32HF2300",
        "articleCode": 494581076
    },
    {
        "model": "BPL 32 HD READY SMART TV PRO 32HF2301",
        "articleCode": 494581077
    },
    {
        "model": "BPL 55 4K HOMETHEATRE ONKYO TV 55UF2340",
        "articleCode": 494581080
    },
    {
        "model": "BPL 32QLED HOMETHEATRE ONKYO TTV32QF8540",
        "articleCode": 494581145
    },
    {
        "model": "BPL 65QLED HOMETHEATREONKYO WTV 65QF7540",
        "articleCode": 494581147
    },
    {
        "model": "BPL 32QLED HOMETHEATRE ONKYO WTV32QF7540",
        "articleCode": 494581149
    },
    {
        "model": "BPL FATL 7.5 Kg BWT-N75ETSFD",
        "articleCode": 494606041
    },
    {
        "model": "BPL SATT 9.0 Kg BWS-N90ETBKD",
        "articleCode": 494606164
    },
    {
        "model": "BPL SATT 12.0 Kg BWS-N12EFTKD",
        "articleCode": 494606166
    },
    {
        "model": "BPL 12 Kg BWT-H12ETBFD",
        "articleCode": 494606279
    },
    {
        "model": "BPL FATL 7 Kg BWT-N70ETBFD",
        "articleCode": 494606284
    },
    {
        "model": "BPL FATL 7.5 Kg BWT-N75ETBFD",
        "articleCode": 494606285
    },
    {
        "model": "BPL FATL 8.5 Kg BWT-N85ETBFD",
        "articleCode": 494606286
    },
    {
        "model": "BPL 32 HD READY SMART WTV PRO 32HF7301",
        "articleCode": 494623548
    },
    {
        "model": "BPL 32 QLED SMART TV PLUS 32QF2500",
        "articleCode": 494623764
    },
    {
        "model": "BPL SAC 1.0T INV3S Sx BS-V123SX20",
        "articleCode": 581026667
    },
    {
        "model": "BPL SAC 1.5T INV3S Mx BS-V183MX21",
        "articleCode": 581026670
    },
    {
        "model": "BPL SAC 1.5T INV3S Mx BS-V183MX20",
        "articleCode": 581026671
    },
    {
        "model": "BPL SAC 1.5T INV5S Px BS-V185PX20",
        "articleCode": 581026672
    },
    {
        "model": "BPL SAC 2.0T INV3S Sx BS-V243SX20",
        "articleCode": 581026673
    },
    {
        "model": "BPL SAC 1.5T INV3S Px BS-V183PX20",
        "articleCode": 581026697
    },
    {
        "model": "BPL SAC 1.5T INV5S Sx BS-V185SX20",
        "articleCode": 581026698
    },
    {
        "model": "BPL SAC 1.5T INV5S Mx BS-V185MX20",
        "articleCode": 581026699
    },
    {
        "model": "BPL SAC 2.0T INV3S Mx BS-V243MX20",
        "articleCode": 581026700
    },
    {
        "model": "BPL SAC 2.0T INV3S Px BS-V243PX20",
        "articleCode": 581026701
    },
    {
        "model": "BPL SAC 1.5T INV5S Mx BS-V185MX21",
        "articleCode": 581026995
    },
    {
        "model": "BPL SAC 1T INV5S BAS-I12ESSM",
        "articleCode": 581027082
    },
    {
        "model": "BPL SAC 1T INV5S BAS-I3BESSY",
        "articleCode": 581027083
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-I18CSSM",
        "articleCode": 581027084
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-I5ACSSY",
        "articleCode": 581027085
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-D5ACSSY",
        "articleCode": 581027088
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-D5ACSSR",
        "articleCode": 581027089
    },
    {
        "model": "BPL SAC 1.5T INV5S BAS-D18ESPW",
        "articleCode": 581027090
    },
    {
        "model": "BPL SAC 1.5T INV5S BAS-D5AESPW",
        "articleCode": 581027092
    },
    {
        "model": "BPL SAC 2T INV3S BAS-D24CSPW",
        "articleCode": 581027093
    },
    {
        "model": "BPL SAC 2T INV3S BAS-D7ACSGD",
        "articleCode": 581027094
    },
    {
        "model": "BPL SAC 2T INV3S BAS-D7ACSPW",
        "articleCode": 581027095
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-H5ACPYG",
        "articleCode": 581027108
    },
    {
        "model": "BPL SAC 2.0T INV3S Mx BS-V243MX11",
        "articleCode": 581109971
    },
    {
        "model": "BPL SAC 1.0T INV3S Sx BS-V123SX10",
        "articleCode": 581110090
    },
    {
        "model": "BPL SAC 1.5T INV3S Sx BS-V183SX10",
        "articleCode": 581110091
    },
    {
        "model": "BPL SAC 1.5T INV5S Sx BS-V185SX10",
        "articleCode": 581110092
    },
    {
        "model": "BPL SAC 1.0T INV3S Mx BS-V123MX10",
        "articleCode": 581110093
    },
    {
        "model": "BPL SAC 1.5T INV3S Mx BS-V183MX10",
        "articleCode": 581110094
    },
    {
        "model": "BPL SAC 1.5T INV5S Mx BS-V185MX10",
        "articleCode": 581110095
    },
    {
        "model": "BPL SAC 1.0T INV3S Px BS-V123PX10",
        "articleCode": 581110096
    },
    {
        "model": "BPL SAC 1.5T INV3S Px BS-V183PX10",
        "articleCode": 581110097
    },
    {
        "model": "BPL SAC 1.5T INV5S Px BS-V185PX10",
        "articleCode": 581110098
    },
    {
        "model": "BPL SAC 2.0T INV3S Sx BS-V243SX10",
        "articleCode": 581110162
    },
    {
        "model": "BPL SAC 1.0T INV3S Sx BS-V123SX11",
        "articleCode": 581110163
    },
    {
        "model": "BPL SAC 1.5T INV3S Mx BS-V183MX11",
        "articleCode": 581110164
    },
    {
        "model": "BPL SAC 1.5T INV5S Mx BS-V185MX11",
        "articleCode": 581110165
    },
    {
        "model": "BPL SAC 1.0T INV3S BAS-I12CAFC2",
        "articleCode": 581110221
    },
    {
        "model": "BPL SAC 0.9T INV3S BAS-I3ACAFC",
        "articleCode": 581110222
    },
    {
        "model": "BPL SAC 0.9T INV3S BAS-I3ACAPW",
        "articleCode": 581110223
    },
    {
        "model": "BPL SAC 1T INV3S BAS-I12CAFC",
        "articleCode": 581110226
    },
    {
        "model": "BPL SAC 1T INV3S BAS-I3BCAPW",
        "articleCode": 581110227
    },
    {
        "model": "BPL SAC 1T INV5S BAS-I12EAFC",
        "articleCode": 581110230
    },
    {
        "model": "BPL SAC 1T INV5S BAS-I3BEAPW",
        "articleCode": 581110231
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-I18CAFC",
        "articleCode": 581110234
    },
    {
        "model": "BPL SAC 1.5T INV3S BAS-I5ACAPW",
        "articleCode": 581110235
    },
    {
        "model": "BPL SAC 1.5T INV5S BAS-I18EAFC",
        "articleCode": 581110239
    },
    {
        "model": "BPL SAC 1.5T INV5S BAS-I5AEAFC",
        "articleCode": 581110240
    },
    {
        "model": "BPL SAC 1.5T INV5S BAS-I5AEAPW",
        "articleCode": 581110241
    },
    {
        "model": "BPL SAC 2T INV3S BAS-I7ACAFC",
        "articleCode": 581110246
    },
    {
        "model": "BPL SAC 2T INV3S BAS-I7ACAPW",
        "articleCode": 581110247
    },
    {
        "model": "BPL SAC 1T FS2S BAS-F12BAFC",
        "articleCode": 581110251
    },
    {
        "model": "BPL SAC 1T FS2S BAS-F3BBAFC",
        "articleCode": 581110252
    },
    {
        "model": "BPL SAC 1T FS2S BAS-F3BBAPW",
        "articleCode": 581110253
    },
    {
        "model": "BPL SAC 1.5T FS2S BAS-F18BAFC",
        "articleCode": 581110257
    },
    {
        "model": "BPL SAC 1.5T FS2S BAS-F5ABAFC",
        "articleCode": 581110258
    },
    {
        "model": "BPL SAC 1.5T FS2S BAS-F5ABAPW",
        "articleCode": 581110259
    },
    {
        "model": "BPL SAC 2T FS2S BAS-F24BAFC",
        "articleCode": 581110263
    },
    {
        "model": "BPL SAC 2T FS2S BAS-F7ABAFC",
        "articleCode": 581110264
    },
    {
        "model": "BPL SAC 2T FS2S BAS-F7ABAPW",
        "articleCode": 581110265
    },
    {
        "model": "BPL SAC 1T FS2S  BAS-F12BTFC",
        "articleCode": 581110431
    },
    {
        "model": "BPL SAC 1T FS2S  BAS-F3BBTFC",
        "articleCode": 581110432
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123ABFG",
        "articleCode": 581110559
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123ABFR",
        "articleCode": 581110560
    },
    {
        "model": "BPL SAC 19K INV3S BAS-V193ABFG",
        "articleCode": 581110563
    },
    {
        "model": "BPL SAC 18K FS2S BAS-F182ATFC",
        "articleCode": 581110565
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183PBYG",
        "articleCode": 581110566
    },
    {
        "model": "BPL SAC 19K INV5S BAS-V195PBYS",
        "articleCode": 581110569
    },
    {
        "model": "BPL SAC 19K INV3S BAS-D193PTFG",
        "articleCode": 581110570
    },
    {
        "model": "BPL WAC 18K FS3S BAW-F183PMSY",
        "articleCode": 581110572
    },
    {
        "model": "BPL SAC 24K INV3S BAS-V243PBTC5",
        "articleCode": 581110780
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183PBTC5",
        "articleCode": 581110781
    },
    {
        "model": "BPL SAC 19K INV3S BAS-D193PTFG5W",
        "articleCode": 581110782
    },
    {
        "model": "BPL SAC 19K INV5S BAS-V195PBYG5",
        "articleCode": 581110783
    },
    {
        "model": "BPL SAC 19K INV3S BAS-V193PTSC5S",
        "articleCode": 581110784
    },
    {
        "model": "BPL SAC 19K INV3S BAS-H193PTSR5",
        "articleCode": 581110785
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183ATFC5",
        "articleCode": 581110797
    },
    {
        "model": "BPL SAC 19K INV3S BAS-V193ABFG5",
        "articleCode": 581110798
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123ABFG5",
        "articleCode": 581110799
    },
    {
        "model": "BPL SAC 18K FS3S BAS-F183APPW5",
        "articleCode": 581110800
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183TTFC5",
        "articleCode": 581110801
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123TBFG5",
        "articleCode": 581110802
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183ATFR5",
        "articleCode": 581110809
    },
    {
        "model": "BPL SAC 19K INV3S BAS-V193ABFR5",
        "articleCode": 581110810
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123ABFR5",
        "articleCode": 581110811
    },
    {
        "model": "BPL SAC 12K INV3S BAS-V123TBFR5",
        "articleCode": 581110812
    },
    {
        "model": "BPL SAC 18K INV3S BAS-V183ATFC5K",
        "articleCode": 581110823
    },
    {
        "model": "HISENSE 32 HD SMART LED TV 32A56E",
        "articleCode": 491893289
    },
    {
        "model": "HISENSE 40 FHD SMART LED TV 40A56E",
        "articleCode": 491893290
    },
    {
        "model": "HISENSE 43 FHD SMART LED TV 43A56E",
        "articleCode": 491893291
    },
    {
        "model": "HISENSE 43 UHD SMART LED TV 43A71F",
        "articleCode": 491893292
    },
    {
        "model": "HISENSE 50 UHD SMART LED TV 50A71F",
        "articleCode": 491893293
    },
    {
        "model": "HISENSE 55 UHD SMART LED TV 55A71F",
        "articleCode": 491893294
    },
    {
        "model": "HISENSE 58 UHD SMART LED TV 58A71F",
        "articleCode": 491893295
    },
    {
        "model": "HISENSE 65 UHD SMART QLED TV 65U7QF",
        "articleCode": 491893297
    },
    {
        "model": "HISENSE 65 UHD SMART LED TV 65A73F",
        "articleCode": 491936041
    },
    {
        "model": "HISENSE 32 HD SMART LED TV 32A56F",
        "articleCode": 492166306
    },
    {
        "model": "HISENSE 43 HD SMART LED TV 43A56F",
        "articleCode": 492166307
    },
    {
        "model": "HISENSE 43 UHD SMART LED TV 43A6GE",
        "articleCode": 492338735
    },
    {
        "model": "HISENSE 50 UHD SMART LED TV 50A6GE",
        "articleCode": 492338736
    },
    {
        "model": "HISENSE 58 UHD SMART LED TV 58A6GE",
        "articleCode": 492338737
    },
    {
        "model": "HISENSE 50 UHD SMART LED TV 50A73F",
        "articleCode": 492338738
    },
    {
        "model": "HISENSE 75 UHD SMART QLED 8K TV 75U80G",
        "articleCode": 492338739
    },
    {
        "model": "HISENSE 55 UHD SMART QLED TV 55U6G",
        "articleCode": 492338741
    },
    {
        "model": "HISENSE 65 UHD SMART QLED TV 65U6G",
        "articleCode": 492338742
    },
    {
        "model": "HISENSE 32 HD SMART ANDROID LED TV 32E4G",
        "articleCode": 492912681
    },
    {
        "model": "HISENSE 43 FHD SMART ANDROID LED 43A4G",
        "articleCode": 492912682
    },
    {
        "model": "HISENSE 50 UHD SMART LED Google TV 50A7H",
        "articleCode": 493179249
    },
    {
        "model": "HISENSE 55 UHD SMART LED Google TV 55A7H",
        "articleCode": 493179250
    },
    {
        "model": "HISENSE 65 UHD SMART LED Google TV 65A7H",
        "articleCode": 493179251
    },
    {
        "model": "HISENSE 55 UHD SMART LED Google TV 55A6H",
        "articleCode": 493285613
    },
    {
        "model": "HISENSE 75 UHD SMART LED Google TV 75A6H",
        "articleCode": 493285614
    },
    {
        "model": "HISENSE 120 UHD SMART LASER TV 120L9G",
        "articleCode": 493285615
    },
    {
        "model": "HISENSE U7H 55 QLED Smart VIDAA TV 55U7H",
        "articleCode": 493666712
    },
    {
        "model": "HISENSE U7H 65 QLED Smart VIDAA TV 65U7H",
        "articleCode": 493666713
    },
    {
        "model": "HISENSE43 ULTRA HD SMART LED TV 43A6K",
        "articleCode": 493911521
    },
    {
        "model": "HISENSE55 ULTRA HD SMART LED TV 55A6K",
        "articleCode": 493911523
    },
    {
        "model": "HISENSE75 ULTRA HD SMART LED TV 75A6K",
        "articleCode": 493911524
    },
    {
        "model": "HISENSE 4K UHD QLED GOOGLE LED TV 55U6K",
        "articleCode": 493911542
    },
    {
        "model": "HISENSE 4K UHD QLED GOOGLE LED TV 65U6K",
        "articleCode": 493911543
    },
    {
        "model": "HISENSE 4K UHD TRICHROM LASER TV 120L9H",
        "articleCode": 493911544
    },
    {
        "model": "HISENSE 4K UHD SMART GOOGLE LED TV 55A7K",
        "articleCode": 493911545
    },
    {
        "model": "HISENSE 4k UHD SMART GOOGLE LED TV 65A7K",
        "articleCode": 493911546
    },
    {
        "model": "HISENSE 55 UHD Mini-LED TV 55U7K",
        "articleCode": 494249533
    },
    {
        "model": "HISENSE 65 UHD Mini-LED TV 65U7K",
        "articleCode": 494249534
    },
    {
        "model": "HISENSE 75 UHD Mini-LED TV 75U7K",
        "articleCode": 494249535
    },
    {
        "model": "HISENSE 85 UHD Mini-LED TV 85U7K",
        "articleCode": 494249536
    },
    {
        "model": "HISENSE 43 4K QLED GOOGLE LED TV 43U6K",
        "articleCode": 494249582
    },
    {
        "model": "HISENSE 43 UHD SMART QLED TV 43E7K",
        "articleCode": 494393838
    },
    {
        "model": "HISENSE 50 UHD SMART QLED TV 50E7K",
        "articleCode": 494393839
    },
    {
        "model": "HISENSE 55 UHD SMART QLED TV 55E7K",
        "articleCode": 494393840
    },
    {
        "model": "HISENSE 65 UHD SMART QLED TV 65E7K",
        "articleCode": 494393841
    },
    {
        "model": "HISENSE 32 HD Smart TV 32A4N",
        "articleCode": 494410482
    },
    {
        "model": "HISENSE 40 FHD Smart TV 40A4N",
        "articleCode": 494410483
    },
    {
        "model": "HISENSE 43 4K UHD Smart TV 43A6N",
        "articleCode": 494410484
    },
    {
        "model": "HISENSE 55 4K UHD Smart TV 55A6N",
        "articleCode": 494410485
    },
    {
        "model": "Hisense 43 Inch UHD 4K Smart TV 43A65N",
        "articleCode": 494421499
    },
    {
        "model": "Hisense 55 inch UHD 4K Smart TV 55A65N",
        "articleCode": 494421500
    },
    {
        "model": "Hisense 43 Inch 4K UHD QLED TV 43Q6N",
        "articleCode": 494421501
    },
    {
        "model": "Hisense 50 Inch 4K UHD QLED TV 50Q6N",
        "articleCode": 494421502
    },
    {
        "model": "Hisense 55 Inch 4K UHD QLED TV 55Q6N",
        "articleCode": 494421503
    },
    {
        "model": "Hisense 65 Inch 4K UHD QLED TV 65Q6N",
        "articleCode": 494421504
    },
    {
        "model": "Hisense 75 Inch 4K UHD QLED TV 75Q6N",
        "articleCode": 494421505
    },
    {
        "model": "Hisense 55Inch UHD 4K Mini LED 55U6N Pro",
        "articleCode": 494421506
    },
    {
        "model": "Hisense 65Inch UHD 4K Mini LED 65U6N Pro",
        "articleCode": 494421507
    },
    {
        "model": "Hisense 55Inch UHD 4K Mini LED 55U7N",
        "articleCode": 494421508
    },
    {
        "model": "Hisense 65Inch UHD 4K Mini LED 65U7N",
        "articleCode": 494421509
    },
    {
        "model": "Hisense 85 Inch UHD 4K QLED TV 85Q7N",
        "articleCode": 494421510
    },
    {
        "model": "Hisense 100 Inch UHD 4K QLED TV 100Q7N",
        "articleCode": 494421511
    },
    {
        "model": "HISENSE 43 Inch 4K UHD SMART TV 43E6N",
        "articleCode": 494443262
    },
    {
        "model": "HISENSE 55 Inch 4K UHD SMART TV 55E6N",
        "articleCode": 494443263
    },
    {
        "model": "HISENSE 65 Inch 4K UHD SMART TV 65E6N",
        "articleCode": 494443264
    },
    {
        "model": "HISENSE 43 UHD SMART QLED TV 43E68N",
        "articleCode": 494443265
    },
    {
        "model": "HISENSE 55 UHD SMART QLED TV 55E68N",
        "articleCode": 494443266
    },
    {
        "model": "Hisense 32 inches HD Smart TV 32E43N",
        "articleCode": 494443506
    },
    {
        "model": "Hisense 43 inches FHD Smart TV 43E43N",
        "articleCode": 494443507
    },
    {
        "model": "HISENSE SAC 1T 4SINV AS-12TC4RAM0",
        "articleCode": 581026856
    },
    {
        "model": "HISENSE SAC 1.5T 4SINV AS-18TC4RAM0",
        "articleCode": 581026857
    },
    {
        "model": "HISENSE SAC 2T 3SINV AS-22TC3RAM0",
        "articleCode": 581026858
    },
    {
        "model": "HISENSE SAC 1T 5SINV AS-12TC5RAM0",
        "articleCode": 581026859
    },
    {
        "model": "HISENSE SAC 1.5T 5SINV AS-18TC5RAM0",
        "articleCode": 581026860
    },
    {
        "model": "Hisense SAC 1T 3SINV ATC353HIB",
        "articleCode": 581110344
    },
    {
        "model": "Hisense SAC 1.5T 3SINV ATC503HIB",
        "articleCode": 581110345
    },
    {
        "model": "HISENSE SAC 1.5T 5SINV ATCW515HJP",
        "articleCode": 581110545
    },
    {
        "model": "Hisense AC AS12TR4R3BP1 1.0T",
        "articleCode": 581110826
    },
    {
        "model": "Hisense AC AS18TR4R3BP1 1.5T",
        "articleCode": 581110827
    },
    {
        "model": "Hisense AC AS18TR4R5AP1 1.5T",
        "articleCode": 581110828
    },
    {
        "model": "Hisense AC AS22TR4R3AP1 1.5T",
        "articleCode": 581110829
    },
    {
        "model": "Hisense AC ATCW623HJP 2.0T",
        "articleCode": 581110830
    },
    {
        "model": "Hisense AC ATCW355HJP 2.0T",
        "articleCode": 581110831
    },
    {
        "model": "Hisense AC AS12TW4RMRKA00 1.0T",
        "articleCode": 581110832
    },
    {
        "model": "Hisense AC AS12TW4RYRKA01B 1.0T",
        "articleCode": 581110833
    },
    {
        "model": "Hisense AC AS-18TW4RGSKA00 1.5T",
        "articleCode": 581110834
    },
    {
        "model": "Hisense AC AS-18TW4RXSKA00 1.5T",
        "articleCode": 581110835
    },
    {
        "model": "Hisense AC AS-22TR4RBBTV00 2.0T",
        "articleCode": 581110836
    },
    {
        "model": "Hisense AC AS-12TR4R3AM 1.0 T",
        "articleCode": 581110966
    },
    {
        "model": "Hisense AC AS-18TR4R3AK11.5 T",
        "articleCode": 581110967
    },
    {
        "model": "Hisense AC AS-18TR4R3AK21.5 T",
        "articleCode": 581110968
    },
    {
        "model": "Hisense AC AS-22TR4R3AJ2.0 T",
        "articleCode": 581110969
    },
    {
        "model": "Hisense AC AS-12TR4R5AJ1.0 T",
        "articleCode": 581110970
    },
    {
        "model": "Hisense AC AS-18TR4R5AJ11.5 T",
        "articleCode": 581110971
    },
    {
        "model": "Hisense AC AS-18TR4R5AJ21.5 T",
        "articleCode": 581110972
    },
    {
        "model": "Hisense AC AS-22TR4R5AI42.0 T",
        "articleCode": 581110973
    },
    {
        "model": "Hisense AC AS-12TF4R3AJ1.0 T",
        "articleCode": 581110974
    },
    {
        "model": "Hisense AC AS-18TF4R3AJ11.5 T",
        "articleCode": 581110975
    },
    {
        "model": "Hisense AC AS-18TF4R3AJ21.5 T",
        "articleCode": 581110976
    },
    {
        "model": "Hisense AC AS-22TF4R3AI4012.0 T",
        "articleCode": 581110977
    },
    {
        "model": "HISENSE AC SPLIT INVERTER 3S 1.2TON",
        "articleCode": 581111019
    },
    {
        "model": "HISENSE AC SPLIT INVERTER 3S 1.7TON",
        "articleCode": 581111020
    },
    {
        "model": "HISENSE AC SPLIT INVERTER 3S 1.8TON",
        "articleCode": 581111021
    },
    {
        "model": "HISENSE AC SPLIT INVERTER 3S 2.2TON",
        "articleCode": 581111022
    },
    {
        "model": "HISENSE AC SPLIT INVERTER 5S 1.8TON",
        "articleCode": 581111023
    },
    {
        "model": "Kelvinator Tower Cooler-30 ltr KCT-A300",
        "articleCode": 491604448
    },
    {
        "model": "Kelvinator Desert Cooler-55 ltr KCD-A550",
        "articleCode": 491604452
    },
    {
        "model": "Kelvinator Window Cooler-50 Ltr KCW-A500",
        "articleCode": 491604454
    },
    {
        "model": "Kelvinator Window 1.0T FS3S KAW-Y12310B",
        "articleCode": 491959031
    },
    {
        "model": "Kelvinator Window Cooler-50 Ltr KCW-B500",
        "articleCode": 491959062
    },
    {
        "model": "Kelvinator Tower Cooler-32L KCT-B320",
        "articleCode": 491959179
    },
    {
        "model": "Kelvinator Window 1.5T FS3S KAW-Y18320B",
        "articleCode": 492392026
    },
    {
        "model": "Kelvinator Personal Cooler-36L KCP-C360",
        "articleCode": 492573168
    },
    {
        "model": "Kelvinator Desert Cooler-70L KCD-C701",
        "articleCode": 492573238
    },
    {
        "model": "Kelvinator GAS STOVE KGSGTR2233B GT",
        "articleCode": 493627035
    },
    {
        "model": "Kelvinator WAC 1.5T INV3S KAW-I18CPSC",
        "articleCode": 493627306
    },
    {
        "model": "Kelvinator WAC 1.5T INV3S KAW-I5ACPSC",
        "articleCode": 493627307
    },
    {
        "model": "Kelvinator WAC 1.5T FS2S KAW-F18BPSC",
        "articleCode": 493627308
    },
    {
        "model": "Kelvinator WAC 1.0T FS2S KAW-F3BBPSC",
        "articleCode": 493627313
    },
    {
        "model": "KEL STORAGE HEATER 25L KSWHSQR25L2KW5SD",
        "articleCode": 494227011
    },
    {
        "model": "KELVINATOR 190L DC REF KSL205",
        "articleCode": 494322522
    },
    {
        "model": "KELVINATOR 170LTR DC REF KWP 184",
        "articleCode": 494322551
    },
    {
        "model": "KEL SATT 8.0 Kg KWT-N80ETGKP",
        "articleCode": 494460132
    },
    {
        "model": "KEL SATT 8.5 Kg KWT-N85ETGKP",
        "articleCode": 494460133
    },
    {
        "model": "KEL SATT 8.0 Kg KWT-N80ERNMP",
        "articleCode": 494460134
    },
    {
        "model": "KEL SATT 8.5 Kg KWT-N85ERNMP",
        "articleCode": 494460135
    },
    {
        "model": "KEL SATT 8.0 Kg KWT-N80ERNBP",
        "articleCode": 494460136
    },
    {
        "model": "KEL SATT 8.5 Kg KWT-N85ERNBP",
        "articleCode": 494460137
    },
    {
        "model": "Kelvinator Personal Cooler 22L-KCP022CGC",
        "articleCode": 494460154
    },
    {
        "model": "Kelvinator Personal Cooler 36L-KCP036CGC",
        "articleCode": 494460155
    },
    {
        "model": "Kelvinator Tower Cooler 30L-KCT030DGC",
        "articleCode": 494460156
    },
    {
        "model": "Kelvinator Desert Cooler 75L-KCD075BKB",
        "articleCode": 494460162
    },
    {
        "model": "Kelvinator Window Cooler 55L-KWC055CGB",
        "articleCode": 494460167
    },
    {
        "model": "Kelvinator Desert Cooler 50L-KCD050DGL",
        "articleCode": 494460169
    },
    {
        "model": "Kelvinator Desert Cooler 65L-KCD065BKC",
        "articleCode": 494460171
    },
    {
        "model": "Kelvinator Desert Cooler 105L-KCD105LBR",
        "articleCode": 494460179
    },
    {
        "model": "Kelvinator Comm Cooler 125L-KCC125GLBH",
        "articleCode": 494460181
    },
    {
        "model": "KEL REF DC188L1S KRD-F200EAENBD NANCY BL",
        "articleCode": 494460304
    },
    {
        "model": "Kelvinator WAC 18K FS3S KAW-F183PMSY5",
        "articleCode": 494460470
    },
    {
        "model": "KEL STORAGE HEATER 10L  KSWHABS10L2KW5SD",
        "articleCode": 494460499
    },
    {
        "model": "KEL STORAGE HEATER 15L KSWHABS15L2KW5SD",
        "articleCode": 494460500
    },
    {
        "model": "KEL STORAGE HEATER 25L  KSWHABS25L2KW5SD",
        "articleCode": 494460501
    },
    {
        "model": "KEL INSTANT HEATER KELVINATOR  KIWH3L3KW",
        "articleCode": 494460508
    },
    {
        "model": "KEL STORAGE HEATER 10L KSWHPP10L2KW5SGL",
        "articleCode": 494460509
    },
    {
        "model": "KEL STORAGE HEATER 15L KSWHPP15L2KW5SGL",
        "articleCode": 494460510
    },
    {
        "model": "KEL STORAGE HEATER 25L KSWHPP25L2KW5SGL",
        "articleCode": 494460511
    },
    {
        "model": "KEL STORAGE HEATER 06L KSWHPP06L3KW5SGL",
        "articleCode": 494460512
    },
    {
        "model": "KEL STORAGE HEATER 10L KSWHSQR10L2KW5SD",
        "articleCode": 494460513
    },
    {
        "model": "KEL STORAGE HEATER 15L KSWHSQR15L2KW5SD",
        "articleCode": 494460514
    },
    {
        "model": "Kelvinator Personal Cooler 12L-KCP012SBL",
        "articleCode": 494496024
    },
    {
        "model": "Kelvinator Comm Cooler 85L-KCC085GDR",
        "articleCode": 494496028
    },
    {
        "model": "DUMMY KEL SAC 18K INV3S KAS-V183ALSC5",
        "articleCode": 494509728
    },
    {
        "model": "DUMMY KEL SAC 12K INV3S KAS-V123ALSC5",
        "articleCode": 494509729
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KAS-V193PLSC5",
        "articleCode": 494509734
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KAS-V193PLSG5W",
        "articleCode": 494509735
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KHS-V193PLSG5W",
        "articleCode": 494509736
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KAS-F183PLSY5",
        "articleCode": 494509737
    },
    {
        "model": "DUMMY KEL SAC 19K INV5S KAS-V195PLSY5",
        "articleCode": 494509738
    },
    {
        "model": "DUMMY KEL SAC 24K INV3S KAS-V243PLSY5",
        "articleCode": 494509739
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KAS-V193PLSG5",
        "articleCode": 494509751
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KAS-V193PLSC5W",
        "articleCode": 494509752
    },
    {
        "model": "DUMMY KEL SAC 19K INV3S KHS-V193PLSC5W",
        "articleCode": 494509753
    },
    {
        "model": "DUMMY KEL SAC 19K INV5S KAS-V195PLSG5",
        "articleCode": 494509754
    },
    {
        "model": "DUMMY KEL SAC 24K INV3S KAS-V243PLSG5",
        "articleCode": 494509755
    },
    {
        "model": "Kelvinator Comm Cooler 115L-KCC115GDR",
        "articleCode": 494509919
    },
    {
        "model": "KEL REF DC188L1S KRD-F200EAENWD NANCY WN",
        "articleCode": 494510274
    },
    {
        "model": "KEL REF DC188L2S KRD-F200EBEWBD WINDY BL",
        "articleCode": 494510275
    },
    {
        "model": "KEL REF DC188L2S KRD-F200EBEWWD WINDY WN",
        "articleCode": 494510276
    },
    {
        "model": "KEL REF DC187L3S KRD-F200ECPOWS FLORN WN",
        "articleCode": 494510280
    },
    {
        "model": "KEL REF DC187L3S KRD-F201ECPOWS FLORN WN",
        "articleCode": 494510281
    },
    {
        "model": "KEL REF DC187L3S KRD-F200ECPOBS FLORN BL",
        "articleCode": 494510282
    },
    {
        "model": "KEL REF DC201L2S KRD-F210EBEEWS ALYNA WN",
        "articleCode": 494510284
    },
    {
        "model": "KEL REF DC201L3S KRD-F210ECPOWS FLORN WN",
        "articleCode": 494510288
    },
    {
        "model": "KEL REF DC201L3S KRD-F210ECPOBS FLORN BL",
        "articleCode": 494510289
    },
    {
        "model": "KEL REF DC201L3S KRD-F211ECPOBS FLORN BL",
        "articleCode": 494510290
    },
    {
        "model": "KEL REF DC201L5S KRD-I210EEPOWS FLORN WN",
        "articleCode": 494510291
    },
    {
        "model": "KEL REF DC201L5S KRD-I211EEPOWS FLORN WN",
        "articleCode": 494510292
    },
    {
        "model": "KEL REF DC221L2S KRD-F230EBEEWS ALYNA WN",
        "articleCode": 494510293
    },
    {
        "model": "KEL REF DC221L3S KRD-F230ECEEBS ALYNA BL",
        "articleCode": 494510297
    },
    {
        "model": "KEL REF DC221L3S KRD-F231ECEEBS ALYNA BL",
        "articleCode": 494510298
    },
    {
        "model": "KEL REF DC248L3S KRD-F250ECPSGI INOX",
        "articleCode": 494510313
    },
    {
        "model": "KEL REF SBS562L KRS-I570RNVHST HL SILVER",
        "articleCode": 494510315
    },
    {
        "model": "KEL REF FF 253L 2S KRF-I280RBVBGT INOX",
        "articleCode": 494510317
    },
    {
        "model": "Kel SATT 14 KG KWS-N14ETTKP",
        "articleCode": 494605952
    },
    {
        "model": "Kel FATL 7 Kg KWT-H70ETBFD",
        "articleCode": 494605953
    },
    {
        "model": "Kel FATL 7.5 Kg KWT-H75ETBFD",
        "articleCode": 494605954
    },
    {
        "model": "Kel FATL 8.5 Kg KWT-H85ETBFD",
        "articleCode": 494605955
    },
    {
        "model": "Kel SATT 8.5 Kg KWS-N85EFTKD",
        "articleCode": 494605956
    },
    {
        "model": "Kel SATT 10 Kg KWS-N10EFTKD",
        "articleCode": 494605957
    },
    {
        "model": "Kel FATL 7.5 Kg KWT-N75ETSFD",
        "articleCode": 494606040
    },
    {
        "model": "Kel SATT 9.0 Kg KWS-N90ETBKD",
        "articleCode": 494606163
    },
    {
        "model": "Kel SATT 12.0 Kg KWS-N12EFTKD",
        "articleCode": 494606165
    },
    {
        "model": "Kel 12 Kg KWT-H12ETBFD",
        "articleCode": 494606280
    },
    {
        "model": "Kel 7 Kg KWT-N70ETBFD",
        "articleCode": 494606281
    },
    {
        "model": "Kel FATL 7.5 Kg KWT-N75ETBFD",
        "articleCode": 494606282
    },
    {
        "model": "Kel FATL 8.5 Kg KWT-N85ETBFD",
        "articleCode": 494606283
    },
    {
        "model": "Kelvinator Tower Cooler 50L-KCT050DGC",
        "articleCode": 494606325
    },
    {
        "model": "Kelvinator BLDC DCooler 75L-KCD075BLDCL",
        "articleCode": 494606327
    },
    {
        "model": "Kelvinator Comm Cooler 120L-KCC120DGR",
        "articleCode": 494606328
    },
    {
        "model": "Kelvinator Desert Cooler 100L-KCD100DGBH",
        "articleCode": 494606330
    },
    {
        "model": "Kelvinator SAC 1T INV3S  KAS-X12310B",
        "articleCode": 581026650
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18310B",
        "articleCode": 581026651
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18320B",
        "articleCode": 581026675
    },
    {
        "model": "Kelvinator SAC 1T INV5S  KAS-X12520B",
        "articleCode": 581026677
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S  KAS-X18520B",
        "articleCode": 581026678
    },
    {
        "model": "Kelvinator SAC 2T INV3S  KAS-X24320B",
        "articleCode": 581026679
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-X12320P",
        "articleCode": 581026689
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18320P",
        "articleCode": 581026690
    },
    {
        "model": "Kelvinator SAC 1T INV5S  KAS-X12520M",
        "articleCode": 581026691
    },
    {
        "model": "Kelvinator SAC 1T INV5S  KAS-X12520P",
        "articleCode": 581026692
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S  KAS-X18520P",
        "articleCode": 581026694
    },
    {
        "model": "Kelvinator SAC 2T INV3S  KAS-X24321B",
        "articleCode": 581026695
    },
    {
        "model": "Kelvinator SAC 1.5T FS3S KAS-Y18320B",
        "articleCode": 581026737
    },
    {
        "model": "Kelvinator SAC 1.5T FS3S KAS-Y18321B",
        "articleCode": 581026826
    },
    {
        "model": "Kelvinator SAC 1.5T FS3S KAS-Y18222B",
        "articleCode": 581027033
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-I12CPTC",
        "articleCode": 581027096
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-I12CPYG",
        "articleCode": 581027097
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-I3BCPSB",
        "articleCode": 581027098
    },
    {
        "model": "Kelvinator SAC 1T INV5S KAS-I12EPTC",
        "articleCode": 581027099
    },
    {
        "model": "Kelvinator SAC 1T INV5S KAS-I12EPYG",
        "articleCode": 581027100
    },
    {
        "model": "Kelvinator SAC 1T INV5S KAS-I3BEPSB",
        "articleCode": 581027101
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I18CPTC",
        "articleCode": 581027102
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I18CPYG",
        "articleCode": 581027103
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-H18CPTC",
        "articleCode": 581027105
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-H5ACPTC",
        "articleCode": 581027106
    },
    {
        "model": "Kelvinator SAC 1.25T INV3S KHS-I15CPYS",
        "articleCode": 581027109
    },
    {
        "model": "Kelvinator SAC 1.25T INV3S KHS-I4ACPGF",
        "articleCode": 581027110
    },
    {
        "model": "Kelvinator SAC 1.6T INV3S KHS-I5ACPGF",
        "articleCode": 581027112
    },
    {
        "model": "Kelvinator SAC 1.6T INV5S KHS-I18EPYS",
        "articleCode": 581027113
    },
    {
        "model": "Kelvinator SAC 1.6T INV5S KHS-I5AEPGF",
        "articleCode": 581027114
    },
    {
        "model": "Kelvinator SAC 2T INV3S KHS-I7ACPGF",
        "articleCode": 581027116
    },
    {
        "model": "KELV SAC 1T 5S LSJ35 WS1 MDA Wht",
        "articleCode": 581107173
    },
    {
        "model": "KELV SAC 1.5T 5S LSJ55 WS1 MDA Wht",
        "articleCode": 581107174
    },
    {
        "model": "Kelvinator SAC 1T INV3S  KAS-X12300B",
        "articleCode": 581109871
    },
    {
        "model": "Kelvinator SAC 1T INV3S  KAS-X12301B",
        "articleCode": 581109872
    },
    {
        "model": "Kelvinator SAC 1T INV3S  KAS-X12300P",
        "articleCode": 581109873
    },
    {
        "model": "Kelvinator SAC 1T INV3S  KAS-X12300M",
        "articleCode": 581109874
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18301B",
        "articleCode": 581109875
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18300B",
        "articleCode": 581109876
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18300M",
        "articleCode": 581109877
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18300P",
        "articleCode": 581109878
    },
    {
        "model": "Kelvinator SAC 2.0T INV3S KAS-X24300B",
        "articleCode": 581109879
    },
    {
        "model": "Kelvinator SAC 1T INV5S  KAS-X12500P",
        "articleCode": 581109880
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S  KAS-X18500P",
        "articleCode": 581109881
    },
    {
        "model": "Kelvinator SAC 1T INV5S  KAS-X12510B",
        "articleCode": 581110085
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S  KAS-X18310B",
        "articleCode": 581110086
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S  KAS-X18510B",
        "articleCode": 581110087
    },
    {
        "model": "Kelvinator SAC 2.0T INV3S  KAS-X24310B",
        "articleCode": 581110088
    },
    {
        "model": "Kelvinator SAC 1.5T FS3S  KAS-Y18310B",
        "articleCode": 581110089
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I18CBPW",
        "articleCode": 581110216
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I5ACBPW",
        "articleCode": 581110217
    },
    {
        "model": "Kelvinator SAC 1.0T INV3S KAS-I12CAFC2",
        "articleCode": 581110218
    },
    {
        "model": "Kelvinator SAC 0.9T INV3S KAS-I3ACAFC",
        "articleCode": 581110219
    },
    {
        "model": "Kelvinator SAC 0.9T INV3S KAS-I3ACAPW",
        "articleCode": 581110220
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-I12CAFC",
        "articleCode": 581110224
    },
    {
        "model": "Kelvinator SAC 1T INV3S KAS-I3BCAPW",
        "articleCode": 581110225
    },
    {
        "model": "Kelvinator SAC 1T INV5S KAS-I12EAFC",
        "articleCode": 581110228
    },
    {
        "model": "Kelvinator SAC 1T INV5S KAS-I3BEAPW",
        "articleCode": 581110229
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I18CAFC",
        "articleCode": 581110232
    },
    {
        "model": "Kelvinator SAC 1.5T INV3S KAS-I5ACAPW",
        "articleCode": 581110233
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S KAS-I18EAFC",
        "articleCode": 581110236
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S KAS-I5AEAFC",
        "articleCode": 581110237
    },
    {
        "model": "Kelvinator SAC 1.5T INV5S KAS-I5AEAPW",
        "articleCode": 581110238
    },
    {
        "model": "Kelvinator SAC 2T INV3S KAS-I24CAFC",
        "articleCode": 581110242
    },
    {
        "model": "Kelvinator SAC 2T INV3S KAS-I7ACAFC",
        "articleCode": 581110243
    },
    {
        "model": "Kelvinator SAC 2T INV3S KAS-I7ACAPW",
        "articleCode": 581110244
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F12BAFC",
        "articleCode": 581110248
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F3BBAFC",
        "articleCode": 581110249
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F3BBAPW",
        "articleCode": 581110250
    },
    {
        "model": "Kelvinator SAC 1.5T FS2S KAS-F18BAFC",
        "articleCode": 581110254
    },
    {
        "model": "Kelvinator SAC 1.5T FS2S KAS-F5ABAFC",
        "articleCode": 581110255
    },
    {
        "model": "Kelvinator SAC 1.5T FS2S KAS-F5ABAPW",
        "articleCode": 581110256
    },
    {
        "model": "Kelvinator SAC 2T FS2S KAS-F24BAFC",
        "articleCode": 581110260
    },
    {
        "model": "Kelvinator SAC 2T FS2S KAS-F7ABAFC",
        "articleCode": 581110261
    },
    {
        "model": "Kelvinator SAC 2T FS2S KAS-F7ABAPW",
        "articleCode": 581110262
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F12BTFC",
        "articleCode": 581110428
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F3BBTFC",
        "articleCode": 581110429
    },
    {
        "model": "Kelvinator SAC 1T FS2S KAS-F3BBTPW",
        "articleCode": 581110430
    },
    {
        "model": "Kelvinator SAC 18K FS2S KAS-F182ATFC",
        "articleCode": 581110673
    },
    {
        "model": "KELVINATOR SAC 1T 3SINV KAS-I12CAFC",
        "articleCode": 581110762
    },
    {
        "model": "Kelvinator SAC 18K FS3S KAS-F183PLSY5",
        "articleCode": 581110786
    },
    {
        "model": "Kelvinator SAC 24K INV3S KAS-V243PLSY5",
        "articleCode": 581110787
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193PLSC5",
        "articleCode": 581110788
    },
    {
        "model": "Kelvinator SAC 19K INV5S KAS-V195PLSY5",
        "articleCode": 581110789
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193PLSG5W",
        "articleCode": 581110790
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-H193PLSS5",
        "articleCode": 581110791
    },
    {
        "model": "Kelvinator SAC 19K INV3S KHS-V193PLSG5W",
        "articleCode": 581110792
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183ALSC5",
        "articleCode": 581110793
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123ALSC5",
        "articleCode": 581110794
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183TLSC5",
        "articleCode": 581110795
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123TLSC5",
        "articleCode": 581110796
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183ALSG5",
        "articleCode": 581110806
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123ALSG5",
        "articleCode": 581110807
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123TLSG5",
        "articleCode": 581110808
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193PLSG5",
        "articleCode": 581110813
    },
    {
        "model": "Kelvinator SAC 24K INV3S KAS-V243PLSG5",
        "articleCode": 581110818
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183ALSC5K",
        "articleCode": 581110819
    },
    {
        "model": "Kelvinator SAC 19K INV5S KAS-V195PLSG5",
        "articleCode": 581110820
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193PLSC5W",
        "articleCode": 581110821
    },
    {
        "model": "Kelvinator SAC 19K INV3S KHS-V193PLSC5W",
        "articleCode": 581110822
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123ALSC6",
        "articleCode": 581111059
    },
    {
        "model": "Kelvinator SAC 12K INV3S KAS-V123ALSC6W",
        "articleCode": 581111060
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183ALSC6",
        "articleCode": 581111061
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193ALSC6",
        "articleCode": 581111062
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183TLSC6",
        "articleCode": 581111063
    },
    {
        "model": "Kelvinator SAC 24K INV3S KAS-V243ALSC6",
        "articleCode": 581111064
    },
    {
        "model": "Kelvinator SAC 18K INV5S KAS-V185PLSG6W",
        "articleCode": 581111065
    },
    {
        "model": "Kelvinator SAC 24K INV3S KAS-V243PLSG6",
        "articleCode": 581112091
    },
    {
        "model": "Kelvinator SAC 19K INV3S KAS-V193PLSC6S",
        "articleCode": 581112092
    },
    {
        "model": "Kelvinator SAC 19K INV3S KHS-V193PLSC6W",
        "articleCode": 581112093
    },
    {
        "model": "Kelvinator SAC 18K INV3S KAS-V183PLSC6W",
        "articleCode": 581112094
    },
    {
        "model": "LYF 43 UHD SMART LED TV LYU4301S",
        "articleCode": 491211714
    },
    {
        "model": "LYF 50 UHD SMART LED TV LYU5001S",
        "articleCode": 491211715
    },
    {
        "model": "LYF 65 UHD SMART LED TV LYU6501S",
        "articleCode": 491211717
    },
    {
        "model": "LYF 32 HD Linux SMART TV LD32HL2000A",
        "articleCode": 493179512
    },
    {
        "model": "LYF 43 UHD WebOS SMART TV LD43UL7000A",
        "articleCode": 493179513
    },
    {
        "model": "LYF 43 FHD AOSP TV LD43FL3000A",
        "articleCode": 493179514
    },
    {
        "model": "LYF 32 HD Linux SMART TV LD32HL2000B",
        "articleCode": 493179515
    },
    {
        "model": "LYF 43 UHD WebOS SMART TV LD43UL7000B",
        "articleCode": 493179516
    },
    {
        "model": "LYF 43 FHD AOSP TV LD43FL3000B",
        "articleCode": 493179517
    },
    {
        "model": "LYF SATT 7.5Kg LWS-N75EASPP",
        "articleCode": 493858060
    },
    {
        "model": "LYF SATT 7.5Kg LWS-N75ETWBP",
        "articleCode": 493858061
    },
    {
        "model": "LYF SAC 1T INV3S LAS-I3BCPTC",
        "articleCode": 581110437
    },
    {
        "model": "LYF SAC 1.5T INV3S LAS-I5ACPTC",
        "articleCode": 581110438
    },
    {
        "model": "LYF SAC 18K INV3S LAS-V183ATFC",
        "articleCode": 581110562
    },
    {
        "model": "RECONNECT-32 HD LCD TV-L3298A",
        "articleCode": 490845393
    },
    {
        "model": "RECONNECT-42 FHD LCD TV-L4298B",
        "articleCode": 490845395
    },
    {
        "model": "RECONNECT-32 FHD LED TV-LE3295A",
        "articleCode": 490845397
    },
    {
        "model": "RECONNECT-42 FHD LED TV-LE4295A",
        "articleCode": 490845399
    },
    {
        "model": "RECONNECT -32 HD LED TV-RELEB3202",
        "articleCode": 490884347
    },
    {
        "model": "RECONNECT-42 FHD LED TV-RELEB4202",
        "articleCode": 490884349
    },
    {
        "model": "RECONNECT- 42 FHD  LED TV-RELEG4203",
        "articleCode": 490884350
    },
    {
        "model": "RECONNECT - 32 HD LCD TV-RELCG3201",
        "articleCode": 490902652
    },
    {
        "model": "RECONNECT  32 FHD LED TV-RELEG3201",
        "articleCode": 490902654
    },
    {
        "model": "RECONNECT WAC 1.5T 3S RHWAG1501",
        "articleCode": 490910959
    },
    {
        "model": "RECONNECT WAC 1.5T 2S RHWAG1502",
        "articleCode": 490910960
    },
    {
        "model": "RECONNECT MWO CONV RHMCB2501 25L",
        "articleCode": 490911153
    },
    {
        "model": "RECONNECT REF DC 75L RHDCG7501",
        "articleCode": 490911191
    },
    {
        "model": "RECONNECT-43 3D HD PDP TV-REPDB4301",
        "articleCode": 490917582
    },
    {
        "model": "RECONNECT-22 FHD LED TV-RELEG2201",
        "articleCode": 490927114
    },
    {
        "model": "RECONNECT  46 FHD  LED TV-RELEB4601",
        "articleCode": 490930094
    },
    {
        "model": "RECONNECT- 29 HD LED TV-RELEG2901",
        "articleCode": 490950273
    },
    {
        "model": "RECONNECT- 32 HD LED TV-RELEG3203",
        "articleCode": 490958220
    },
    {
        "model": "RECONNECT-42 FHD LED TV-RELEB4204",
        "articleCode": 490983950
    },
    {
        "model": "RECONNECT-32 HD LED TV-RELEB3204",
        "articleCode": 490983951
    },
    {
        "model": "RECONNECT-39 FHD LED TV-RELEG3901",
        "articleCode": 490983999
    },
    {
        "model": "RECONNECT- 32 HD  LED TV-RELEG3203 MH",
        "articleCode": 491042564
    },
    {
        "model": "RECONNECT-2.0 CH SOUNDBAR-RESBG6001",
        "articleCode": 491042588
    },
    {
        "model": "RECONNECT- 42 FHD LED TV-RELEB4205",
        "articleCode": 491054300
    },
    {
        "model": "RECONNECT-42 FHD 3D SMART LED TV 4207",
        "articleCode": 491065043
    },
    {
        "model": "RECONNECT-47 FHD 3D SMART LED TV 4701",
        "articleCode": 491065044
    },
    {
        "model": "RECONNECT- 24 HD LED TV-RELEG2401",
        "articleCode": 491065046
    },
    {
        "model": "RECONNECT-55 FHD 3D SMART LED TV 5501",
        "articleCode": 491072728
    },
    {
        "model": "RECONNECT REFRIGERATOR DC 70L RHDCG7001",
        "articleCode": 491163834
    },
    {
        "model": "RECONNECT-32 HD LED TV-RELEG3205",
        "articleCode": 491188121
    },
    {
        "model": "RECONNECT 28 HD LED TV RELEG2801",
        "articleCode": 491189570
    },
    {
        "model": "RECONNECT 48 FHD LED TV RELEG4801",
        "articleCode": 491211552
    },
    {
        "model": "RECONNECT 55 UHD LED TV RELEE5502",
        "articleCode": 491211716
    },
    {
        "model": "RECONNECT 32 HD LED TV RELEG3206",
        "articleCode": 491211802
    },
    {
        "model": "RECONNECT-43 FHD LED TV-RELEG4301",
        "articleCode": 491211803
    },
    {
        "model": "Reconnect 32 HD LED PANEL RELEG3206",
        "articleCode": 491216824
    },
    {
        "model": "Reconnect 43 FHD LED PANEL RELEG4301",
        "articleCode": 491216828
    },
    {
        "model": "RECONNECT 43 4K/UHD SMART LED RELEE4303",
        "articleCode": 491216829
    },
    {
        "model": "RECONNECT 55 4K/UHD SMART LED RELEE5502",
        "articleCode": 491216831
    },
    {
        "model": "RECONNECT 32 HD SMART LED TV RELEB3207",
        "articleCode": 491216835
    },
    {
        "model": "RECONNECT 43 FHD SMART LED TV RELEB4304",
        "articleCode": 491216836
    },
    {
        "model": "RECONNECT 24 HD LED TV RELEG2402",
        "articleCode": 491216857
    },
    {
        "model": "RECONNECT SPEAKER ELECTRA RAMSE2109",
        "articleCode": 491277091
    },
    {
        "model": "RECONNECT WAC 1.0T 3S RHWAG1001",
        "articleCode": 491281256
    },
    {
        "model": "RECONNECT WAC 1.5 T3S RHWAG1503",
        "articleCode": 491281257
    },
    {
        "model": "RECONNECT 24 HD LED TV RELEG2403",
        "articleCode": 491295761
    },
    {
        "model": "RECONNECT 49 FHD LED TV RELEG4901",
        "articleCode": 491295762
    },
    {
        "model": "49 FHD LED PANEL RELEG4901",
        "articleCode": 491295766
    },
    {
        "model": "RECONNECT HD Smart LED PANEL RELEB3207",
        "articleCode": 491295918
    },
    {
        "model": "RECONNECT FHD Smart LED PANEL RELEB4304",
        "articleCode": 491295919
    },
    {
        "model": "RECONNECT 39 HD LED PANEL RELEG3903",
        "articleCode": 491295920
    },
    {
        "model": "32 HD SAMPLE TCL Smart RELEB3207",
        "articleCode": 491295922
    },
    {
        "model": "43 FHD SAMPLE TCL Smart RELEB4304",
        "articleCode": 491295923
    },
    {
        "model": "Reconnect 28 HD Sample LED TV 28HDS",
        "articleCode": 491296113
    },
    {
        "model": "Reconnect  39 FHD Sample LED TV  39FHDS",
        "articleCode": 491296114
    },
    {
        "model": "Reconnect 32 HD Sample LED TV 32HDS",
        "articleCode": 491296115
    },
    {
        "model": "Reconnect 24 HD Sample LED TV 24HDS",
        "articleCode": 491296116
    },
    {
        "model": "Reconnect  49 FHD Sample LED TV 49FHDS",
        "articleCode": 491296117
    },
    {
        "model": "RECONNECT 55 UHD LED TV 55U5570",
        "articleCode": 491296121
    },
    {
        "model": "Reconnect 55 UHD LED PANEL 55U5570",
        "articleCode": 491296122
    },
    {
        "model": "RECONNECT 39 HD LED TV RELEG3903",
        "articleCode": 491297657
    },
    {
        "model": "Reconnect Electra PartySpkr WL RAMSE2109",
        "articleCode": 491320631
    },
    {
        "model": "RECONNECT WAC 1T 3S  YW-123B80",
        "articleCode": 491350432
    },
    {
        "model": "RECONNECT WAC 1.5T 3S  YW-183B80",
        "articleCode": 491350433
    },
    {
        "model": "RECONNECT PAC 1.0 T YP-123B80",
        "articleCode": 491350610
    },
    {
        "model": "RECONNECT 32 HD LED TV RELEG3206N",
        "articleCode": 491362368
    },
    {
        "model": "Reconnect 32 HD LED PANEL RELEG3206N",
        "articleCode": 491362369
    },
    {
        "model": "RECONNECT 32 HD SMART TV LED32E6300",
        "articleCode": 491362438
    },
    {
        "model": "RECONNECT 43 FHD SMART TV LED43F6800",
        "articleCode": 491362439
    },
    {
        "model": "RECONNECT 49 FHD SMART TV LED49F6800",
        "articleCode": 491362440
    },
    {
        "model": "RECONNECT 43 UHD  SMART TV UD43F6800",
        "articleCode": 491362441
    },
    {
        "model": "RECONNECT 49  UHD  SMART TV UD49F6800",
        "articleCode": 491362442
    },
    {
        "model": "RECONNECT 55 UHD SMART TV UD55F6800",
        "articleCode": 491362443
    },
    {
        "model": "Reconnect 43 FHD LED PANEL 43F4382",
        "articleCode": 491362470
    },
    {
        "model": "RECONNECT 43 FHD LED TV 43F4382",
        "articleCode": 491362471
    },
    {
        "model": "RECONNECT 43 UHD SMART TV 43U4381S",
        "articleCode": 491362491
    },
    {
        "model": "RECONNECT 49 UHD SMART TV 49U4980S",
        "articleCode": 491362492
    },
    {
        "model": "RECONNECT 55 UHD SMART TV 55U5580S",
        "articleCode": 491362493
    },
    {
        "model": "RECONNECT 65 UHD SMART TV 65U6580S",
        "articleCode": 491362494
    },
    {
        "model": "RECONNECT UHD SMART LED PANEL 43U4381S",
        "articleCode": 491362495
    },
    {
        "model": "RECONNECT UHD SMART LED PANEL 49U4980S",
        "articleCode": 491362496
    },
    {
        "model": "RECONNECT UHD SMART LED PANEL 55U5580S",
        "articleCode": 491362497
    },
    {
        "model": "RECONNECT UHD SMART LED PANEL 65U6580S",
        "articleCode": 491362498
    },
    {
        "model": "RECONNECT HD SMART LED  PANEL 32H3280S",
        "articleCode": 491362499
    },
    {
        "model": "RECONNECT FHD SMART LED PANEL 43F4380S",
        "articleCode": 491362500
    },
    {
        "model": "RECONNECT 32 HD SMART TV 32H3280S",
        "articleCode": 491362501
    },
    {
        "model": "RECONNECT 43 FHD SMART TV 43F4380S",
        "articleCode": 491362502
    },
    {
        "model": "RECONNECT 24 FHD TV 24F2480",
        "articleCode": 491362578
    },
    {
        "model": "RECONNECT 32 HD LED TV 32H3281",
        "articleCode": 491430993
    },
    {
        "model": "RECONNECT 32 HD Smart TV 32H3282S",
        "articleCode": 491430994
    },
    {
        "model": "RECONNECT 43 UHD SMART LED TV 43U4390S",
        "articleCode": 491431194
    },
    {
        "model": "RECONNECT 55 UHD SMART LED TV 55U5590S",
        "articleCode": 491431195
    },
    {
        "model": "RECONNECT 65UHD SMART LED TV 65U6590S",
        "articleCode": 491431196
    },
    {
        "model": "RECONNECT 40 FHD LED TV 40F4090",
        "articleCode": 491431244
    },
    {
        "model": "RECONNECT 43 FHD LED TV 43F4390",
        "articleCode": 491431280
    },
    {
        "model": "RECONNECT TV SAMPLE 32 AND BELOW 32 INCH",
        "articleCode": 491431417
    },
    {
        "model": "RECONNECT TV SAMPLE ABOVE 32 INCH",
        "articleCode": 491431418
    },
    {
        "model": "RECONNECT 24 HD LED TV 24H2490",
        "articleCode": 491431421
    },
    {
        "model": "RECONNECT 32 HD LED TV 32H3290",
        "articleCode": 491431654
    },
    {
        "model": "Reconnect 5.1 CH Soundbar SB01502",
        "articleCode": 491431676
    },
    {
        "model": "Reconnect Tower Air Cooler RH9102 48L",
        "articleCode": 491538833
    },
    {
        "model": "RECONNECT REF DC 190 L RH210D3PMR LILAC",
        "articleCode": 491539164
    },
    {
        "model": "Reconnect Window AC Sample",
        "articleCode": 491539245
    },
    {
        "model": "RECONNECT 32 HD SMART LED TV 32G4301H",
        "articleCode": 491600421
    },
    {
        "model": "RECONNECT 43 FHD SMART LED TV 43G5301H",
        "articleCode": 491600422
    },
    {
        "model": "RECONNECT 32 HD SMART FIRE TV 32A4301H",
        "articleCode": 491600482
    },
    {
        "model": "RECONNECT 43 FHD SMART FIRE TV 43A5301H",
        "articleCode": 491600483
    },
    {
        "model": "Reconnect 24 HD NON-SMART TV 24H2420",
        "articleCode": 493285589
    },
    {
        "model": "Reconnect 32 HD SMART TV 32H3220S",
        "articleCode": 493285591
    },
    {
        "model": "Reconnect 43 FHD SMART TV 43F4320S",
        "articleCode": 493285592
    },
    {
        "model": "Reconnect 43 UHD SMART TV 43U4320S",
        "articleCode": 493285593
    },
    {
        "model": "Reconnect 32 HD WEBOS SMART TV 32H3230S",
        "articleCode": 493666559
    },
    {
        "model": "Reconnect 43 UHD WEBOS SMART TV 43U4331S",
        "articleCode": 493666562
    },
    {
        "model": "Reconnect 43FHD Smart Neo TV 43F4330S",
        "articleCode": 493841907
    },
    {
        "model": "Reconnect 55UHD WebOS Smart TV 55U5530S",
        "articleCode": 493841908
    },
    {
        "model": "RECONNECT SAC 1T 3S SILVER RHSAG1001",
        "articleCode": 581102415
    },
    {
        "model": "RECONNECT SAC 1T 5S GLASS RHSAB1001",
        "articleCode": 581102416
    },
    {
        "model": "RECONNECT SAC 1.5T 3S SILVER RHSAG1501",
        "articleCode": 581102417
    },
    {
        "model": "RECONNECT SAC 1.5T 5S GLASS RHSAB1501",
        "articleCode": 581102418
    },
    {
        "model": "Reconnect 1T Split AC 3S RHSAG1002",
        "articleCode": 581105358
    },
    {
        "model": "Reconnect 1.5T Split AC 3S RHSAG1502",
        "articleCode": 581105359
    },
    {
        "model": "Reconnect 1T Split AC 5S RHSAB1002",
        "articleCode": 581105360
    },
    {
        "model": "Reconnect 1.5T Split AC 5S RHSAB1502",
        "articleCode": 581105361
    },
    {
        "model": "Reconnect 2T Split AC 3 Star RHSAG2002",
        "articleCode": 581105363
    },
    {
        "model": "RECONNECT 1T 3S SAC RHSAG1003",
        "articleCode": 581107089
    },
    {
        "model": "RECONNECT 1.5T 3S SAC RHSAG1503",
        "articleCode": 581107090
    },
    {
        "model": "RECONNECT 2T 4S SAC RHSAG2003",
        "articleCode": 581107091
    },
    {
        "model": "RECONNECT 1.5T 5S SAC RHSAB1504",
        "articleCode": 581107092
    },
    {
        "model": "RECONNECT 1.0T INV SAC RHSAB1004",
        "articleCode": 581107093
    },
    {
        "model": "RECONNECTSOUNDBAR RESBG6002 WOOFER",
        "articleCode": 581107293
    },
    {
        "model": "RECONNECT SAC 1.0T 3S RHSAG1005",
        "articleCode": 581107815
    },
    {
        "model": "RECONNECT SAC 1.5T 3S RHSAG1505",
        "articleCode": 581107816
    },
    {
        "model": "RECONNECT SAC 2.0T 3S RHSAG2004",
        "articleCode": 581107817
    },
    {
        "model": "RECONNECT SAC 1.0 T Inv3S RHSAB1006",
        "articleCode": 581107818
    },
    {
        "model": "RECONNECT SAC 1.5T INV RHSAB1506",
        "articleCode": 581107819
    },
    {
        "model": "RECONNECT SAC 1.5T Inv3S RHSAB1507",
        "articleCode": 581108188
    },
    {
        "model": "RECONNECT SAC 2.0 T Inv3S RHSAB2005",
        "articleCode": 581108189
    },
    {
        "model": "RECONNECT SAC 1.5 T3S RHSAG1508",
        "articleCode": 581108190
    },
    {
        "model": "RECONNECT SAC 1.5T 5S RHSAB1509",
        "articleCode": 581108202
    },
    {
        "model": "RECONNECT SAC 1T 3SINV  XS-123B80",
        "articleCode": 581108924
    },
    {
        "model": "RECONNECT SAC 1.5T 3SINV  XS-183B80",
        "articleCode": 581108925
    },
    {
        "model": "RECONNECT SAC 2T 3SINV  XS-243B80",
        "articleCode": 581108926
    },
    {
        "model": "RECONNECT SAC 1.5T 5SINV  XS-185B80",
        "articleCode": 581108927
    },
    {
        "model": "RECONNECT SAC 1T 3SINV  XS-123B90",
        "articleCode": 581109175
    },
    {
        "model": "RECONNECT SAC 1.5T 3SINV  XS-183B90",
        "articleCode": 581109176
    },
    {
        "model": "Reconnect Split AC Sample",
        "articleCode": 581109812
    },
    {
        "model": "RECONNECT SAC 1T INV3S  XS-123BX0",
        "articleCode": 581109866
    },
    {
        "model": "RECONNECT SAC 1.5T INV3S  XS-183BX0",
        "articleCode": 581109867
    },
    {
        "model": "RECONNECT SAC 2T INV3S  XS-243BX0",
        "articleCode": 581109868
    },
    {
        "model": "RECONNECT SAC 1.5T INV5S  XS-185PX0",
        "articleCode": 581109869
    },
    {
        "model": "RECONNECT SAC 1.0T INV5S  XS-125PX0",
        "articleCode": 581109870
    },
    {
        "model": "SINGER Personal Cooler ATLANTIC 20 ltr",
        "articleCode": 491332426
    },
    {
        "model": "SINGER Desert Cooler AEROCOOL DX 50 ltr",
        "articleCode": 491332427
    },
    {
        "model": "SINGER PERSONAL COOLER ATLANTIC 32 LTR",
        "articleCode": 491332447
    },
    {
        "model": "SINGER COOLER AEROCOOL PRIDE DX 90L",
        "articleCode": 492867444
    },
    {
        "model": "sINGER AERO ULTIMA 70 L ROOM  AIR COOLER",
        "articleCode": 494375008
    },
    {
        "model": "TOSHIBA-32 HD LCD TV-32PB10",
        "articleCode": 490868597
    },
    {
        "model": "TOSHIBA-24 HD LED TV-24PS10",
        "articleCode": 490868599
    },
    {
        "model": "D TOSHIBA-29 HD LED TV - 29PU200ZE",
        "articleCode": 491073024
    },
    {
        "model": "TOSHIBA 32HD LED TV 32L2400",
        "articleCode": 491189562
    },
    {
        "model": "TOSHIBA 32 HD SMART LED TV 32L5050",
        "articleCode": 491893298
    },
    {
        "model": "TOSHIBA 43 FHD SMART LED TV 43L5050",
        "articleCode": 491893299
    },
    {
        "model": "TOSHIBA 50 UHD SMART LED TV 50U5050",
        "articleCode": 491893301
    },
    {
        "model": "TOSHIBA 55 UHD SMART LED TV 55U5050",
        "articleCode": 491893302
    },
    {
        "model": "TOSHIBA 55 UHD SMART LED TV 55U7980",
        "articleCode": 491893303
    },
    {
        "model": "TOSHIBA 65 UHD SMART LED TV 65U7980",
        "articleCode": 491893304
    },
    {
        "model": "TOSHIBA 65 UHD SMART QLED TV 65U8080",
        "articleCode": 491893305
    },
    {
        "model": "Toshiba HD Smart LED TV 32E35KP",
        "articleCode": 492796719
    },
    {
        "model": "TOSHIBA 32 HD SMART LED TV 32V35KP",
        "articleCode": 492796720
    },
    {
        "model": "TOSHIBA 43 FHD SMART ANDROID LED 43V35KP",
        "articleCode": 492912862
    },
    {
        "model": "Toshiba 43 inches 4K UHD LEDTV 43C350LP",
        "articleCode": 493286008
    },
    {
        "model": "Toshiba 50 inches 4K UHD LEDTV 50C350LP",
        "articleCode": 493286009
    },
    {
        "model": "Toshiba 55 inches 4K UHD LEDTV 55C350LP",
        "articleCode": 493286010
    },
    {
        "model": "Toshiba 55 inches 4K UHD LEDTV 55M550LP",
        "articleCode": 493286011
    },
    {
        "model": "Toshiba 65 inches 4K UHD LEDTV 65M550LP",
        "articleCode": 493286012
    },
    {
        "model": "TOSHIBA 32 HD SMART LED TV 32V35MP",
        "articleCode": 493911430
    },
    {
        "model": "TOSHIBA 43 FHD SMART LED TV 43V35MP",
        "articleCode": 493911431
    },
    {
        "model": "TOSHIBA 43 UHD SMART GOOGLE TV 43C350MP",
        "articleCode": 493911432
    },
    {
        "model": "TOSHIBA 50 UHD SMART GOOGLE TV 50C350MP",
        "articleCode": 493911433
    },
    {
        "model": "TOSHIBA 55 UHD SMART GOOGLE TV 55C350MP",
        "articleCode": 493911434
    },
    {
        "model": "TOSHIBA 43 4K UHD Smart QLED TV 43C450ME",
        "articleCode": 494410516
    },
    {
        "model": "TOSHIBA 50 4K UHD Smart QLEDTV 50C450ME",
        "articleCode": 494410517
    },
    {
        "model": "TOSHIBA 55 4K UHD Smart QLEDTV 55C450ME",
        "articleCode": 494410518
    },
    {
        "model": "TOSHIBA 43 4K UHD TV 43C350ME",
        "articleCode": 494581251
    },
    {
        "model": "TOSHIBA 50 4K UHD TV 50C380RP",
        "articleCode": 494581252
    },
    {
        "model": "TOSHIBA 55 4K UHD TV 55C380RP",
        "articleCode": 494581253
    },
    {
        "model": "TOSHIBA 65 4K UHD TV 65C380RP",
        "articleCode": 494581254
    },
    {
        "model": "TOSHIBA 85 4K UHD TV 85C380RP",
        "articleCode": 494581255
    },
    {
        "model": "TOSHIBA 100 4K QLED UHD TV 100Z570RP",
        "articleCode": 494581256
    },
    {
        "model": "TOSHIBA 75 4K UHD TV 75C350NP",
        "articleCode": 494581257
    },
    {
        "model": "TOSHIBA 32 QLED Smart TV 32E38RP",
        "articleCode": 494581287
    },
    {
        "model": "TOSHIBA 43 QLED FHD TV 43E38RP",
        "articleCode": 494581310
    },
    {
        "model": "Toshiba 43E350RP 4K UHD TV",
        "articleCode": 494581311
    },
    {
        "model": "TOSHIBA 32 HD Smart TV 32V35RP",
        "articleCode": 494623542
    },
    {
        "model": "TOSHIBA 40 FHD Smart TV 40V35RP",
        "articleCode": 494623543
    },
    {
        "model": "Toshiba 58M450RP QLED 4K TV",
        "articleCode": 494623544
    },
    {
        "model": "Toshiba 65M450RP QLED 4K TV",
        "articleCode": 494623545
    },
    {
        "model": "TOSHIBA 65 4K QLED MiniLED TV 65Z770RP",
        "articleCode": 494623799
    },
    {
        "model": "TOSHIBA 75 4K QLED TV 75M450RP",
        "articleCode": 494623800
    },
    {
        "model": "Toshiba 55 4K QLED TV 55Z570RP",
        "articleCode": 494623944
    },
    {
        "model": "Toshiba 75 4K QLED TV 75Z570RP",
        "articleCode": 494623946
    },
    {
        "model": "Toshiba 43 4K QLED TV 43M450RP",
        "articleCode": 494623948
    },
    {
        "model": "Toshiba 50E330RP 4K UHD TV",
        "articleCode": 494749174
    },
    {
        "model": "Toshiba 43E36RP FHD Qled TV",
        "articleCode": 494749272
    },
    {
        "model": "WYZR Personal Cooler 24L-WCP024BLR",
        "articleCode": 494460157
    },
    {
        "model": "WYZR Personal Cooler 42L-WCP042BLR",
        "articleCode": 494460158
    },
    {
        "model": "WYZR Desert Cooler 65L-WCD065DGC",
        "articleCode": 494460159
    },
    {
        "model": "WYZR Desert Cooler 75L-WCD075BKB",
        "articleCode": 494460164
    },
    {
        "model": "WYZR Personal Cooler 18L-WCP018BKB",
        "articleCode": 494460165
    },
    {
        "model": "WYZR Desert Cooler 105L-WCD105DGR",
        "articleCode": 494460175
    },
    {
        "model": "WYZR Commercial Cooler 120L-WCC120GLR",
        "articleCode": 494460176
    },
    {
        "model": "WYZR Comm Cooler 125L-WCC125GBBH",
        "articleCode": 494460180
    },
    {
        "model": "WYZR Desert Cooler 90L-WCD090DGBH",
        "articleCode": 494460182
    },
    {
        "model": "WYZR Personal Cooler 12L-WCP012BGL",
        "articleCode": 494496022
    },
    {
        "model": "WYZR Comm Cooler 85L-WCC085GDR",
        "articleCode": 494496026
    },
    {
        "model": "WYZR Comm Cooler 115L-WCC115GDR",
        "articleCode": 494509893
    },
    {
        "model": "WYZR Desert Cooler 90L-WCD090DGP",
        "articleCode": 494509987
    },
    {
        "model": "WYZR Desert Cooler 55L-WCD055BLB",
        "articleCode": 494606326
    },
    {
        "model": "WYZR Desert Cooler 100L-WCD100BLBH",
        "articleCode": 494606329
    },
];
