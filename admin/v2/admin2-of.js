const _0x153796 = _0x59c5;
(function (_0x2bbf43, _0x114c69) {
    const _0x18108d = _0x59c5, _0x2f7396 = _0x2bbf43();
    while (!![]) {
        try {
            const _0x489798 = parseInt(_0x18108d(0x1b2)) / 0x1 + -parseInt(_0x18108d(0x1fb)) / 0x2 + -parseInt(_0x18108d(0x188)) / 0x3 * (-parseInt(_0x18108d(0x1ab)) / 0x4) + -parseInt(_0x18108d(0x1c9)) / 0x5 * (-parseInt(_0x18108d(0x1b6)) / 0x6) + parseInt(_0x18108d(0x15d)) / 0x7 * (-parseInt(_0x18108d(0x1cf)) / 0x8) + -parseInt(_0x18108d(0x1c4)) / 0x9 * (parseInt(_0x18108d(0x1ff)) / 0xa) + -parseInt(_0x18108d(0x185)) / 0xb * (-parseInt(_0x18108d(0x1cc)) / 0xc);
            if (_0x489798 === _0x114c69)
                break;
            else
                _0x2f7396['push'](_0x2f7396['shift']());
        } catch (_0x4454c9) {
            _0x2f7396['push'](_0x2f7396['shift']());
        }
    }
}(_0x2f2f, 0x7e2b4));
const TOKEN = localStorage['getItem']('accessToken');
!TOKEN && (window['location'][_0x153796(0x16a)] = '/nihongo/unauthorized.html');
const tabs = document[_0x153796(0x181)](_0x153796(0x212)), contents = document[_0x153796(0x181)](_0x153796(0x1c6));
tabs[_0x153796(0x1af)](_0x2aeae0 => {
    const _0x5ad511 = _0x153796;
    _0x2aeae0[_0x5ad511(0x1c3)](_0x5ad511(0x1de), () => {
        const _0x4a1738 = _0x5ad511;
        tabs[_0x4a1738(0x1af)](_0x4247aa => _0x4247aa[_0x4a1738(0x1a2)][_0x4a1738(0x1f1)](_0x4a1738(0x158))), contents[_0x4a1738(0x1af)](_0x12f41b => _0x12f41b[_0x4a1738(0x1a2)][_0x4a1738(0x1f1)](_0x4a1738(0x158))), _0x2aeae0[_0x4a1738(0x1a2)][_0x4a1738(0x1a8)](_0x4a1738(0x158)), document[_0x4a1738(0x15b)](_0x2aeae0[_0x4a1738(0x19c)][_0x4a1738(0x1d7)])[_0x4a1738(0x1a2)][_0x4a1738(0x1a8)](_0x4a1738(0x158));
    });
});
async function loadGlobalConfig() {
    const _0x5ca45f = _0x153796;
    try {
        const _0x5509b5 = await apiRequest(_0x5ca45f(0x179), {
                'method': _0x5ca45f(0x186),
                'headers': { 'Authorization': _0x5ca45f(0x173) + localStorage[_0x5ca45f(0x216)](_0x5ca45f(0x15f)) }
            }), _0x4979a1 = await _0x5509b5['json']();
        document[_0x5ca45f(0x15b)](_0x5ca45f(0x1bf))[_0x5ca45f(0x190)] = !_0x4979a1[_0x5ca45f(0x16e)], document[_0x5ca45f(0x15b)]('toggle-googleAuth')[_0x5ca45f(0x190)] = !_0x4979a1['googleAuthDisabled'], document[_0x5ca45f(0x15b)]('toggle-login')['checked'] = !_0x4979a1['loginDisabled'], document[_0x5ca45f(0x15b)]('toggle-signup')['checked'] = !_0x4979a1[_0x5ca45f(0x21a)], document['getElementById']('toggle-chat')[_0x5ca45f(0x190)] = !_0x4979a1[_0x5ca45f(0x17b)], document[_0x5ca45f(0x15b)](_0x5ca45f(0x1b7))[_0x5ca45f(0x190)] = !_0x4979a1[_0x5ca45f(0x194)];
    } catch (_0x3ec166) {
        console[_0x5ca45f(0x17f)](_0x5ca45f(0x1e4), _0x3ec166);
    }
}
document[_0x153796(0x1c3)]('DOMContentLoaded', loadGlobalConfig);
async function updateGlobalConfig() {
    const _0x522e15 = _0x153796, _0x20fc10 = {
            'siteDisabled': !document[_0x522e15(0x15b)](_0x522e15(0x1bf))[_0x522e15(0x190)],
            'googleAuthDisabled': !document[_0x522e15(0x15b)]('toggle-googleAuth')[_0x522e15(0x190)],
            'loginDisabled': !document[_0x522e15(0x15b)]('toggle-login')[_0x522e15(0x190)],
            'signupDisabled': !document[_0x522e15(0x15b)](_0x522e15(0x20c))['checked'],
            'chatDisabled': !document[_0x522e15(0x15b)](_0x522e15(0x1b4))[_0x522e15(0x190)],
            'uploadDisabled': !document[_0x522e15(0x15b)](_0x522e15(0x1b7))[_0x522e15(0x190)]
        };
    try {
        const _0x4c90f3 = await apiRequest(_0x522e15(0x179), {
                'method': _0x522e15(0x1fa),
                'headers': {
                    'Authorization': _0x522e15(0x173) + localStorage[_0x522e15(0x216)](_0x522e15(0x15f)),
                    'Content-Type': _0x522e15(0x1bb)
                },
                'body': JSON[_0x522e15(0x180)](_0x20fc10)
            }), _0xb90c6e = await _0x4c90f3['json']();
        alert(_0xb90c6e[_0x522e15(0x197)]);
    } catch (_0x504736) {
        console['error'](_0x522e15(0x18e), _0x504736);
    }
}
async function fetchUsers() {
    const _0x25671e = _0x153796, _0x4a22a5 = document[_0x25671e(0x15b)](_0x25671e(0x17a));
    _0x4a22a5['innerHTML'] = _0x25671e(0x1d2);
    try {
        const _0x420bb3 = await apiRequest(_0x25671e(0x18c), { 'headers': { 'Authorization': _0x25671e(0x173) + TOKEN } });
        if (!_0x420bb3['ok']) {
            const _0x1922cf = await _0x420bb3[_0x25671e(0x1a4)]();
            logMessage(_0x1922cf['error'] || _0x25671e(0x209), _0x25671e(0x17f)), _0x4a22a5[_0x25671e(0x1ca)] = _0x25671e(0x192);
            return;
        }
        const _0x8af466 = await _0x420bb3[_0x25671e(0x1a4)]();
        _0x4a22a5[_0x25671e(0x1ca)] = '', _0x8af466[_0x25671e(0x1af)](_0x2f9327 => {
            const _0x96cfda = _0x25671e, _0x2087bf = document['createElement'](_0x96cfda(0x1da));
            _0x2087bf[_0x96cfda(0x1a2)]['add']('user-card'), _0x2087bf[_0x96cfda(0x1ca)] = _0x96cfda(0x1e7) + _0x2f9327[_0x96cfda(0x1d8)] + '</h3>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>User\x20ID:</strong>\x20' + _0x2f9327['_id'] + '</p>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Email:</strong>\x20' + (_0x2f9327['email'] || 'N/A') + '</p>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>IP\x20Address:</strong>\x20' + (_0x2f9327[_0x96cfda(0x1f6)] || _0x96cfda(0x213)) + '</p>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Role:</strong>\x20' + (_0x2f9327[_0x96cfda(0x1ee)] || _0x96cfda(0x1ed)) + _0x96cfda(0x171) + (_0x2f9327[_0x96cfda(0x1a5)] ? new Date(_0x2f9327['createdAt'])[_0x96cfda(0x1db)]() : 'N/A') + '</p>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Online:</strong>\x20' + (_0x2f9327['isOnline'] ? _0x96cfda(0x1df) : 'No') + _0x96cfda(0x1aa) + (new Date(_0x2f9327[_0x96cfda(0x169)])['toLocaleString']() || '♾️') + _0x96cfda(0x215) + (_0x2f9327[_0x96cfda(0x1ce)] ? _0x96cfda(0x189) : _0x96cfda(0x1be)) + '</p>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-actions\x22>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22suspendUser(\x27' + _0x2f9327[_0x96cfda(0x187)] + '\x27)\x22\x20' + (_0x2f9327[_0x96cfda(0x1ce)] ? _0x96cfda(0x1f5) : '') + _0x96cfda(0x176) + _0x2f9327[_0x96cfda(0x187)] + '\x27)\x22\x20' + (!_0x2f9327[_0x96cfda(0x1ce)] ? 'disabled' : '') + '>Activate</button>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deleteUser(\x27' + _0x2f9327[_0x96cfda(0x187)] + _0x96cfda(0x1a6) + _0x2f9327[_0x96cfda(0x187)] + _0x96cfda(0x1c7) + _0x2f9327[_0x96cfda(0x1d8)] + '\x27)\x22>View\x20Logs</button>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22user-profile\x22>\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22' + (_0x2f9327[_0x96cfda(0x1e0)] || '/nihongo/img/user.png') + '\x22\x20alt=\x22dp\x22\x20class=\x22profile-pic\x22\x20loading=\x22lazy\x22\x20onclick=\x22openImageInNewTab(\x27' + (_0x2f9327[_0x96cfda(0x1e0)] || _0x96cfda(0x1e1)) + _0x96cfda(0x195), _0x4a22a5[_0x96cfda(0x1ec)](_0x2087bf);
        });
    } catch (_0xe4c3d4) {
        logMessage(_0x25671e(0x1f4) + _0xe4c3d4, _0x25671e(0x17f)), _0x4a22a5['innerHTML'] = _0x25671e(0x19f);
    }
}
function openImageInNewTab(_0x722ee7) {
    const _0x4b41dd = _0x153796;
    if (_0x722ee7 !== _0x4b41dd(0x1e1)) {
        const _0x34e67f = window[_0x4b41dd(0x207)](_0x722ee7, _0x4b41dd(0x1c2));
        _0x34e67f ? _0x34e67f['focus']() : alert(_0x4b41dd(0x18b));
    }
}
let currentPage = 0x1;
const logsPerPage = 0xa;
async function openLogs(_0x307392, _0x19403c, _0x4c3a63 = 0x1) {
    const _0x5c675b = _0x153796, _0x755a4b = document['getElementById'](_0x5c675b(0x19b)), _0x5e78b4 = document[_0x5c675b(0x15b)](_0x5c675b(0x193)), _0x31e870 = document[_0x5c675b(0x15b)]('pagination-controls');
    _0x5e78b4[_0x5c675b(0x1e6)] = _0x5c675b(0x1fe) + _0x19403c, _0x755a4b[_0x5c675b(0x1ca)] = _0x5c675b(0x1b8), document[_0x5c675b(0x15b)]('log-modal')[_0x5c675b(0x20b)][_0x5c675b(0x1ac)] = _0x5c675b(0x1ef), currentPage = _0x4c3a63;
    try {
        const _0x1509e4 = await apiRequest(_0x5c675b(0x16f) + _0x307392 + '?page=' + _0x4c3a63 + '&limit=' + logsPerPage, { 'headers': { 'Authorization': _0x5c675b(0x173) + TOKEN } });
        if (!_0x1509e4['ok']) {
            _0x755a4b[_0x5c675b(0x1ca)] = _0x5c675b(0x1cd);
            return;
        }
        const {
            logs: _0x34166a,
            totalLogs: _0x92d1d9
        } = await _0x1509e4['json']();
        if (_0x34166a['length'] === 0x0) {
            _0x755a4b['innerHTML'] = _0x5c675b(0x15c), _0x31e870[_0x5c675b(0x1ca)] = '';
            return;
        }
        console[_0x5c675b(0x1f7)](_0x34166a), _0x755a4b['innerHTML'] = _0x34166a[_0x5c675b(0x1b9)](_0x1c035c => _0x5c675b(0x1d5) + _0x1c035c[_0x5c675b(0x165)] + _0x5c675b(0x167) + (_0x1c035c[_0x5c675b(0x1b5)] || _0x5c675b(0x213)) + _0x5c675b(0x201) + new Date(_0x1c035c[_0x5c675b(0x19e)])[_0x5c675b(0x1db)]() + _0x5c675b(0x1d6) + _0x1c035c['ip'] + _0x5c675b(0x15e) + _0x1c035c[_0x5c675b(0x187)] + _0x5c675b(0x1c7) + _0x307392 + _0x5c675b(0x1c7) + _0x19403c + _0x5c675b(0x177) + _0x4c3a63 + _0x5c675b(0x1a3))[_0x5c675b(0x203)]('');
        const _0x3daabc = Math[_0x5c675b(0x160)](_0x92d1d9 / logsPerPage);
        _0x31e870['innerHTML'] = _0x5c675b(0x217) + _0x307392 + _0x5c675b(0x1c7) + _0x19403c + '\x27,\x20' + (_0x4c3a63 - 0x1) + _0x5c675b(0x1ad) + (_0x4c3a63 === 0x1 ? 'disabled' : '') + _0x5c675b(0x175) + _0x4c3a63 + _0x5c675b(0x208) + _0x3daabc + _0x5c675b(0x1fc) + _0x307392 + _0x5c675b(0x1c7) + _0x19403c + '\x27,\x20' + (_0x4c3a63 + 0x1) + _0x5c675b(0x1ad) + (_0x4c3a63 >= _0x3daabc ? _0x5c675b(0x1f5) : '') + _0x5c675b(0x211);
    } catch (_0x5b695d) {
        _0x755a4b[_0x5c675b(0x1ca)] = _0x5c675b(0x1c8);
    }
}
async function deleteLog(_0x4e7afb, _0x193b15, _0x35d1f7, _0x3df14c) {
    const _0x3cd156 = _0x153796;
    if (!confirm('Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20log?'))
        return;
    try {
        const _0x57069a = await apiRequest('/admin/logs/' + _0x4e7afb, {
            'method': _0x3cd156(0x168),
            'headers': { 'Authorization': _0x3cd156(0x173) + TOKEN }
        });
        if (!_0x57069a['ok']) {
            alert('Failed\x20to\x20delete\x20log');
            return;
        }
        alert(_0x3cd156(0x172)), openLogs(_0x193b15, _0x35d1f7, _0x3df14c);
    } catch (_0x1c0610) {
        alert(_0x3cd156(0x1cb));
    }
}
function closeLogs() {
    const _0x1dd108 = _0x153796;
    document[_0x1dd108(0x15b)](_0x1dd108(0x1b1))[_0x1dd108(0x20b)]['display'] = _0x1dd108(0x204);
}
function _0x2f2f() {
    const _0x1af5c4 = [
        'ChjLDMvUDerLzMf1Bhq',
        'pK5LEhqG4OAspc9IDxr0B24+cIaGicaGicaG',
        'lNrHyI1IDxr0B24',
        'tI9b',
        'C2nYB2XSsgvPz2H0',
        'pc9WpGOjcqKGicaGicaGicaGica8Cd48C3rYB25NpLn0yxr1CZO8l3n0CM9UzZ4G',
        'z2v0sxrLBq',
        'cIaGicaGicaGicaGidXIDxr0B24GB25JBgLJAZ0IB3bLBKXVz3mOjW',
        'phrYpJX0zcbJB2XZCgfUpsi2iJ5mB2fKAw5NlI4Upc90zd48l3rYpG',
        'Bg9NlwXPC3qY',
        'C2LNBNvWrgLZywjSzwq',
        'iIbHBhq9iKLJB24IignSyxnZpsjUB3rPzMLJyxrPB24TAwnVBIi+',
        'ywn0AxzL',
        'rMfPBgvKihrVigrLBgv0zsbZDwjZy3jPChrPB24',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iM5VDgLMAwnHDgLVBI1Zzw5KzxiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphn0CM9UzZ5uBZO8l3n0CM9UzZ4G',
        'z2v0rwXLBwvUDej5swq',
        'pha+tM8GBg9NCYbHDMfPBgfIBgu8l3a+',
        'n3DxzvnrDW',
        'pc9WpGOGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IzgvSzxrLlwXVzY1IDg4Iig9Uy2XPy2S9iMrLBgv0zuXVzYGN',
        'ywnJzxnZvg9Rzw4',
        'y2vPBa',
        'C3rHDhvZ',
        'jYK7',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVihn1C3bLBMqGDgHPCYb1C2vYpW',
        'DMfSDwu',
        'ywn0Aw9U',
        'qxjLihLVDsbZDxjLpW',
        'pc9WpGOGicaGicaGicaGicaGicaGpha+phn0CM9UzZ5ezxrHAwXZoJWVC3rYB25NpIa',
        'revmrvrf',
        'BgfZDefJDgL2zq',
        'AhjLzG',
        'l2fKBwLUl3n1C3bLBMqV',
        'rMfPBgvKihrVigzLDgnOihn1yNnJCMLWDgLVBNm',
        'C3vJy2vZCW',
        'C2L0zurPC2fIBgvK',
        'l2fKBwLUl2XVz3mV',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZihvZzxi/',
        'pc9WpGOjcqKGicaGicaGicaGica8Cd48C3rYB25NpKPVAw5LzcbpBJO8l3n0CM9UzZ4G',
        'tg9NigrLBgv0zwqGC3vJy2vZC2z1BgX5',
        'qMvHCMvYia',
        'rMfPBgvKihrVihnLBMqGBM90AwzPy2f0Aw9U',
        'pUkgKcbqCMv2Aw91CZWVyNv0Dg9UpGOGicaGicaGicaGica8C3bHBJ5qywDLia',
        'pLn1C3bLBMq8l2j1DhrVBJ4kcqKjicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iMfJDc1IDg4Iig9Uy2XPy2S9iMfJDgL2yxrLvxnLCIGN',
        'jYWG',
        'pgLTzYbZCMm9iG',
        'l2fKBwLUl2DSB2jHBc1JB25MAwC',
        'DxnLCI1SAxn0',
        'y2HHDerPC2fIBgvK',
        'Bg9Nia',
        'l2fKBwLUl3n1yNnJCMLWDgLVBNmV',
        'tM90AwzPy2f0Aw9UihnLBNq',
        'zxjYB3i',
        'C3rYAw5NAwz5',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'zMXLEa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9Uig9Uy2XPy2S9iMrLBgv0zu5VDgLMAwnHDgLVBIGN',
        'BM90AwzPy2f0Aw9UlwXPC3q',
        'mJG2wxD1svrn',
        'r0vu',
        'x2LK',
        'm3zbu3jvvG',
        'u3vZCgvUzgvK',
        'AwnVBG',
        'vw5HyMXLihrVig9Wzw4GDgHLigLTywDLlIbqBgvHC2uGy2HLy2SGEw91CIbICM93C2vYihnLDhrPBMDZlG',
        'l2fKBwLUl3vZzxjZ',
        'jYKIpKrLBgv0ztWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpc90zd4kicaGicaGicaGicaGpc90CJ4kicaGicaGica',
        'rMfPBgvKihrVihvWzgf0zsbNBg9IywWGy29UzMLNoG',
        'pha+tg9HzgLUzY4UlJWVCd4',
        'y2HLy2TLza',
        'l2fKBwLUl3n1yNnJCMLWDgLVBNm',
        'pha+rxjYB3iGBg9HzgLUzYb1C2vYCZWVCd4',
        'Bg9Nlw1VzgfSlxrPDgXL',
        'DxbSB2fKrgLZywjSzwq',
        'jYKIpGOjcqKGicaGicaGidWVzgL2pGOjcqK',
        'phnWyw4+rMfPBhvYzsbszwfZB246ia',
        'BwvZC2fNzq',
        'C2nYB2XSvg9W',
        'pc9OmZ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iM5VDgLMAwnHDgLVBI1KyxrLiJ4',
        'y2XHC3noyw1L',
        'Bg9NlwXPC3q',
        'zgf0yxnLDa',
        'rxjYB3iGywn0AxzHDgLUzYb1C2vYoIa',
        'DgLTzxn0yw1W',
        'pha+rxjYB3iGBg9HzgLUzYb1C2vYCY4GugXLyxnLihrYEsbHz2fPBIbSyxrLCI48l3a+',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigfJDgL2yxrLihrOAxmGDxnLCJ8',
        'rxjYB3iGzgvSzxrPBMCGBM90AwzPy2f0Aw9UoIa',
        'y2XHC3nmAxn0',
        'ksi+rgvSzxrLpc9IDxr0B24+cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGia',
        'ANnVBG',
        'y3jLyxrLzef0',
        'jYKIpKrLBgv0ztWVyNv0Dg9UpGOjcqKGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IBg9Nlwj0BIiGB25JBgLJAZ0IB3bLBKXVz3mOjW',
        'l2fKBwLUl2fJDgL2yxrLlW',
        'ywrK',
        'rxjYB3iGC2vUzgLUzYbUB3rPzMLJyxrPB246ia',
        'pc9WpGOjcqKGicaGicaGicaGica8Cd48C3rYB25NpKXHC3qGqwn0AxzLoJWVC3rYB25NpIa',
        'mtmXmZa1nLPNq3HVuW',
        'zgLZCgXHEq',
        'ksiG',
        'ANvZDgLMEunVBNrLBNq',
        'zM9YrwfJAa',
        'phrYpJX0zcbJB2XZCgfUpsiZiJ5mB2fKAw5NlI4Upc90zd48l3rYpG',
        'Bg9Nlw1VzgfS',
        'mZKWnxj0C015AW',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iM5VDgLMAwnHDgLVBI1IB2r5iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpha+',
        'Dg9Nz2XLlwnOyxq',
        'zgv0ywLSCW',
        'mZm1odjsu3LtAxi',
        'Dg9Nz2XLlxvWBg9Hza',
        'pha+tg9HzgLUzYbSB2DZlI4Upc9WpG',
        'BwfW',
        'yMfJA2DYB3vUzc1PBwfNztOGDxjSkcC',
        'yxbWBgLJyxrPB24VANnVBG',
        'rMfPBgvKihrVigzLDgnOig5VDgLMAwnHDgLVBNm',
        'rMfPBgvKihrVigzLDgnOigXVz3m',
        'qwn0AxzL',
        'Dg9Nz2XLlxnPDgu',
        'rxjYB3iGzgvSzxrPBMCGDxnLCJOG',
        'zMfPBhvYzxjLyxnVBG',
        'x2jSyw5R',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'mtiWnNz3Bw9Jta',
        'pc9ZCgfUpG',
        'lNrHyI1JB250zw50',
        'jYWGjW',
        'pha+rxjYB3iGBg9HzgLUzYbSB2DZpc9WpG',
        'nZi1thDwwfHv',
        'Aw5Uzxjive1m',
        'rxjYB3iGzgvSzxrPBMCGBg9N',
        'nJKZnZiWwNf1EvPA',
        'pha+rxjYB3iGzMv0y2HPBMCGBg9NCZWVCd4',
        'AxntDxnWzw5Kzwq',
        'nJKXnZiZmMHYtvnTBa',
        'D3jHCa',
        'pc9WpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iM5VDgLMAwnHDgLVBI1MB290zxiIpGOGicaGicaGicaGicaGicaGicaGicaGica',
        'pha+tg9HzgLUzYb1C2vYCY4UlJWVCd4',
        'iJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjUB3rPzMLJyxrPB24TAgvHzgvYiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgGZpG',
        'tM90AwzPy2f0Aw9UigrLBgv0zwq',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iMXVzY1PDgvTiJ4kicaGicaGicaGicaGicaGidXWpJXZDhjVBMC+qwn0Aw9UoJWVC3rYB25NpIa',
        'pc9WpGOGicaGicaGicaGicaGicaGpha+phn0CM9UzZ5judO8l3n0CM9UzZ4G',
        'DgfI',
        'DxnLCM5HBwu',
        'C3vIC2nYAxb0Aw9UlwXPC3q',
        'zgL2',
        'Dg9mB2nHBgvtDhjPBMC',
        'rxjYB3iGzgvSzxrPBMCGC3vIC2nYAxb0Aw9UoIa',
        'phrYpJX0zcbJB2XZCgfUpsi2iJ5fCNjVCIbSB2fKAw5NigXVz3m8l3rKpJWVDhi+',
        'y2XPy2S',
        'wwvZ',
        'ChjVzMLSzvbPy3r1CMu',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'cIaGicaGicaGicaGidX0CJ4kicaGicaGicaGicaGicaGidX0zd4',
        'zMXLEfDYyxa',
        'rMfPBgvKihrVigXVywqGz2XVyMfSignVBMzPzZO',
        'pc90zd4kicaGicaGicaGicaGicaGidX0zd4',
        'Dgv4DenVBNrLBNq',
        'cGKjcsaGicaGicaGpgrPDIbJBgfZCZ0IDxnLCI1KzxrHAwXZiJ4kcqKjicaGicaGicaGicaGpgGZpG',
        'rxjYB3iGBg9HzgLUzYbUB3rPzMLJyxrPB25ZoIa',
        'pc90zd4kicaGicaGicaGicaGicaGidX0zd4kicaGicaGicaGicaGicaGicaGica8yNv0Dg9Uig9Uy2XPy2S9iMrLBgv0zvn1yNnJCMLWDgLVBIGN',
        'DgL0Bgu',
        'vw5RBM93BG',
        'yxbWzw5Kq2HPBgq',
        'DxnLCG',
        'CM9Szq',
        'yMXVy2S',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'CMvTB3zL',
        'mhb4',
        'jYKIpKrLBgv0ztWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'rxjYB3iGBg9HzgLUzYb1C2vYCZOG',
        'zgLZywjSzwq',
        'y3vYCMvUDeLq',
        'Bg9N',
        'l2fKBwLUl3vZzxjZlW',
        'pha+rxjYB3iGBg9HzgLUzYbUB3rPzMLJyxrPB25Zpc9WpG',
        'ue9tva',
        'mtuWnJy3nM1yrgH0BG',
        'pc9ZCgfUpGOGicaGicaGicaGica8yNv0Dg9Uig9Uy2XPy2S9iM9Wzw5mB2DZkcC',
        'l2fKBwLUl25VDgLMAwnHDgLVBNm',
        'tg9NCYbMB3iG',
        'mZGYmtbhC0ftyKO',
        'y2vUDgvY',
        'pc9WpGOGicaGicaGicaGicaGicaGpha+phn0CM9UzZ5eyxrLoJWVC3rYB25NpIa',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjUB3rPzMLJyxrPB24Ty2fYzciGC3r5Bgu9iG',
        'AM9PBG',
        'BM9Uzq',
        'rxjYB3iGC3vZCgvUzgLUzYb1C2vYoIa',
        'BM90AwzPy2f0Aw9UlwzVCM0',
        'B3bLBG',
        'ig9Mia',
        'rMfPBgvKihrVigzLDgnOihvZzxjZ',
        'Aw1Hz2u',
        'C3r5Bgu',
        'Dg9Nz2XLlxnPz251Ca',
        'ww91CIbZzxnZAw9UigHHCYbLEhbPCMvKlIbqBgvHC2uGBg9NigLUigfNywLUlG',
        'C3vIBwL0',
        'phrYpJX0zcbJB2XZCgfUpsiZiJ5fCNjVCIbSB2fKAw5Nihn1yNnJCMLWDgLVBNm8l3rKpJWVDhi+'
    ];
    _0x2f2f = function () {
        return _0x1af5c4;
    };
    return _0x2f2f();
}
async function suspendUser(_0x5ce92b) {
    const _0x212f42 = _0x153796;
    if (!confirm(_0x212f42(0x163)))
        return;
    try {
        const _0x1cb410 = await apiRequest(_0x212f42(0x16b) + _0x5ce92b, {
            'method': _0x212f42(0x1fa),
            'headers': { 'Authorization': _0x212f42(0x173) + TOKEN }
        });
        if (_0x1cb410[_0x212f42(0x161)] === 0x191) {
            logMessage(_0x212f42(0x20d), _0x212f42(0x17f)), logoutUser();
            return;
        }
        const _0x282b77 = await _0x1cb410[_0x212f42(0x1a4)]();
        logMessage(_0x282b77['message'] || _0x282b77['error'], _0x1cb410['ok'] ? _0x212f42(0x16d) : _0x212f42(0x17f)), fetchUsers();
    } catch (_0x5ed19e) {
        logMessage(_0x212f42(0x205) + _0x5ed19e, _0x212f42(0x17f));
    }
}
async function activateUser(_0x5eb677) {
    const _0x496769 = _0x153796;
    if (!confirm(_0x496769(0x1a0)))
        return;
    try {
        const _0x315c75 = await apiRequest(_0x496769(0x1a7) + _0x5eb677, {
            'method': 'POST',
            'headers': { 'Authorization': _0x496769(0x173) + TOKEN }
        });
        if (_0x315c75[_0x496769(0x161)] === 0x191) {
            logMessage(_0x496769(0x20d), _0x496769(0x17f)), logoutUser();
            return;
        }
        const _0x281f0a = await _0x315c75['json']();
        logMessage(_0x281f0a[_0x496769(0x197)] || _0x281f0a['error'], _0x315c75['ok'] ? _0x496769(0x16d) : _0x496769(0x17f)), fetchUsers();
    } catch (_0xe8b53b) {
        logMessage(_0x496769(0x19d) + _0xe8b53b, _0x496769(0x17f));
    }
}
function _0x59c5(_0x23e1dc, _0xaf12eb) {
    const _0x2f2f6a = _0x2f2f();
    return _0x59c5 = function (_0x59c5da, _0x592622) {
        _0x59c5da = _0x59c5da - 0x158;
        let _0x20447d = _0x2f2f6a[_0x59c5da];
        if (_0x59c5['BDLqYH'] === undefined) {
            var _0x47f125 = function (_0x2aeae0) {
                const _0x4247aa = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x12f41b = '', _0x5509b5 = '';
                for (let _0x4979a1 = 0x0, _0x3ec166, _0x20fc10, _0x4c90f3 = 0x0; _0x20fc10 = _0x2aeae0['charAt'](_0x4c90f3++); ~_0x20fc10 && (_0x3ec166 = _0x4979a1 % 0x4 ? _0x3ec166 * 0x40 + _0x20fc10 : _0x20fc10, _0x4979a1++ % 0x4) ? _0x12f41b += String['fromCharCode'](0xff & _0x3ec166 >> (-0x2 * _0x4979a1 & 0x6)) : 0x0) {
                    _0x20fc10 = _0x4247aa['indexOf'](_0x20fc10);
                }
                for (let _0xb90c6e = 0x0, _0x504736 = _0x12f41b['length']; _0xb90c6e < _0x504736; _0xb90c6e++) {
                    _0x5509b5 += '%' + ('00' + _0x12f41b['charCodeAt'](_0xb90c6e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x5509b5);
            };
            _0x59c5['Fhsfyu'] = _0x47f125, _0x23e1dc = arguments, _0x59c5['BDLqYH'] = !![];
        }
        const _0x3fad38 = _0x2f2f6a[0x0], _0x3ba811 = _0x59c5da + _0x3fad38, _0x350669 = _0x23e1dc[_0x3ba811];
        return !_0x350669 ? (_0x20447d = _0x59c5['Fhsfyu'](_0x20447d), _0x23e1dc[_0x3ba811] = _0x20447d) : _0x20447d = _0x350669, _0x20447d;
    }, _0x59c5(_0x23e1dc, _0xaf12eb);
}
async function deleteUser(_0x8ee70e) {
    const _0xe42530 = _0x153796;
    if (!confirm(_0xe42530(0x170)))
        return;
    try {
        const _0x4612ef = await apiRequest(_0xe42530(0x1f8) + _0x8ee70e, {
            'method': 'DELETE',
            'headers': { 'Authorization': _0xe42530(0x173) + TOKEN }
        });
        if (_0x4612ef[_0xe42530(0x161)] === 0x191) {
            logMessage(_0xe42530(0x20d), _0xe42530(0x17f));
            return;
        }
        const _0x4e7724 = await _0x4612ef[_0xe42530(0x1a4)]();
        logMessage(_0x4e7724[_0xe42530(0x197)] || _0x4e7724['error'], _0x4612ef['ok'] ? 'success' : 'error'), fetchUsers();
    } catch (_0x4cfc74) {
        logMessage(_0xe42530(0x1c0) + _0x4cfc74, 'error');
    }
}
async function fetchSubscriptions() {
    const _0x5b49d1 = _0x153796, _0x4dd343 = document[_0x5b49d1(0x15b)](_0x5b49d1(0x1d9));
    _0x4dd343[_0x5b49d1(0x1ca)] = _0x5b49d1(0x1b0);
    try {
        const _0x485a93 = await apiRequest(_0x5b49d1(0x191), { 'headers': { 'Authorization': _0x5b49d1(0x173) + TOKEN } });
        if (!_0x485a93['ok']) {
            const _0x2681b1 = await _0x485a93['json']();
            logMessage(_0x2681b1[_0x5b49d1(0x17f)] || _0x5b49d1(0x16c), _0x5b49d1(0x17f));
            return;
        }
        const _0x10bb37 = await _0x485a93[_0x5b49d1(0x1a4)]();
        _0x4dd343[_0x5b49d1(0x1ca)] = _0x10bb37[_0x5b49d1(0x1b9)](_0xcb9c10 => _0x5b49d1(0x1e2) + _0xcb9c10['userId'] + _0x5b49d1(0x1e5) + _0xcb9c10['endpoint'] + _0x5b49d1(0x1e9) + _0xcb9c10[_0x5b49d1(0x187)] + _0x5b49d1(0x18d))[_0x5b49d1(0x203)]('');
    } catch (_0x53994a) {
        logMessage('Error\x20loading\x20subscriptions:\x20' + _0x53994a, _0x5b49d1(0x17f)), _0x4dd343[_0x5b49d1(0x1ca)] = _0x5b49d1(0x20f);
    }
}
async function deleteSubscription(_0x5750c2) {
    const _0x43ac8d = _0x153796;
    if (!confirm(_0x43ac8d(0x166)))
        return;
    try {
        const _0x59ede4 = await apiRequest(_0x43ac8d(0x17d) + _0x5750c2, {
            'method': _0x43ac8d(0x168),
            'headers': { 'Authorization': 'Bearer\x20' + TOKEN }
        });
        if (!_0x59ede4['ok']) {
            const _0x2a652c = await _0x59ede4[_0x43ac8d(0x1a4)]();
            logMessage(_0x2a652c['error'] || _0x43ac8d(0x159), _0x43ac8d(0x17f));
            return;
        }
        logMessage('Subscription\x20deleted', _0x43ac8d(0x16d)), fetchSubscriptions();
    } catch (_0x81846) {
        logMessage(_0x43ac8d(0x1dc) + _0x81846, _0x43ac8d(0x17f));
    }
}
document['getElementById'](_0x153796(0x206))[_0x153796(0x1c3)](_0x153796(0x20e), async _0x9a1b5d => {
    const _0x145778 = _0x153796;
    _0x9a1b5d[_0x145778(0x210)]();
    const _0x1a60a0 = document['getElementById'](_0x145778(0x1ea))[_0x145778(0x164)], _0x1f1873 = document[_0x145778(0x15b)](_0x145778(0x197))[_0x145778(0x164)], _0xb20a1b = document['getElementById'](_0x145778(0x18a))[_0x145778(0x164)] || null, _0x154b0c = document[_0x145778(0x15b)](_0x145778(0x20a))[_0x145778(0x164)] || null, _0x490477 = document['getElementById'](_0x145778(0x1d8))['value'] || null;
    try {
        const _0x18b0c8 = await apiRequest('/admin/notify', {
            'method': _0x145778(0x1fa),
            'headers': {
                'Content-Type': _0x145778(0x1bb),
                'Authorization': _0x145778(0x173) + TOKEN
            },
            'body': JSON[_0x145778(0x180)]({
                'title': _0x1a60a0,
                'message': _0x1f1873,
                'icon': _0xb20a1b,
                'image': _0x154b0c,
                'username': _0x490477
            })
        });
        if (!_0x18b0c8['ok']) {
            const _0x3a3dc4 = await _0x18b0c8[_0x145778(0x1a4)]();
            logMessage(_0x3a3dc4[_0x145778(0x17f)] || _0x145778(0x174), 'error');
            return;
        }
        logMessage(_0x145778(0x17e), 'success');
    } catch (_0x5d9ab4) {
        logMessage(_0x145778(0x1a9) + _0x5d9ab4, _0x145778(0x17f));
    }
});
async function fetchNotifications() {
    const _0x35f9d8 = _0x153796, _0xde87a8 = document['getElementById'](_0x35f9d8(0x184));
    _0xde87a8['style'][_0x35f9d8(0x1ac)] = _0x35f9d8(0x182), _0xde87a8['style'][_0x35f9d8(0x1e3)] = _0x35f9d8(0x1d0), _0xde87a8[_0x35f9d8(0x20b)]['gap'] = _0x35f9d8(0x1f2), _0xde87a8[_0x35f9d8(0x20b)][_0x35f9d8(0x1ae)] = _0x35f9d8(0x200), _0xde87a8[_0x35f9d8(0x1ca)] = _0x35f9d8(0x18f);
    try {
        const _0x44c25b = await apiRequest(_0x35f9d8(0x1fd), { 'headers': { 'Authorization': _0x35f9d8(0x173) + TOKEN } });
        if (!_0x44c25b['ok']) {
            const _0x2b434a = await _0x44c25b['json']();
            logMessage(_0x2b434a['error'] || _0x35f9d8(0x1bc), 'error');
            return;
        }
        const _0x1d3d03 = await _0x44c25b[_0x35f9d8(0x1a4)]();
        _0xde87a8[_0x35f9d8(0x1ca)] = _0x1d3d03['map'](_0xd5b64e => {
            const _0x37219b = _0x35f9d8, _0x1f5024 = _0xd5b64e[_0x37219b(0x20a)] ? _0x37219b(0x1ba) + _0xd5b64e['image'] + _0x37219b(0x162) : 'background:\x20linear-gradient(45deg,\x20#ff7e5f,\x20#feb47b);';
            return _0x37219b(0x202) + _0x1f5024 + _0x37219b(0x1d3) + _0xd5b64e['title'] + _0x37219b(0x199) + new Date(_0xd5b64e['sentAt'])[_0x37219b(0x1db)]() + _0x37219b(0x1b3) + _0xd5b64e[_0x37219b(0x197)] + _0x37219b(0x1d1) + (_0xd5b64e['icon'] ? _0x37219b(0x178) + _0xd5b64e[_0x37219b(0x18a)] + _0x37219b(0x21b) : '') + _0x37219b(0x15a) + (_0xd5b64e[_0x37219b(0x1d8)] || _0x37219b(0x1eb)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22notification-status\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Status:</strong>\x20' + _0xd5b64e['status'] + _0x37219b(0x1f0) + (_0xd5b64e['failurereason'] ? _0x37219b(0x196) + _0xd5b64e[_0x37219b(0x1c1)] + _0x37219b(0x1c5) : '') + _0x37219b(0x183) + _0xd5b64e['_id'] + _0x37219b(0x1f3);
        })[_0x35f9d8(0x203)]('');
    } catch (_0x51855a) {
        logMessage(_0x35f9d8(0x1e8) + _0x51855a, _0x35f9d8(0x17f)), _0xde87a8['innerHTML'] = _0x35f9d8(0x1f9);
    }
}
async function deleteNotification(_0x2064c5) {
    const _0x7d5240 = _0x153796;
    if (!confirm('Are\x20you\x20sure?'))
        return;
    try {
        const _0x11ce9e = await apiRequest('/admin/notifications/' + _0x2064c5, {
            'method': _0x7d5240(0x168),
            'headers': { 'Authorization': _0x7d5240(0x173) + TOKEN }
        });
        if (!_0x11ce9e['ok']) {
            const _0x516272 = await _0x11ce9e[_0x7d5240(0x1a4)]();
            logMessage(_0x516272['error'] || 'Failed\x20to\x20delete\x20notification', _0x7d5240(0x17f));
            return;
        }
        logMessage(_0x7d5240(0x1d4), _0x7d5240(0x16d)), fetchNotifications();
    } catch (_0x523e1a) {
        logMessage(_0x7d5240(0x1a1) + _0x523e1a, _0x7d5240(0x17f));
    }
}
async function fetchLogs() {
    const _0x502b79 = _0x153796, _0x1a0ab6 = document['getElementById'](_0x502b79(0x219));
    _0x1a0ab6[_0x502b79(0x1ca)] = _0x502b79(0x218);
    try {
        const _0xc94691 = await apiRequest('/admin/logs', { 'headers': { 'Authorization': 'Bearer\x20' + TOKEN } });
        if (!_0xc94691['ok']) {
            const _0x92e7d = await _0xc94691[_0x502b79(0x1a4)]();
            logMessage(_0x92e7d[_0x502b79(0x17f)] || _0x502b79(0x1bd), 'error');
            return;
        }
        const _0x3ecd66 = await _0xc94691['json']();
        _0x1a0ab6[_0x502b79(0x1ca)] = _0x3ecd66['map'](_0x58886a => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x58886a['user'] + _0x502b79(0x1e5) + _0x58886a['username'] + _0x502b79(0x1e5) + _0x58886a[_0x502b79(0x165)] + _0x502b79(0x1e5) + _0x58886a['details'] + _0x502b79(0x1e5) + _0x58886a['ip'] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + new Date(_0x58886a[_0x502b79(0x19e)])['toLocaleString']() + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20')['join']('');
    } catch (_0x435a5d) {
        logMessage('Error\x20loading\x20logs:\x20' + _0x435a5d, _0x502b79(0x17f)), _0x1a0ab6[_0x502b79(0x1ca)] = _0x502b79(0x1dd);
    }
}
function logMessage(_0x3200e8, _0x3f9a28 = _0x153796(0x1f7)) {
    const _0x4c54a9 = _0x153796, _0xbc302 = document[_0x4c54a9(0x15b)]('console'), _0x32eb6c = document['createElement']('div');
    _0x32eb6c[_0x4c54a9(0x19a)] = _0x4c54a9(0x17c) + _0x3f9a28, _0x32eb6c[_0x4c54a9(0x1e6)] = _0x3200e8, _0xbc302[_0x4c54a9(0x1ec)](_0x32eb6c), _0xbc302[_0x4c54a9(0x198)] = _0xbc302[_0x4c54a9(0x214)];
}