const _0x3a0c80 = _0x310b;
(function (_0x268156, _0x38d55f) {
    const _0x461a40 = _0x310b, _0x2b9b63 = _0x268156();
    while (!![]) {
        try {
            const _0x4e306f = parseInt(_0x461a40(0x17b)) / 0x1 * (parseInt(_0x461a40(0x197)) / 0x2) + -parseInt(_0x461a40(0x101)) / 0x3 * (-parseInt(_0x461a40(0x1e6)) / 0x4) + parseInt(_0x461a40(0x1ad)) / 0x5 * (-parseInt(_0x461a40(0xd1)) / 0x6) + -parseInt(_0x461a40(0xf0)) / 0x7 + -parseInt(_0x461a40(0x1f0)) / 0x8 * (-parseInt(_0x461a40(0xb6)) / 0x9) + -parseInt(_0x461a40(0x118)) / 0xa + -parseInt(_0x461a40(0x141)) / 0xb;
            if (_0x4e306f === _0x38d55f)
                break;
            else
                _0x2b9b63['push'](_0x2b9b63['shift']());
        } catch (_0x1d17cb) {
            _0x2b9b63['push'](_0x2b9b63['shift']());
        }
    }
}(_0x4041, 0x90e3c), history[_0x3a0c80(0x1c0)](null, null, location[_0x3a0c80(0x12a)]), window[_0x3a0c80(0xee)] = function () {
    const _0x3e03be = _0x3a0c80;
    history['pushState'](null, null, location[_0x3e03be(0x12a)]);
});
let currentRoomId = null, currentRoomName = null, tokenexpired;
const token = getJWTToken();
if (token) {
    const decodedToken = JSON[_0x3a0c80(0x18b)](atob(token[_0x3a0c80(0xb0)]('.')[0x1])), expiryTime = decodedToken[_0x3a0c80(0x172)] * 0x3e8;
    startCountdown(expiryTime);
} else
    console[_0x3a0c80(0xd8)](_0x3a0c80(0x1b1));
function _0x310b(_0x2e4333, _0x281479) {
    const _0x40417b = _0x4041();
    return _0x310b = function (_0x310b72, _0x511a2f) {
        _0x310b72 = _0x310b72 - 0xa7;
        let _0x9f9c51 = _0x40417b[_0x310b72];
        if (_0x310b['scuXco'] === undefined) {
            var _0x2586f7 = function (_0x28a45b) {
                const _0x50c027 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x1f9b8e = '', _0xab9ed4 = '';
                for (let _0xb42e0e = 0x0, _0x3b728f, _0x1ebb17, _0x27a52d = 0x0; _0x1ebb17 = _0x28a45b['charAt'](_0x27a52d++); ~_0x1ebb17 && (_0x3b728f = _0xb42e0e % 0x4 ? _0x3b728f * 0x40 + _0x1ebb17 : _0x1ebb17, _0xb42e0e++ % 0x4) ? _0x1f9b8e += String['fromCharCode'](0xff & _0x3b728f >> (-0x2 * _0xb42e0e & 0x6)) : 0x0) {
                    _0x1ebb17 = _0x50c027['indexOf'](_0x1ebb17);
                }
                for (let _0x3759ad = 0x0, _0x5c149f = _0x1f9b8e['length']; _0x3759ad < _0x5c149f; _0x3759ad++) {
                    _0xab9ed4 += '%' + ('00' + _0x1f9b8e['charCodeAt'](_0x3759ad)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xab9ed4);
            };
            _0x310b['SICJDY'] = _0x2586f7, _0x2e4333 = arguments, _0x310b['scuXco'] = !![];
        }
        const _0x29c93e = _0x40417b[0x0], _0x54c51e = _0x310b72 + _0x29c93e, _0x2e9f3a = _0x2e4333[_0x54c51e];
        return !_0x2e9f3a ? (_0x9f9c51 = _0x310b['SICJDY'](_0x9f9c51), _0x2e4333[_0x54c51e] = _0x9f9c51) : _0x9f9c51 = _0x2e9f3a, _0x9f9c51;
    }, _0x310b(_0x2e4333, _0x281479);
}
function startCountdown(_0x28a45b) {
    const _0x5aeeb3 = _0x3a0c80, _0x50c027 = document[_0x5aeeb3(0xb2)](_0x5aeeb3(0x15b)), _0x1f9b8e = setInterval(() => {
            const _0x408012 = _0x5aeeb3, _0xab9ed4 = Date[_0x408012(0xbe)](), _0xb42e0e = _0x28a45b - _0xab9ed4;
            if (_0xb42e0e <= 0x0)
                clearInterval(_0x1f9b8e), _0x50c027['textContent'] = _0x408012(0x15d), _0x50c027[_0x408012(0x100)][_0x408012(0x1a6)](_0x408012(0x171)), _0x50c027[_0x408012(0x100)][_0x408012(0xcb)]('session-expired'), showPopupMessage(_0x408012(0xc7)), tokenexpired = !![];
            else {
                const _0x3b728f = Math[_0x408012(0x17a)](_0xb42e0e / 0xea60), _0x1ebb17 = Math[_0x408012(0x17a)](_0xb42e0e % 0xea60 / 0x3e8);
                _0x50c027['textContent'] = '⏰\x20' + _0x3b728f + ':' + (_0x1ebb17 < 0xa ? '0' : '') + _0x1ebb17, _0x50c027[_0x408012(0x100)][_0x408012(0x1a6)]('session-expired'), _0x50c027[_0x408012(0x100)][_0x408012(0xcb)](_0x408012(0x171));
            }
        }, 0x3e8);
}
const accessToken = localStorage['getItem'](_0x3a0c80(0x158)), socket = io(SOCKET_URL, { 'auth': { 'token': localStorage[_0x3a0c80(0x15f)](_0x3a0c80(0x158)) } });
socket['on'](_0x3a0c80(0x1e7), () => {
    const _0x5d83c1 = _0x3a0c80;
    console[_0x5d83c1(0xd8)](_0x5d83c1(0x1ba), socket['id']), document[_0x5d83c1(0xb2)](_0x5d83c1(0x1cc))[_0x5d83c1(0xff)] = '🛜\x20Connected', document[_0x5d83c1(0xb2)](_0x5d83c1(0x1cc))[_0x5d83c1(0x100)][_0x5d83c1(0x1a6)]('con', _0x5d83c1(0xc3)), document[_0x5d83c1(0xb2)]('socket-status')[_0x5d83c1(0x100)][_0x5d83c1(0xcb)](_0x5d83c1(0x16d)), currentRoomId && currentRoomName && (showPopupMessage2('🟢\x20Reconnected', 0x7d0, 'green'), joinRoom(currentRoomId, currentRoomName));
});
const searchUser = document[_0x3a0c80(0xb2)]('search-users'), chatList = document[_0x3a0c80(0xb2)](_0x3a0c80(0x1d4)), chatWindow = document[_0x3a0c80(0xb2)](_0x3a0c80(0xd3)), messageInput = document[_0x3a0c80(0xb2)](_0x3a0c80(0x116)), sendButton = document[_0x3a0c80(0xb2)]('send-button'), logoutButton = document[_0x3a0c80(0xb2)](_0x3a0c80(0x15c)), blockButton = document[_0x3a0c80(0xb2)]('block-button'), chatUserElement = document[_0x3a0c80(0xb2)](_0x3a0c80(0xca)), lastActiveElement = document[_0x3a0c80(0xb2)](_0x3a0c80(0x18f)), userElement2 = chatUserElement, loader = document[_0x3a0c80(0xb2)](_0x3a0c80(0x1a5)), decoded = decodeJWT(accessToken), senderUserId = decoded[_0x3a0c80(0x177)], senderUsername = decoded[_0x3a0c80(0xdc)];
document['getElementById'](_0x3a0c80(0x1ec))[_0x3a0c80(0xff)] = senderUsername;
async function fetchAPI(_0x27a52d, _0x3759ad = _0x3a0c80(0x14d), _0x5c149f = null) {
    const _0x23b070 = _0x3a0c80, _0xd24eca = {
            'Content-Type': 'application/json',
            'Authorization': _0x23b070(0xfc) + accessToken
        }, _0x4588df = {
            'method': _0x3759ad,
            'headers': _0xd24eca
        };
    if (_0x5c149f)
        _0x4588df[_0x23b070(0x128)] = JSON[_0x23b070(0x123)](_0x5c149f);
    const _0x1e1014 = await apiRequest('' + _0x27a52d, _0x4588df);
    if (!_0x1e1014['ok'])
        throw new Error(await _0x1e1014['text']());
    return _0x1e1014[_0x23b070(0x170)]();
}
const url = new URL(self[_0x3a0c80(0x19e)][_0x3a0c80(0x12a)]), queryParam = url[_0x3a0c80(0x16e)][_0x3a0c80(0x1cb)](_0x3a0c80(0xdc));
let query = null;
queryParam && (query = queryParam, searchUser[_0x3a0c80(0x19d)] = query, loadChatList(query));
let debounceTimeout;
function searchUsers() {
    const _0x35554c = _0x3a0c80, _0x46080e = document[_0x35554c(0xb2)](_0x35554c(0x11b))[_0x35554c(0x19d)][_0x35554c(0x13c)]();
    clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
        loadChatList(_0x46080e);
    }, 0x1f4);
}
let currentChatUserId = null;
async function loadChatList(_0x53b828 = '') {
    const _0x297960 = _0x3a0c80;
    try {
        chatList[_0x297960(0x1ca)] = '';
        const _0x52ffd9 = JSON['parse'](localStorage[_0x297960(0x15f)](_0x297960(0x105))) || [], _0x28783e = document[_0x297960(0x178)]('hr'), _0x5e5951 = document[_0x297960(0x178)]('hr'), _0x3c54f1 = new Set(_0x52ffd9[_0x297960(0x16b)](_0x36caaf => _0x36caaf[_0x297960(0x177)]));
        let _0x4ba386 = [], _0x3fadd0 = new Set();
        console[_0x297960(0xd8)](_0x297960(0xdd)), _0x52ffd9[_0x297960(0x167)](({
            username: _0x3256ee,
            userId: _0x4109c4
        }) => {
            const _0x49cc8e = _0x297960;
            if (_0x3256ee[_0x49cc8e(0x127)]()[_0x49cc8e(0x166)](_0x53b828[_0x49cc8e(0x127)]())) {
                const _0x291d5d = createUserItem(_0x3256ee, _0x4109c4);
                chatList['appendChild'](_0x291d5d), _0x3fadd0[_0x49cc8e(0xcb)](_0x4109c4);
            }
        }), chatList[_0x297960(0x1dd)](_0x28783e);
        if (_0x53b828) {
            if (_0x53b828[_0x297960(0x106)] < 0x3) {
                chatList['innerHTML'] = '<p>Search\x20query\x20length\x20must\x20be\x20>=\x203</p>';
                return;
            }
            const _0x84ea93 = await fetchAPI(_0x297960(0x1b7) + _0x53b828);
            _0x84ea93[_0x297960(0x106)] === 0x0 && (chatList['innerHTML'] = _0x297960(0x137)), _0x4ba386 = _0x84ea93[_0x297960(0x11a)](_0x40d44a => !_0x3c54f1[_0x297960(0x1c4)](_0x40d44a['_id'])), _0x4ba386[_0x297960(0x167)](_0x2701a7 => {
                const _0x3384fa = _0x297960, _0x2a20c7 = createUserItem(_0x2701a7['username'], _0x2701a7['_id']);
                chatList[_0x3384fa(0x1dd)](_0x2a20c7);
            }), _0x4ba386[_0x297960(0x106)] > 0x0 && chatList[_0x297960(0x1dd)](_0x5e5951);
        }
        !_0x53b828 && _0x52ffd9[_0x297960(0x167)](({
            username: _0x247651,
            userId: _0x24f4aa
        }) => {
            const _0x56de3a = _0x297960;
            if (!_0x3fadd0[_0x56de3a(0x1c4)](_0x24f4aa)) {
                const _0x57d370 = createUserItem(_0x247651, _0x24f4aa);
                chatList[_0x56de3a(0x1dd)](_0x57d370);
            }
        });
    } catch (_0x43a37a) {
        chatList[_0x297960(0x1ca)] = '<p>No\x20users\x20found\x20matching\x20your\x20query</p>', console[_0x297960(0x102)](_0x297960(0x192), _0x43a37a[_0x297960(0x183)]);
    }
}
function createUserItem(_0x2f80db, _0x3bfc0c) {
    const _0x271627 = _0x3a0c80, _0x3eb518 = document[_0x271627(0x178)](_0x271627(0xe2));
    return _0x3eb518['textContent'] = _0x2f80db, _0x3eb518[_0x271627(0x100)][_0x271627(0xcb)](_0x271627(0x10a)), _0x3eb518['dataset'][_0x271627(0x177)] = _0x3bfc0c, _0x3eb518['addEventListener'](_0x271627(0x139), () => openChat(_0x3bfc0c, _0x2f80db)), _0x3eb518;
}
function joinRoom(_0x3652cf, _0x20fea5) {
    const _0x5d4c9e = _0x3a0c80;
    currentRoomId && socket['emit'](_0x5d4c9e(0x10f), { 'currentChatUserId': currentRoomId }), currentRoomId = _0x3652cf, currentRoomName = _0x20fea5, socket[_0x5d4c9e(0x1aa)](_0x5d4c9e(0x195), { 'recipientUserId': _0x3652cf });
}
const chatCache = new Map();
chatWindow['innerHTML'] = _0x3a0c80(0x115);
async function openChat(_0x37647d, _0x97e993) {
    const _0x45829a = _0x3a0c80;
    console['log'](_0x37647d, _0x97e993), currentChatUserId = _0x37647d, currentChatUsername = _0x97e993, searchUser['value'] = null, saveUser(currentChatUserId, currentChatUsername), loadChatList(), document[_0x45829a(0xb2)](_0x45829a(0xca))[_0x45829a(0xff)] = _0x45829a(0x156) + _0x97e993;
    if (tokenexpired) {
        showPopupMessage(_0x45829a(0xc7)), chatWindow['innerHTML'] = '<h1>Session\x20Expired,\x20Refresh\x20the\x20page.</h1>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<img\x20style=\x22height:200px;\x20width:200px;\x20position:absolute;\x20top:50%;\x20left:50%;\x20transform:translate(-50%,\x20-50%);\x22\x20src=\x22/nihongo/img/icon.png\x22\x20/>\x09';
        return;
    }
    chatWindow[_0x45829a(0x1ca)] = _0x45829a(0x17d), joinRoom(_0x37647d, _0x97e993);
    if (chatCache[_0x45829a(0x1c4)](_0x37647d))
        renderMessages(chatCache[_0x45829a(0x1cb)](_0x37647d));
    else
        try {
            let _0x2c9f9e = [];
            const _0x2e8f45 = localStorage['getItem'](_0x45829a(0x108) + _0x37647d);
            if (_0x2e8f45)
                _0x2c9f9e = await Promise['all'](JSON[_0x45829a(0x18b)](_0x2e8f45)[_0x45829a(0x16b)](async _0x76436e => JSON['parse'](await decryptMessage(_0x76436e))));
            else {
                _0x2c9f9e = await fetchAPI(_0x45829a(0x130) + senderUserId + '/' + _0x37647d);
                const _0x4a53fe = await Promise['all'](_0x2c9f9e[_0x45829a(0x16b)](_0x4fdcd9 => encryptMessage(JSON[_0x45829a(0x123)](_0x4fdcd9))));
                localStorage[_0x45829a(0x17e)]('chat_' + _0x37647d, JSON['stringify'](_0x4a53fe));
            }
            chatCache['set'](_0x37647d, _0x2c9f9e), renderMessages(_0x2c9f9e);
        } catch (_0x599f2b) {
            console['error'](_0x45829a(0x12b), _0x599f2b[_0x45829a(0x183)]), chatMessagesContainer[_0x45829a(0x1ca)] = '<p>Error\x20loading\x20messages.\x20Please\x20try\x20again\x20later.</p>';
        }
    checkUserAvailability(currentChatUserId), socket[_0x45829a(0x1aa)](_0x45829a(0x1e4), {
        'senderId': senderUserId,
        'receiverId': currentChatUserId
    }), updateBlockButton();
}
async function renderMessages(_0x26ab37) {
    const _0x5709ff = _0x3a0c80;
    chatWindow[_0x5709ff(0x1ca)] = _0x5709ff(0x1b2);
    const _0x10f0a0 = chatWindow['querySelector'](_0x5709ff(0x1ed));
    _0x10f0a0[_0x5709ff(0x1ca)] = _0x26ab37['length'] ? '' : _0x5709ff(0x1c6);
    for (const _0x188431 of _0x26ab37) {
        const _0x344373 = _0x188431[_0x5709ff(0x142)][_0x5709ff(0x110)] === senderUserId;
        displayMessage(_0x188431, _0x344373);
    }
    refreshChat();
}
function _0x4041() {
    const _0x282256 = [
        '4PYfienOyxqGq2fJAguGtg9HzgvKifn1y2nLC3nMDwXSEs4',
        'w0LTywDLxq',
        'yMX1CI1ZBgLKzxiTy29UDgfPBMvY',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEs48l3a+',
        'BMv3twvZC2fNzq',
        'y2XPy2S',
        'DxnLCKj1C3K',
        'rNvUy3rPB24GDw5HDMfPBgfIBguHie1LC3nHz2uGBM90igrLBgv0zwqGAxrZigP1C3qGysbKzw1VlG',
        'DhjPBq',
        'C2HVDW',
        '4P2mievYCM9YihjLzNjLC2HPBMCGy2HHDdO',
        'l2fWAs9JAgf0CY9ZyxzLlwnOyxr0zwqTDxnLCG',
        '4PQG77IpifjLy29UBMvJDgLVBIbMywLSzwq6',
        'ntGYmty0rMjvueLV',
        'C2vUzgvY',
        'qwnJzxnZigrLBMLLzc4',
        'zgvJCNLWDa',
        'DhjHBNnPDgLVBG',
        'Dw5IBg9JA2vK',
        'DhjHBNnSyxrLwsGXmhb4kq',
        'rxjYB3iGzMv0y2HPBMCGzNjVBsbZzxj2zxi6',
        'q2HHDcb1C2vYieLeigLZihvUzgvMAw5Lzc4Gq2fUBM90igrLBgv0zsbJAgf0igHPC3rVCNKU',
        'l2fWAs9JAgf0CY9KzwXLDguV',
        'CMvK',
        'yNv0Dg9U',
        'r0vu',
        'zw5JB2rL',
        'zgvSzxrLlwj1DhrVBG',
        'zxHWB3j0s2v5',
        'B2zMBgLUzq',
        '4PQG77IpifjLy29UBMvJDgLVBIbgywLSzwq',
        'DhjHBNnMB3jT',
        'CMvJzwL2zxi',
        'A2v5',
        '8j+sRca',
        'zM9YBwf0',
        'ywnJzxnZvg9Rzw4',
        'yxbWBgLJyxrPB24VANnVBG',
        'Dw5YzwfKlwnVBNrHAw5LCG',
        'y291BNrKB3DU',
        'Bg9NB3v0qNrU',
        'u2vZC2LVBIbLEhbPCMvK',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AguGzw50AxjLignOyxqGAgLZDg9YEt8GvgHPCYbHy3rPB24Gy2fUBM90igjLihvUzg9Uzs4',
        'z2v0sxrLBq',
        '8j+uTcbtB2nRzxqGrxjYB3i6',
        'zM9UDfDLAwDODa',
        'y2XPzw50sgvPz2H0',
        'l2fWAs9JAgf0CY8',
        '4PYfienOyxqGAxmGDxaGDg8Gzgf0zsb3AxrOia',
        'zw5JCNLWDa',
        'Aw5JBhvKzxm',
        'zM9YrwfJAa',
        'Dw5IBg9JAY11C2vY',
        'CMf3',
        'sw1Hz2uGDxbSB2fKigzHAwXLzce',
        'BwfW',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLlI4U',
        'y29U',
        'C2vHCMnOugfYyw1Z',
        'quvtluDdtq',
        'ANnVBG',
        'C2vZC2LVBI1Hy3rPDMu',
        'zxHW',
        'y3nZvgv4Da',
        'B3bLBG',
        'zgvJB2rL',
        'ufvu',
        'DxnLCKLK',
        'y3jLyxrLrwXLBwvUDa',
        'z3jLzw4',
        'zMXVB3i',
        'nZfIzxP5rLi',
        'sfruucbLCNjVCIeGu3rHDhvZoIa',
        'idXKAxyGy2XHC3m9iMXVywrLCI1JB250ywLUzxiIpIa8zgL2ignSyxnZpsjSB2fKzxiIpJWVzgL2pIa8C3bHBJ5mB2fKAw5NienOyxrZlI4Upc9ZCgfUpIa8l2rPDJ4j',
        'C2v0sxrLBq',
        'lMjHy2STyNrU',
        'rgf0zvrPBwvgB3jTyxq',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'C2HVDY1JAgf0',
        'BwvZC2fNzq',
        'yMX1CI1ZBgLKzxi',
        'EwvSBg93',
        '4PQG77IpifnVBwuGy2HHDhmGzMfPBgvKihrVigXVywqGzhvLihrVigrLy3j5ChrPB24GzxjYB3jZlG',
        'D2fSBhbHCgvYlwj0BG',
        'C3vIDgXL',
        'ls1IBhvYlxzHBhvL',
        'AxncBg9JA2vK',
        'CgfYC2u',
        '4PQG77IpiezHAwXLzcb0BYbYzwzYzxnOignOyxqU',
        'ugLJA2vY',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLiq',
        'C3rHDhvZ',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'C29Tzq',
        'rxjYB3iGBg9HzgLUzYbJAgf0igXPC3q6',
        'y2XVC2uTyMX1CI1ZBgLKzxi',
        'yMvMB3jLDw5SB2fK',
        'AM9PBG',
        'zgLZy29UBMvJDa',
        'mJeWmZrvwgn5uNO',
        'DhLWAw5NlwLUzgLJyxrVCG',
        'cGKGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNr5CgLUzY1KB3rZiJ4kcsaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpJWVC3bHBJ48C3bHBJ48l3nWyw4+phnWyw4+pc9ZCgfUpGOjicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcsaGicaGicaGicaGicaGica',
        'x2jSyw5R',
        'rMfPBgvKihrVigrLBgv0zsbJAgf0igHPC3rVCNKUifbSzwfZzsb0CNKGywDHAw4U',
        'vw5IBg9JAW',
        'DMfSDwu',
        'Bg9JyxrPB24',
        'zg9JDw1LBNrfBgvTzw50',
        'B25JBgLJAW',
        'AxnpBMXPBMu',
        'z2v0tw9UDgG',
        'zw4Tvvm',
        'rxjYB3iGDxbSB2fKAw5NigLTywDLoG',
        'Aw1Hz2uTBg9HzgvY',
        'CMvTB3zL',
        'ywXS',
        'Bw9Yzs1IDg4',
        'rxjYB3iGzgvSzxrPBMCGy2HHDcbOAxn0B3j5oG',
        'zw1PDa',
        'C3r5Bgu',
        'B3bHy2L0Eq',
        'mtbVshbJsxi',
        't2zMBgLUzq',
        'AxnbCNjHEq',
        'DxnLCK9MzMXPBMu',
        'tM8GDg9Rzw4GzM91BMq',
        'pgrPDIbJBgfZCZ0Iy2HHDc1TzxnZywDLCYi+pc9KAxy+',
        'B3bHy2L0EsaWlJnZigvHC2uTAw4TB3v0',
        'DgLTzxn0yw1W',
        'BxLHDMf0yxi',
        'yMfJA2DYB3vUzfbVC2L0Aw9U',
        'l2fWAs9JAgf0CY91C2vYCZ91C2vYBMfTzt0',
        'vxnLCIa',
        'zMXLEa',
        '8j+BNcbtB2nRzxqGy29UBMvJDgvKihrVihrOzsbZzxj2zxiGD2L0AcbjrdO',
        'ls12Aa',
        'DgfYz2v0',
        'C2v0',
        'pgGXpLnLC3nPB24GrxHWAxjLzcWGuMvMCMvZAcb0AguGCgfNzs48l2GXpGOjcqKjcqKjcqKjcqK8Aw1Nihn0EwXLpsjOzwLNAhq6mJaWChG7ihDPzhrOoJiWmhb4oYbWB3nPDgLVBJPHyNnVBhv0ztSGDg9WoJuWjtSGBgvMDdO1mcu7ihrYyw5ZzM9YBtP0CMfUC2XHDguOltuWjsWGltuWjsK7iIbZCMm9iI9UAwHVBMDVl2LTzY9Py29UlNbUzYiGlZ4j',
        'igHHCYbIzwvUigrLBgv0zwqGyNKGDgHLig90AgvYihvZzxiU',
        'ChvZAfn0yxrL',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZig1LC3nHz2u/',
        'BwvZC2fNzxnszwfK',
        'lMnOyxqTD2LUzg93',
        'AgfZ',
        'C29YDa',
        'pha+tM8GBwvZC2fNzxmGEwv0lJWVCd4',
        'l2fWAs9JAgf0CY9JAgf0DgvKlxvZzxjZ',
        'BMf0AxzL',
        'yM9Sza',
        'Aw5Uzxjive1m',
        'z2v0',
        'C29JA2v0lxn0yxr1CW',
        'BM9YBwfS',
        'zw1VAMKTCgLJA2vY',
        'yMXVy2S',
        'ig1PC3nPBMCGBwvZC2fNzxmU',
        'rgvSzxrPBMCGq2HHDcbiAxn0B3j5lcbqBgvHC2uGv2fPDc4UlG',
        'y2HHDeHPC3rVCNLezwXLDgvK',
        'q2HHDcbJywnOzsbJBgvHCMvKigzVCIb1C2vYia',
        'y2HHDc1SAxn0',
        'ihjLywqGBwvZC2fNzxmGAw4Gy2HHDca',
        'B3rOzxi',
        'zhjVCgrVD24TBwvUDq',
        '8j+KR/cFPk/WN6sV',
        'zMLSzvvYBa',
        'vhLWAw5N',
        'rw50zxi',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'yxbWzw5Kq2HPBgq',
        '8j+BNcbszwnVBM5Ly3rLzcaOqxr0zw1WDca',
        'vxnLCIbUB3qGzM91BMqGB3iGC2vYDMvYigvYCM9Y',
        'twvZC2fNzsbUB3qGCMvSyxrLzcb0BYbJDxjYzw50ihDPBMrVDYWGAwDUB3jLza',
        'DhLWAw5N',
        'y2HHDerLBgv0zwq',
        'DhLWzq',
        'BwfYA0fZuMvHza',
        'yMXVy2STDxnLCG',
        'mta3mdH1z3HzCvi',
        'y29UBMvJDa',
        'BMv3twvZC2fNzu5VDgLMAwnHDgLVBG',
        '4PQG77Ipie5VignOyxqGC2vSzwn0zwqGDg8GCMvMCMvZAc4',
        'C2nYB2XSvg9W',
        'y2vUDgvY',
        'BxLvC2vYBMfTzq',
        'lMnOyxqTBwvZC2fNzxm',
        'Aw5UzxjxAwr0Aa',
        't25SAw5L',
        'mZjqALjLD28',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCG',
        'C2nYB2XSsgvPz2H0',
        '4PQG77IpierPC2nVBM5Ly3rLza',
        'Dg9eyxrLu3rYAw5N',
        'y2HHDejSDxi',
        'B3jHBMDL',
        'D2fYBG',
        'Dhj1zq',
        '8j+BNcbszwnVBM5Ly3rLzcb0BYbZzxj2zxiSigf0DgvTChqGiW',
        'C2v0uhjVCgvYDhK',
        'rxjYB3i6',
        'C3bSAxq',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVignSzwfYihrOzsbJAgf0ignHy2HLigzVCIa',
        'z2v0rwXLBwvUDej5swq',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVia',
        'BM9Uzq',
        'vxbSB2fKAw5NigLTywDLlI4U',
        'mty4ntmYmMznreLjyq',
        'rMfPBgvKihrVig1HCMSGBwvZC2fNzxmGyxmGCMvHzdO',
        'Aw5UzxjizwLNAhq',
        'Bwf0y2HLCW',
        'l25PAg9Uz28VBwvKAweVCg9WlM1WmW',
        'uMvTB3zLzcbJB3jYDxb0zwqGy2HHDcbJywnOzsbMB3iGDxnLCIa',
        'B3bHy2L0EsaWlJrZigvHC2uTB3v0lcb0CMfUC2zVCM0Gmc40CYbLyxnLlw91Da',
        'rxjYB3i6iezPBguGC2L6zsbLEgnLzwrLzcbVCIb0B28GBwfUEsbYzxf1zxn0CW',
        'BM93',
        'CMvJB25Uzwn0x2vYCM9Y',
        'zMLSzxm',
        'D2fSBhbHCgvYtw9KywW',
        'twvZC2fNzxmGBwfYA2vKigfZihjLywq6',
        'zgLZ',
        'CMvTB3zLsxrLBq',
        'rgvJCNLWDgLVBIbMywLSzwq',
        'l2fWAs9JAgf0CY9HDMfPBgfIAwXPDhKV',
        'u2vZC2LVBIbfEhbPCMvK',
        'sM9PBIbLBwL0igzHAwXLzcb0BYbZB2nRzxqGD2L0Acb1C2vYoG',
        'tgfZDcbtzwvUoIa',
        'y2HHDc11C2vY',
        'ywrK',
        'BNvTzxjPyW',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idCWChG7igXLzNq6ideWChG7igjHy2TNCM91BMq6icmWmdDIzMy7ignVBg9YoIb3AgL0ztSGCgfKzgLUzZOGohb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7ihOTAw5KzxG6ideWmda7',
        'yMXVy2TLza',
        'lM1LC3nHz2uUC2vSzIaUCMvHzc1YzwnLAxb0',
        'C2vUze1LC3nHz2u',
        'mJuWmtr2vwDYte0',
        'w2rHDgeTDxnLCI1Pzd0N',
        'y2HHDc13Aw5KB3C',
        'ue9tva',
        'DxnLCLbYB2zPBgvqAwm',
        'Aw1Hz2vvCMW',
        'y29UDgfPBNm',
        'Bg9N',
        'Dg9tDhjPBMC',
        'zgvSzxrL',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5',
        'DxnLCM5HBwu',
        '8j+uTpcFN6lWN5+GieXVywrLzcbdAgf0DgvKifvZzxjZig1HDgnOAw5Nihf1zxj5',
        'Aw1N',
        'rMfPBgvKihrVigrLy3j5ChqGy2HHDcbMB3iG',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5oG',
        'CMvHzc1YzwnLAxb0',
        'zgL2',
        'C3bHBG',
        'y292zxi',
        'qNvZEq',
        'CxvLCNLtzwXLy3rVCG',
        'l2fWAs91CgXVywq',
        'B25SB2fK',
        'zgf0yxnLDa',
        'Dw5KzwzPBMvK',
        'rxjYB3iGyMXVy2TPBMCGDxnLCJO',
        'CMvJB25Uzwn0',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'B25WB3bZDgf0zq',
        'lMnOyxqTy29UDgfPBMvY',
        'mZm5ntG4ovjqEvfpDG',
        '4PQG77IpifnVy2TLDcbKAxnJB25Uzwn0zwq6',
        'zw5JCNLWDgLVBKTLEq',
        'ievYCM9YihvWzgf0Aw5Nig1LC3nHz2uGy2fJAgu6ia',
        'AgLKzgvU',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'qMXVy2S',
        'Aw1Hz2uTChjLDMLLDY1JB250ywLUzxi',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCI4',
        'z2v0rNvSBfLLyxi',
        'ywX0',
        'zgLZCgXHEq',
        'qMvHCMvYia',
        'zgf0yq',
        'z2vUzxjHDgvlzxK',
        'Dgv4DenVBNrLBNq',
        'y2XHC3nmAxn0',
        'mJGYwwHsAuTI',
        'zxjYB3i',
        'Dgv4Da',
        'BgfUz3vHz2u',
        'y2HHDhrLzfvZzxjZ',
        'BgvUz3rO',
        'vxnLCIbjrcbVCIbvC2vYBMfTzsbPCYbTAxnZAw5NlIbtA2LWCgLUzY4',
        'y2HHDf8',
        'DxbKyxrLze1LC3nHz2vZ',
        'DxnLCI1PDgvT',
        'rxjYB3i6ie5VihvZzxiGC2vSzwn0zwqGDg8GyMXVy2SU',
        'y2HHDfDHBgXWyxbLCG',
        'zNjVBq',
        'yMfJA2DYB3vUzfnPEMu',
        'BgvHDMvsB29T',
        'x2LK',
        'yMX1CI1IDg4',
        'rxjYB3iGy2HLy2TPBMCGDxnLCIbHDMfPBgfIAwXPDhK6',
        'lMrYB3bKB3DUlwL0zw0',
        'q2HHDcbOAxn0B3j5ihDPDgGG',
        'ica8C3zNignSyxnZpsjHBMLTywWIihzPzxDcB3G9iJaGmcaXmdaWideWmdaIpJWVC3zNpGK',
        'BwvZC2fNzs1PBNb1Da',
        'A2v5zg93BG',
        'nJa3ntiWme5uvxPPCa',
        'Aw1Hz2u',
        'zMLSDgvY',
        'C2vHCMnOlxvZzxjZ',
        'y2HHBMDL',
        'B25SAw5L',
        'uefuq0G',
        'yMfJA2DYB3vUzeLTywDL',
        'y29SB3i',
        'rxjYB3iGBwfYA2LUzYbTzxnZywDLCYbHCYbYzwfKoG',
        'yMX1CI12ywX1zq',
        'C3rYAw5NAwz5',
        'z2v0rgf0zq',
        'mI1KAwDPDa',
        'Aw5WDxq',
        'Dg9mB3DLCKnHC2u',
        'yM9KEq',
        'yMfJA2DYB3vUza',
        'AhjLzG',
        'rxjYB3iGBg9HzgLUzYbJAgf0ig1LC3nHz2vZoG',
        'C3jJ',
        'yNvZEq',
        'rxjYB3i',
        'DxnLCK9UBgLUzq',
        'l2fWAs9JAgf0CY9OAxn0B3j5lW',
        're9nq29UDgvUDeXVywrLza',
        '4PQG77IpienVBM5Ly3rPB24GrMfPBgvK',
        'igHHCYbIzwvUia'
    ];
    _0x4041 = function () {
        return _0x282256;
    };
    return _0x4041();
}
async function saveUser(_0x5c9271, _0x34c2f6) {
    const _0xc45337 = _0x3a0c80;
    if (!_0x5c9271 || !_0x34c2f6) {
        console[_0xc45337(0xab)](_0xc45337(0x107));
        return;
    }
    let _0x5940c3 = JSON[_0xc45337(0x18b)](localStorage[_0xc45337(0x15f)](_0xc45337(0x105))) || [];
    !_0x5940c3[_0xc45337(0x191)](_0x22e5f0 => _0x22e5f0[_0xc45337(0x177)] === _0x5c9271) && (_0x5940c3['push']({
        'userId': _0x5c9271,
        'username': _0x34c2f6
    }), localStorage[_0xc45337(0x17e)](_0xc45337(0x105), JSON[_0xc45337(0x123)](_0x5940c3)));
    try {
        const _0x462498 = await apiRequest(_0xc45337(0x13f), {
                'method': _0xc45337(0xd4),
                'headers': {
                    'Content-Type': _0xc45337(0x159),
                    'Authorization': _0xc45337(0xfc) + localStorage[_0xc45337(0x15f)](_0xc45337(0x158))
                },
                'body': JSON[_0xc45337(0x123)]({ 'currentChatUserId': _0x5c9271 })
            }), _0x55b57e = await _0x462498['json']();
        console[_0xc45337(0xd8)](_0x55b57e[_0xc45337(0x183)]);
    } catch (_0x2f5dba) {
        console[_0xc45337(0x102)]('Error\x20updating\x20server:', _0x2f5dba), showPopupMessage(_0x2f5dba);
    }
}
async function getChattedUsers() {
    const _0x296a24 = _0x3a0c80;
    let _0x322f8b = JSON[_0x296a24(0x18b)](localStorage[_0x296a24(0x15f)](_0x296a24(0x105)));
    if (!_0x322f8b || _0x322f8b[_0x296a24(0x106)] === 0x0)
        try {
            const _0x142057 = await apiRequest(_0x296a24(0x1c7), {
                    'method': _0x296a24(0x14d),
                    'headers': { 'Authorization': 'Bearer\x20' + localStorage['getItem'](_0x296a24(0x158)) }
                }), _0x18bede = await _0x142057['json']();
            _0x18bede['chattedUsers'] && (_0x322f8b = _0x18bede[_0x296a24(0x105)][_0x296a24(0x16b)](_0x13f6d9 => ({
                'userId': _0x13f6d9[_0x296a24(0x110)],
                'username': _0x13f6d9[_0x296a24(0xdc)]
            })), localStorage[_0x296a24(0x17e)]('chattedUsers', JSON[_0x296a24(0x123)](_0x322f8b)), loadChatList());
        } catch (_0x5358eb) {
            console['error'](_0x296a24(0x148), _0x5358eb);
        }
    else
        loadChatList();
}
document[_0x3a0c80(0xed)](_0x3a0c80(0x131), getChattedUsers);
async function appendMessages(_0xa88c87) {
    const _0x8c6732 = _0x3a0c80, _0x12f796 = document['createElement'](_0x8c6732(0xe2));
    _0x12f796[_0x8c6732(0x1ca)] = '<hr\x20class=\x22unread-divider\x22><span\x20class=\x22unread-text\x22>Unread\x20Messages</span>', _0x12f796[_0x8c6732(0x100)][_0x8c6732(0xcb)](_0x8c6732(0x15a)), chatWindow[_0x8c6732(0x1dd)](_0x12f796);
    for (const _0x326c88 of _0xa88c87) {
        if (typeof _0x326c88[_0x8c6732(0x142)] === 'string')
            _0x326c88['sender'] = { '_id': _0x326c88[_0x8c6732(0x142)] };
        if (typeof _0x326c88[_0x8c6732(0x154)] === 'string')
            _0x326c88[_0x8c6732(0x154)] = { '_id': _0x326c88[_0x8c6732(0x154)] };
        const _0x7a5b0b = _0x326c88[_0x8c6732(0x142)][_0x8c6732(0x110)] === senderUserId;
        displayMessage(_0x326c88, _0x7a5b0b);
    }
    chatWindow['scrollHeight'] - chatWindow['scrollTop'] <= chatWindow[_0x8c6732(0x162)] + 0x32 && (chatWindow[_0x8c6732(0x1ea)] = chatWindow[_0x8c6732(0x1f2)]);
}
async function refreshChat() {
    const _0x54bd0f = _0x3a0c80;
    if (!currentChatUserId) {
        showAlert(_0x54bd0f(0x1e9));
        return;
    }
    showNotification('🔄\x20Checking\x20for\x20missing\x20messages\x20...');
    try {
        const _0x102b9e = await fetchAPI(_0x54bd0f(0x130) + senderUserId + '/' + currentChatUserId);
        if (!Array[_0x54bd0f(0x1af)](_0x102b9e))
            throw new Error(_0x54bd0f(0xf8));
        const _0x485fee = chatCache[_0x54bd0f(0x1cb)](currentChatUserId) || [], _0x23ad46 = _0x102b9e[_0x54bd0f(0x11a)](_0x492a9f => !_0x485fee[_0x54bd0f(0x191)](_0x415f9a => _0x415f9a[_0x54bd0f(0x110)] === _0x492a9f[_0x54bd0f(0x110)])), _0x27fff2 = _0x23ad46['filter'](_0xafd490 => !document[_0x54bd0f(0xe6)]('[data-message-id=\x22' + _0xafd490['_id'] + '\x22]'));
        if (_0x27fff2[_0x54bd0f(0x106)] === 0x0) {
            showNotification(_0x54bd0f(0x164) + currentChatUsername);
            return;
        }
        const _0x296361 = [
            ..._0x485fee,
            ..._0x27fff2
        ][_0x54bd0f(0x1c5)]((_0x46b1b3, _0x5ae308) => new Date(_0x46b1b3[_0x54bd0f(0x1b4)]) - new Date(_0x5ae308[_0x54bd0f(0x1b4)]));
        chatCache[_0x54bd0f(0x1bd)](currentChatUserId, _0x296361);
        const _0x12129b = await Promise[_0x54bd0f(0x1a7)](_0x296361[_0x54bd0f(0x16b)](_0x28fb21 => encryptMessage(JSON['stringify'](_0x28fb21))));
        localStorage[_0x54bd0f(0x17e)](_0x54bd0f(0x108) + currentChatUserId, JSON['stringify'](_0x12129b)), appendMessages(_0x27fff2), showNotification('📩\x20Loaded\x20' + _0x27fff2[_0x54bd0f(0x106)] + _0x54bd0f(0x1d0));
    } catch (_0x3e3dbd) {
        console[_0x54bd0f(0x102)](_0x54bd0f(0x13e), _0x3e3dbd), showNotification(_0x54bd0f(0x18c));
    }
}
function displayMessage(_0x2d84f5, _0xfc8a1e) {
    const _0x5d4b03 = _0x3a0c80, _0xcc7303 = document['createElement'](_0x5d4b03(0xe2));
    _0xcc7303[_0x5d4b03(0x100)][_0x5d4b03(0xcb)](_0x5d4b03(0x183), _0xfc8a1e ? 'self' : _0x5d4b03(0x1d6)), _0xcc7303[_0x5d4b03(0xe9)]['originalText'] = _0x2d84f5[_0x5d4b03(0x183)], _0xcc7303['dataset'][_0x5d4b03(0x104)] = detectLanguage(_0x2d84f5[_0x5d4b03(0x183)]);
    const _0x5610a0 = document['createElement'](_0x5d4b03(0x14c));
    _0x5610a0[_0x5d4b03(0x100)][_0x5d4b03(0xcb)](_0x5d4b03(0x14f)), _0x5610a0[_0x5d4b03(0x1ca)] = '<i\x20class=\x22fa-solid\x20fa-trash\x22></i>', _0x5610a0['onclick'] = () => confirmDelete(_0xcc7303);
    const _0x36ffdd = new Date(_0x2d84f5[_0x5d4b03(0x1b4)])[_0x5d4b03(0xf5)]([], {
            'year': _0x5d4b03(0xcc),
            'month': 'short',
            'day': _0x5d4b03(0xcc)
        }), _0x5514f3 = new Date(_0x2d84f5['timestamp'])[_0x5d4b03(0x1dc)]([], {
            'hour': '2-digit',
            'minute': '2-digit',
            'second': _0x5d4b03(0x125)
        }), _0x17dde4 = _0x36ffdd + ',\x20' + _0x5514f3, _0x206692 = document[_0x5d4b03(0x178)]('span');
    _0x206692['classList'][_0x5d4b03(0xcb)](_0x5d4b03(0x1b4)), _0x206692[_0x5d4b03(0xff)] = _0x17dde4;
    const _0x3ebc59 = document[_0x5d4b03(0x178)](_0x5d4b03(0xe3));
    _0x3ebc59[_0x5d4b03(0x100)][_0x5d4b03(0xcb)](_0x5d4b03(0xe1));
    _0xfc8a1e && (_0x3ebc59[_0x5d4b03(0xff)] = _0x2d84f5['isRead'] ? '✔✔' : '✔');
    if (_0x2d84f5[_0x5d4b03(0x1e3)] === _0x5d4b03(0x119)) {
        const _0x82a1c5 = document[_0x5d4b03(0x178)](_0x5d4b03(0xde));
        _0x82a1c5[_0x5d4b03(0x12c)] = _0x2d84f5[_0x5d4b03(0x1d9)], _0x82a1c5[_0x5d4b03(0x100)][_0x5d4b03(0xcb)]('chat-image'), _0x82a1c5[_0x5d4b03(0xfa)] = 'Sent\x20Image', _0x82a1c5[_0x5d4b03(0x1a0)] = () => window[_0x5d4b03(0x174)](_0x2d84f5[_0x5d4b03(0x1d9)], _0x5d4b03(0x19a)), _0xcc7303['appendChild'](_0x82a1c5);
    } else {
        const _0x1adfb3 = document[_0x5d4b03(0x178)]('p');
        _0x1adfb3[_0x5d4b03(0xff)] = _0x2d84f5[_0x5d4b03(0x183)], _0xcc7303[_0x5d4b03(0x1dd)](_0x1adfb3);
    }
    _0xcc7303[_0x5d4b03(0x1dd)](_0x5610a0), _0xcc7303[_0x5d4b03(0x1dd)](_0x206692), _0xcc7303['appendChild'](_0x3ebc59), chatWindow[_0x5d4b03(0x1dd)](_0xcc7303), chatWindow[_0x5d4b03(0x1ea)] = chatWindow[_0x5d4b03(0x1f2)], updateMessages();
}
function confirmDelete(_0x226acc) {
    const _0x1d6c5e = _0x3a0c80;
    confirm(_0x1d6c5e(0x1c1)) && (_0x226acc[_0x1d6c5e(0x1a6)](), showPopupMessage2(_0x1d6c5e(0x13b)));
}
function intializeSocket() {
    const _0x4dd43b = _0x3a0c80;
    if (socket) {
        sendButton[_0x4dd43b(0xed)](_0x4dd43b(0x139), _0x7f4447), messageInput[_0x4dd43b(0xed)](_0x4dd43b(0x117), _0x1b9a7d => {
            const _0x1b176c = _0x4dd43b;
            if (_0x1b9a7d[_0x1b176c(0x155)] === _0x1b176c(0x1db))
                _0x7f4447();
        });
        const _0x2457cf = document[_0x4dd43b(0xb2)]('image-button'), _0x4961c9 = document[_0x4dd43b(0xb2)]('image-input'), _0x230f82 = document[_0x4dd43b(0xb2)](_0x4dd43b(0xf7)), _0x29cd62 = document['getElementById']('image-preview'), _0x2a6fe2 = document[_0x4dd43b(0xb2)]('cancel-preview');
        let _0x5261be = null;
        _0x2457cf[_0x4dd43b(0xed)](_0x4dd43b(0x139), () => {
            const _0x4e296f = _0x4dd43b;
            _0x4961c9[_0x4e296f(0x139)]();
        }), _0x2a6fe2[_0x4dd43b(0xed)](_0x4dd43b(0x139), () => {
            const _0x41e120 = _0x4dd43b;
            _0x5261be = null, _0x230f82[_0x41e120(0x1ab)][_0x41e120(0xfb)] = _0x41e120(0xb4), _0x4961c9[_0x41e120(0x19d)] = '';
        }), _0x4961c9[_0x4dd43b(0xed)](_0x4dd43b(0x11c), _0x1b8a88 => {
            const _0x1f3e4f = _0x4dd43b, _0x25873b = _0x1b8a88[_0x1f3e4f(0x1bc)][_0x1f3e4f(0xc0)][0x0];
            if (_0x25873b) {
                _0x5261be = _0x25873b;
                const _0x1ccfba = new FileReader();
                _0x1ccfba[_0x1f3e4f(0xe8)] = _0x178eac => {
                    const _0x3ad34a = _0x1f3e4f;
                    _0x29cd62['src'] = _0x178eac[_0x3ad34a(0x1bc)]['result'], _0x230f82[_0x3ad34a(0x1ab)]['display'] = _0x3ad34a(0x1cf);
                }, _0x1ccfba['readAsDataURL'](_0x25873b);
            }
        });
        async function _0x7f4447() {
            const _0x3e7dc6 = _0x4dd43b;
            if (!currentChatUserId)
                return;
            if (tokenexpired) {
                showPopupMessage('Session\x20Expired'), chatWindow[_0x3e7dc6(0x1ca)] = _0x3e7dc6(0x1be);
                return;
            }
            let _0x231703 = null;
            const _0x19f700 = messageInput[_0x3e7dc6(0x19d)]['trim']();
            if (_0x19f700) {
                const _0x1188be = {
                    'senderUsername': senderUsername,
                    'receiver': currentChatUserId,
                    'message': _0x19f700,
                    'type': _0x3e7dc6(0x103)
                };
                try {
                    socket[_0x3e7dc6(0x1aa)](_0x3e7dc6(0xd0), _0x1188be, _0x4dcf30 => {
                        const _0x15a0ca = _0x3e7dc6;
                        messageInput[_0x15a0ca(0x19d)] = '', _0x4dcf30?.[_0x15a0ca(0x102)] && showAlert(_0x15a0ca(0x18e), _0x4dcf30[_0x15a0ca(0x102)]);
                    });
                } catch (_0x246fc6) {
                    console[_0x3e7dc6(0x102)]('Error\x20sending\x20message:', _0x246fc6[_0x3e7dc6(0x183)]);
                }
            }
            if (_0x5261be) {
                showNotification(_0x3e7dc6(0xb5)), loader[_0x3e7dc6(0x1ab)][_0x3e7dc6(0xfb)] = _0x3e7dc6(0x1cf);
                try {
                    const _0x1cb81e = new FormData();
                    _0x1cb81e['append']('image', _0x5261be);
                    const _0x5b87e1 = await apiRequest(_0x3e7dc6(0xe7), {
                            'method': 'POST',
                            'headers': { 'Authorization': _0x3e7dc6(0xfc) + localStorage['getItem'](_0x3e7dc6(0x158)) },
                            'body': _0x1cb81e
                        }), _0x28bdb8 = await _0x5b87e1[_0x3e7dc6(0x170)]();
                    if (!_0x28bdb8[_0x3e7dc6(0xd6)]) {
                        showNotification(_0x3e7dc6(0x16a)), loader['style'][_0x3e7dc6(0xfb)] = _0x3e7dc6(0xb4), showPopupMessage(_0x28bdb8[_0x3e7dc6(0x183)] || _0x3e7dc6(0x143));
                        return;
                    }
                    _0x28bdb8?.[_0x3e7dc6(0x102)] && (loader[_0x3e7dc6(0x1ab)]['display'] = _0x3e7dc6(0xb4), showAlert(_0x3e7dc6(0xaf), _0x28bdb8[_0x3e7dc6(0x102)]));
                    _0x231703 = _0x28bdb8['imageUrl'];
                    const _0x22abbb = {
                        'senderUsername': senderUsername,
                        'receiver': currentChatUserId,
                        'message': _0x3e7dc6(0x135),
                        'type': _0x3e7dc6(0x119),
                        'fileUrl': _0x231703
                    };
                    socket[_0x3e7dc6(0x1aa)](_0x3e7dc6(0xd0), _0x22abbb, _0x322e88 => {
                        const _0xbd5ec3 = _0x3e7dc6;
                        _0x322e88?.[_0xbd5ec3(0x102)] && showAlert(_0xbd5ec3(0x12e), _0x322e88[_0xbd5ec3(0x102)]);
                    }), _0x5261be = null, loader[_0x3e7dc6(0x1ab)][_0x3e7dc6(0xfb)] = 'none', _0x230f82[_0x3e7dc6(0x1ab)]['display'] = _0x3e7dc6(0xb4), _0x4961c9[_0x3e7dc6(0x19d)] = '';
                } catch (_0x585411) {
                    loader[_0x3e7dc6(0x1ab)][_0x3e7dc6(0xfb)] = _0x3e7dc6(0xb4), showNotification(_0x3e7dc6(0xbd)), console['error'](_0x3e7dc6(0x1a4), _0x585411[_0x3e7dc6(0x183)]);
                }
            }
        }
        socket['on']('receiveMessage', async _0x5ad0a1 => {
            const _0x3800bf = _0x4dd43b;
            if (!_0x5ad0a1 || !_0x5ad0a1['sender'] || !_0x5ad0a1[_0x3800bf(0x154)])
                return;
            _0x305a7c(_0x5ad0a1), _0x5ad0a1[_0x3800bf(0x142)] === currentChatUserId || _0x5ad0a1[_0x3800bf(0x154)] === currentChatUserId ? (_0x3f8a42['style'][_0x3800bf(0xfb)] = _0x3800bf(0xb4), displayMessage(_0x5ad0a1, _0x5ad0a1[_0x3800bf(0x142)] === senderUserId), _0x5ad0a1[_0x3800bf(0x142)] !== senderUserId && playAudio('/nihongo/media/notification.mp3')) : console['log'](_0x3800bf(0x1e0));
        }), socket['on'](_0x4dd43b(0x1e8), _0x4aa5cc => {
            const _0x1d0f2d = _0x4dd43b;
            showNotification2('📩\x20New\x20message\x20from\x20' + _0x4aa5cc['senderName'] + ':\x20' + _0x4aa5cc['newMessage'][_0x1d0f2d(0x183)], 0x1b58), playAudio(_0x1d0f2d(0xba)), _0x305a7c(_0x4aa5cc[_0x1d0f2d(0x138)]);
        });
        async function _0x305a7c(_0x1c8dfb) {
            const _0x420e4f = _0x4dd43b;
            try {
                const _0x34a45 = {
                        ..._0x1c8dfb,
                        'sender': { '_id': _0x1c8dfb[_0x420e4f(0x142)] },
                        'receiver': { '_id': _0x1c8dfb['receiver'] }
                    }, _0x30e8ab = _0x1c8dfb[_0x420e4f(0x142)] === senderUserId ? _0x1c8dfb[_0x420e4f(0x154)] : _0x1c8dfb[_0x420e4f(0x142)], _0x4e01be = chatCache[_0x420e4f(0x1cb)](_0x30e8ab) || [];
                if (_0x34a45[_0x420e4f(0x110)] && !_0x4e01be[_0x420e4f(0x191)](_0x288ce9 => _0x288ce9[_0x420e4f(0x110)] === _0x34a45['_id'])) {
                    const _0x534e88 = [
                        ..._0x4e01be,
                        _0x34a45
                    ];
                    chatCache[_0x420e4f(0x1bd)](_0x30e8ab, _0x534e88);
                    const _0x25ba85 = await Promise[_0x420e4f(0x1a7)](_0x534e88['map'](_0x5c7950 => encryptMessage(JSON['stringify'](_0x5c7950))));
                    localStorage[_0x420e4f(0x17e)](_0x420e4f(0x108) + _0x30e8ab, JSON[_0x420e4f(0x123)](_0x25ba85));
                }
            } catch (_0x4904ee) {
                showAlert(_0x420e4f(0xf3), _0x4904ee[_0x420e4f(0x183)]), console[_0x420e4f(0x102)]('Error\x20updating\x20message\x20cache:', _0x4904ee);
            }
        }
        let _0x2a3c78, _0x1a2fa7 = !![];
        const _0x3f8a42 = document[_0x4dd43b(0xb2)](_0x4dd43b(0x198));
        messageInput[_0x4dd43b(0xed)](_0x4dd43b(0x126), () => {
            const _0x5474ef = _0x4dd43b;
            currentChatUserId && senderUserId !== currentChatUserId && (_0x1a2fa7 && socket && (socket[_0x5474ef(0x1aa)](_0x5474ef(0x1e1), {
                'senderId': senderUserId,
                'receiverId': currentChatUserId
            }), _0x1a2fa7 = ![], setTimeout(() => {
                _0x1a2fa7 = !![];
            }, 0x5dc)), clearTimeout(_0x2a3c78));
        }), socket && socket['on']('typing', ({senderId: _0x4712fe}) => {
            const _0x4abbbc = _0x4dd43b;
            _0x4712fe !== senderUserId && currentChatUserId === _0x4712fe && (updateStatus(_0x4abbbc(0x1da)), _0x3f8a42[_0x4abbbc(0x1ab)][_0x4abbbc(0xfb)] !== _0x4abbbc(0x1b9) && (_0x3f8a42['style']['display'] = 'flex', _0x3f8a42[_0x4abbbc(0x1ca)] = _0x4abbbc(0x199)), clearTimeout(_0x2a3c78), _0x2a3c78 = setTimeout(() => {
                const _0x4778f1 = _0x4abbbc;
                updateStatus(_0x4778f1(0x1ef)), _0x3f8a42[_0x4778f1(0x1ab)]['display'] = 'none';
            }, 0xbb8));
        }), document['addEventListener']('visibilitychange', () => {
            const _0x340b96 = _0x4dd43b;
            socket && (document['hidden'] ? socket['emit'](_0x340b96(0x13a), { 'senderUserId': senderUserId }) : (senderId = senderUserId, receiverId = currentChatUserId, senderUserId && receiverId && socket[_0x340b96(0x1aa)]('markAsRead', {
                'senderId': senderId,
                'receiverId': receiverId
            }), socket[_0x340b96(0x1aa)](_0x340b96(0x12f), { 'senderUserId': senderUserId })));
        }), window['addEventListener'](_0x4dd43b(0x194), () => {
            const _0x46dc5e = _0x4dd43b;
            socket && socket[_0x46dc5e(0x1aa)](_0x46dc5e(0x1b0), { 'senderUserId': senderUserId });
        }), socket['on'](_0x4dd43b(0x12f), ({senderUserId: _0x39f1b4}) => {
            const _0x42ef29 = _0x4dd43b;
            userId = _0x39f1b4;
            const _0x3c51f6 = document['querySelector'](_0x42ef29(0xd2) + userId + '\x27]');
            _0x3c51f6 ? (_0x3c51f6[_0x42ef29(0x100)][_0x42ef29(0x1a6)]('offline', 'busy', _0x42ef29(0x11d)), _0x3c51f6['classList']['add'](_0x42ef29(0x11d))) : _0x42ef29(0x1d8), userElement2 && currentChatUserId === _0x39f1b4 && (userElement2[_0x42ef29(0x100)][_0x42ef29(0x1a6)]('offline', _0x42ef29(0x12d), _0x42ef29(0x11d)), userElement2[_0x42ef29(0x100)]['add']('online'), updateStatus(_0x42ef29(0x1ef)));
        }), socket['on'](_0x4dd43b(0x1b0), ({senderUserId: _0x45d917}) => {
            const _0x451e16 = _0x4dd43b;
            updateStatus('Offline'), userId = _0x45d917;
            const _0x2577b4 = document[_0x451e16(0xe6)](_0x451e16(0xd2) + userId + '\x27]');
            _0x2577b4 && (_0x2577b4[_0x451e16(0x100)][_0x451e16(0x1a6)](_0x451e16(0x151), _0x451e16(0x12d), _0x451e16(0x11d)), _0x2577b4[_0x451e16(0x100)][_0x451e16(0xcb)](_0x451e16(0x151))), userElement2 && currentChatUserId === _0x45d917 && (userElement2[_0x451e16(0x100)][_0x451e16(0x1a6)](_0x451e16(0x151), _0x451e16(0x12d), _0x451e16(0x11d)), userElement2[_0x451e16(0x100)][_0x451e16(0xcb)](_0x451e16(0x151)), checkUserAvailability(currentChatUserId));
        }), socket['on'](_0x4dd43b(0x13a), ({senderUserId: _0xc33d69}) => {
            const _0x1f2ab4 = _0x4dd43b;
            userId = _0xc33d69;
            const _0x18781f = document[_0x1f2ab4(0xe6)](_0x1f2ab4(0xd2) + userId + '\x27]');
            _0x18781f && (_0x18781f['classList']['remove']('offline', _0x1f2ab4(0x12d), _0x1f2ab4(0x11d)), _0x18781f[_0x1f2ab4(0x100)]['add'](_0x1f2ab4(0x12d))), userElement2 && currentChatUserId === _0xc33d69 && (userElement2['classList']['remove'](_0x1f2ab4(0x151), _0x1f2ab4(0x12d), _0x1f2ab4(0x11d)), userElement2[_0x1f2ab4(0x100)][_0x1f2ab4(0xcb)](_0x1f2ab4(0x12d)), updateStatus(_0x1f2ab4(0xe5)));
        }), socket['on'](_0x4dd43b(0x1c2), _0x36f60f => {
            const _0x1d7559 = _0x4dd43b, {
                    chatId: _0x26313b,
                    readerId: _0x5aa0de
                } = _0x36f60f;
            currentChatUserId === _0x5aa0de && senderUserId === _0x26313b && (console[_0x1d7559(0xd8)](_0x1d7559(0x1b8) + _0x5aa0de + _0x1d7559(0x1d5) + _0x26313b), lol());
        });
    } else
        console[_0x4dd43b(0xd8)]('socket:', socket), console[_0x4dd43b(0xd8)]('🔴\x20Socket\x20undefined:\x20Likely\x20due\x20to\x20socket\x20initialisation\x20asynchronous');
    socket['on'](_0x4dd43b(0x196), _0x341794 => {
        const _0x5e6c73 = _0x4dd43b;
        console[_0x5e6c73(0xd8)](_0x5e6c73(0xf1), _0x341794), document[_0x5e6c73(0xb2)](_0x5e6c73(0x1cc))[_0x5e6c73(0xff)] = _0x5e6c73(0xa7), document[_0x5e6c73(0xb2)]('socket-status')[_0x5e6c73(0x100)]['remove'](_0x5e6c73(0x16d), _0x5e6c73(0xc3)), document['getElementById']('socket-status')[_0x5e6c73(0x100)]['add'](_0x5e6c73(0xc3));
    }), socket['on']('connect_error', _0x27cfd3 => {
        const _0x5934c0 = _0x4dd43b;
        console[_0x5934c0(0x102)]('⚠️\x20Connection\x20failed:', _0x27cfd3), document[_0x5934c0(0xb2)](_0x5934c0(0x1cc))[_0x5934c0(0xff)] = _0x5934c0(0x132), document['getElementById'](_0x5934c0(0x1cc))[_0x5934c0(0x100)][_0x5934c0(0x1a6)](_0x5934c0(0x16d), _0x5934c0(0xc3)), document[_0x5934c0(0xb2)](_0x5934c0(0x1cc))['classList'][_0x5934c0(0xcb)](_0x5934c0(0xc3));
    }), socket['on'](_0x4dd43b(0xec), _0xe6692d => {
        const _0x50d423 = _0x4dd43b;
        console[_0x50d423(0xd8)](_0x50d423(0xad) + _0xe6692d), document['getElementById'](_0x50d423(0x1cc))[_0x50d423(0xff)] = _0x50d423(0x1de) + _0xe6692d + ')', document[_0x50d423(0xb2)](_0x50d423(0x1cc))[_0x50d423(0x100)][_0x50d423(0x1a6)]('con', _0x50d423(0xc3)), document['getElementById'](_0x50d423(0x1cc))[_0x50d423(0x100)][_0x50d423(0xcb)]('con');
    }), socket['on'](_0x4dd43b(0xbf), _0x2b5ef6 => {
        const _0x41ec3b = _0x4dd43b;
        console[_0x41ec3b(0x102)](_0x41ec3b(0x140), _0x2b5ef6), document[_0x41ec3b(0xb2)](_0x41ec3b(0x1cc))['textContent'] = _0x41ec3b(0x152), document[_0x41ec3b(0xb2)]('socket-status')[_0x41ec3b(0x100)]['remove'](_0x41ec3b(0x16d), 'dis'), document[_0x41ec3b(0xb2)](_0x41ec3b(0x1cc))[_0x41ec3b(0x100)][_0x41ec3b(0xcb)](_0x41ec3b(0xc3));
    });
}
async function toggleBlockUser() {
    const _0x4f5be7 = _0x3a0c80;
    if (!currentChatUserId) {
        showPopupMessage2(_0x4f5be7(0x10b));
        return;
    }
    const _0x237bea = blockButton[_0x4f5be7(0xe9)][_0x4f5be7(0xce)] === _0x4f5be7(0xac), _0x1d95b4 = _0x237bea ? _0x4f5be7(0x168) : _0x4f5be7(0x1e5);
    if (!confirm(_0x4f5be7(0xb3) + _0x1d95b4 + '\x20' + currentChatUsername + '?'))
        return;
    try {
        const _0x4f55be = {
                'blockUserId': currentChatUserId,
                'unblockUserId': currentChatUserId
            }, _0x162f17 = await apiRequest(_0x4f5be7(0x163) + _0x1d95b4, {
                'method': _0x4f5be7(0xd4),
                'headers': {
                    'Content-Type': _0x4f5be7(0x159),
                    'Authorization': _0x4f5be7(0xfc) + localStorage[_0x4f5be7(0x15f)](_0x4f5be7(0x158))
                },
                'body': JSON[_0x4f5be7(0x123)](_0x4f55be)
            }), _0x5e496c = await _0x162f17[_0x4f5be7(0x170)]();
        _0x162f17['ok'] ? (blockButton[_0x4f5be7(0xff)] = _0x237bea ? 'Block' : _0x4f5be7(0x19c), blockButton[_0x4f5be7(0xe9)][_0x4f5be7(0xce)] = !_0x237bea, socket[_0x4f5be7(0x1aa)]('leaveRoom', { 'currentChatUserId': currentChatUserId }), showPopupMessage(currentChatUsername + _0x4f5be7(0x133) + (_0x237bea ? _0x4f5be7(0x146) : _0x4f5be7(0xce)) + '.'), _0x237bea && (recipientUserId = currentChatUserId, socket ? socket[_0x4f5be7(0x1aa)]('join', { 'recipientUserId': recipientUserId }) : console[_0x4f5be7(0x102)](_0x4f5be7(0xc8), recipientUserId))) : showAlert(_0x4f5be7(0x12e), _0x5e496c[_0x4f5be7(0x102)] || 'Error\x20blocking\x20user.');
    } catch (_0x3d9903) {
        console['error'](_0x4f5be7(0xeb), _0x3d9903[_0x4f5be7(0x183)]);
    }
}
async function markMessagesssssAsRead(_0xbe1732, _0x2ac53f) {
    const _0xcc8488 = _0x3a0c80;
    try {
        const _0x4d3b30 = await apiRequest('/api/chats/mark-read', {
                'method': _0xcc8488(0x11e),
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': _0xcc8488(0xfc) + localStorage['getItem']('accessToken')
                },
                'body': JSON[_0xcc8488(0x123)]({
                    'senderId': senderUserId,
                    'receiverId': currentChatUserId
                })
            }), _0x40d8d7 = await _0x4d3b30[_0xcc8488(0x170)]();
        _0x4d3b30['ok'] ? (console[_0xcc8488(0xd8)](_0xcc8488(0xc2), _0x40d8d7[_0xcc8488(0x109)]), io['to'](_0xbe1732)[_0xcc8488(0x1aa)](_0xcc8488(0x1c2), {
            'readerId': readerId,
            'chatId': chatId
        })) : console[_0xcc8488(0x102)](_0xcc8488(0xb7), _0x40d8d7[_0xcc8488(0x102)]);
    } catch (_0x110ffd) {
        console['error'](_0xcc8488(0x121), _0x110ffd);
    }
}
async function updateBlockButton() {
    const _0x4395f7 = _0x3a0c80;
    if (!currentChatUserId) {
        showPopupMessage(_0x4395f7(0x10b));
        return;
    }
    try {
        const _0x5e207e = await apiRequest('/api/chats/block-status/' + currentChatUserId, {
            'method': _0x4395f7(0x14d),
            'headers': { 'Authorization': _0x4395f7(0xfc) + localStorage[_0x4395f7(0x15f)](_0x4395f7(0x158)) }
        });
        if (!_0x5e207e['ok'])
            throw new Error(_0x4395f7(0x17c) + _0x5e207e[_0x4395f7(0x18f)]);
        const _0x34c5aa = await _0x5e207e[_0x4395f7(0x170)]();
        if (typeof _0x34c5aa[_0x4395f7(0x18a)] === _0x4395f7(0xea))
            throw new Error(_0x4395f7(0x1f1));
        blockButton[_0x4395f7(0xff)] = _0x34c5aa[_0x4395f7(0x18a)] ? 'Unblock' : _0x4395f7(0xf6), blockButton['dataset'][_0x4395f7(0xce)] = _0x34c5aa['isBlocked'][_0x4395f7(0xd9)]();
    } catch (_0x31bf22) {
        console[_0x4395f7(0x102)]('Error\x20checking\x20block\x20status:', _0x31bf22), blockButton[_0x4395f7(0x1ab)][_0x4395f7(0xfb)] = 'none';
    }
}
function toggleDropdown() {
    const _0x277fa8 = _0x3a0c80, _0x2546e7 = document[_0x277fa8(0xb2)](_0x277fa8(0x1d7));
    _0x2546e7[_0x277fa8(0x100)][_0x277fa8(0xd7)](_0x277fa8(0x13d)) ? (_0x2546e7['classList'][_0x277fa8(0x1a6)](_0x277fa8(0x13d)), setTimeout(() => _0x2546e7[_0x277fa8(0x1ab)]['display'] = _0x277fa8(0xb4), 0xc8)) : (_0x2546e7[_0x277fa8(0x1ab)][_0x277fa8(0xfb)] = _0x277fa8(0x1cf), setTimeout(() => _0x2546e7[_0x277fa8(0x100)]['add']('show'), 0xa));
}
document[_0x3a0c80(0xed)]('click', function (_0x5de7af) {
    const _0x311053 = _0x3a0c80, _0x23cc76 = document[_0x311053(0xb2)](_0x311053(0x1d7)), _0x59ed1f = document[_0x311053(0xb2)](_0x311053(0x1a8));
    !_0x59ed1f[_0x311053(0xd7)](_0x5de7af[_0x311053(0x1bc)]) && !_0x23cc76[_0x311053(0xd7)](_0x5de7af['target']) && (_0x23cc76['classList'][_0x311053(0x1a6)]('show'), setTimeout(() => _0x23cc76[_0x311053(0x1ab)][_0x311053(0xfb)] = _0x311053(0xb4), 0xc8));
}), document[_0x3a0c80(0xb2)]('dropdown-menu')[_0x3a0c80(0xed)]('click', function (_0x118a41) {
    const _0x21ae09 = _0x3a0c80, _0x31a7bc = document[_0x21ae09(0xb2)](_0x21ae09(0x1d7));
    _0x118a41['target'][_0x21ae09(0xb9)](_0x21ae09(0x113)) && (_0x31a7bc[_0x21ae09(0x100)][_0x21ae09(0x1a6)](_0x21ae09(0x13d)), setTimeout(() => _0x31a7bc[_0x21ae09(0x1ab)][_0x21ae09(0xfb)] = _0x21ae09(0xb4), 0xc8));
});
async function checkUserAvailability(_0x2b1fdf) {
    const _0x205ead = _0x3a0c80;
    try {
        const _0x24ea82 = await apiRequest(_0x205ead(0xc6) + _0x2b1fdf, {
            'method': 'GET',
            'headers': { 'Authorization': _0x205ead(0xfc) + localStorage[_0x205ead(0x15f)]('accessToken') }
        });
        if (!_0x24ea82['ok'])
            throw new Error(_0x205ead(0x1df));
        const _0x52b393 = await _0x24ea82[_0x205ead(0x170)]();
        _0x52b393[_0x205ead(0x1a1)] ? (updateStatus('Online'), chatUserElement['classList'][_0x205ead(0xcb)](_0x205ead(0x11d)), chatUserElement[_0x205ead(0x100)][_0x205ead(0x1a6)]('offline')) : (chatUserElement[_0x205ead(0x100)][_0x205ead(0xcb)](_0x205ead(0x151)), chatUserElement[_0x205ead(0x100)]['remove'](_0x205ead(0x11d)));
        if (lastActiveElement) {
            if (chatUserElement['classList'][_0x205ead(0xd7)](_0x205ead(0x151))) {
                const _0x5b6f35 = new Date(_0x52b393['lastActive']), _0x723813 = new Date(), _0x59037d = _0x5b6f35['toLocaleTimeString'](_0x205ead(0x1a3), {
                        'hour': _0x205ead(0x125),
                        'minute': _0x205ead(0x125),
                        'hour12': !![]
                    }), _0x1e39d8 = new Intl[(_0x205ead(0x180))]([], {
                        'year': 'numeric',
                        'month': _0x205ead(0x125),
                        'day': _0x205ead(0x125)
                    }), _0x102868 = _0x5b6f35['toDateString']() === _0x723813[_0x205ead(0xa8)](), _0x131961 = _0x5b6f35[_0x205ead(0x124)]() === _0x723813[_0x205ead(0x124)]() - 0x1 && _0x5b6f35['getMonth']() === _0x723813[_0x205ead(0x1a2)]() && _0x5b6f35[_0x205ead(0xf9)]() === _0x723813[_0x205ead(0xf9)]();
                let _0x49339c;
                if (_0x102868)
                    _0x49339c = _0x205ead(0xc9) + _0x59037d;
                else
                    _0x131961 ? _0x49339c = 'Last\x20Seen:\x20Yesterday,\x20' + _0x59037d : _0x49339c = 'Last\x20Seen:\x20' + _0x1e39d8[_0x205ead(0x157)](_0x5b6f35) + '\x20' + _0x59037d;
                lastActiveElement[_0x205ead(0xff)] = _0x49339c;
            }
        }
    } catch (_0x504e0c) {
        console[_0x205ead(0x102)](_0x205ead(0x112), _0x504e0c);
    }
}
function updateStatus(_0x288258) {
    const _0x510542 = _0x3a0c80;
    lastActiveElement[_0x510542(0x1ab)]['transition'] = _0x510542(0x1b3), lastActiveElement[_0x510542(0x1ab)][_0x510542(0x1ac)] = '0', setTimeout(() => {
        const _0x37c5f2 = _0x510542;
        if (_0x288258 === _0x37c5f2(0x1ef))
            lastActiveElement[_0x37c5f2(0xff)] = _0x37c5f2(0x1ef), lastActiveElement[_0x37c5f2(0x1ab)][_0x37c5f2(0x120)] = _0x37c5f2(0x179), lastActiveElement[_0x37c5f2(0x1ab)][_0x37c5f2(0x161)] = _0x37c5f2(0x1c9);
        else {
            if (_0x288258 === _0x37c5f2(0xe5))
                lastActiveElement[_0x37c5f2(0xff)] = 'User\x20is\x20Busy', lastActiveElement[_0x37c5f2(0x1ab)]['color'] = _0x37c5f2(0x185), lastActiveElement[_0x37c5f2(0x1ab)][_0x37c5f2(0x161)] = _0x37c5f2(0x1cd);
            else {
                if (_0x288258 === _0x37c5f2(0x1ae))
                    lastActiveElement[_0x37c5f2(0xff)] = _0x37c5f2(0x1ae), lastActiveElement[_0x37c5f2(0x1ab)]['color'] = _0x37c5f2(0x14b), lastActiveElement[_0x37c5f2(0x1ab)][_0x37c5f2(0x161)] = 'normal';
                else
                    _0x288258 === 'Typing' && (lastActiveElement['textContent'] = 'User\x20is\x20Typing\x20.\x20.\x20.', lastActiveElement[_0x37c5f2(0x1ab)]['color'] = '#DD86FF', lastActiveElement[_0x37c5f2(0x1ab)]['fontWeight'] = _0x37c5f2(0x1cd));
            }
        }
        lastActiveElement[_0x37c5f2(0x1ab)][_0x37c5f2(0x1ac)] = '1';
    }, 0x12c);
}
function lol() {
    const _0x358799 = _0x3a0c80;
    document[_0x358799(0x181)](_0x358799(0xcf))[_0x358799(0x167)](_0x1c95b6 => {
        const _0x4021c1 = _0x358799;
        _0x1c95b6['textContent'] === '✔' && (_0x1c95b6[_0x4021c1(0xff)] = '✔✔');
    });
}
function setViewportHeight() {
    const _0x5d9119 = _0x3a0c80;
    document[_0x5d9119(0x19f)]['style'][_0x5d9119(0xae)](_0x5d9119(0x1bb), window[_0x5d9119(0xb8)] * 0.01 + 'px');
}
window['addEventListener']('resize', setViewportHeight), setViewportHeight();
function showChatPanel() {
    const _0x1543d5 = _0x3a0c80;
    document[_0x1543d5(0xe6)]('.chat-container')['classList'][_0x1543d5(0xcb)](_0x1543d5(0x182));
}
function showUserListPanel() {
    const _0x3747c9 = _0x3a0c80;
    document[_0x3747c9(0xe6)](_0x3747c9(0xef))[_0x3747c9(0x100)][_0x3747c9(0x1a6)](_0x3747c9(0x182));
}
document[_0x3a0c80(0xe6)]('#chat-list')[_0x3a0c80(0xed)](_0x3a0c80(0x139), _0x65b093 => {
    const _0x3a7446 = _0x3a0c80;
    window[_0x3a7446(0x1ee)] <= 0x300 && showChatPanel();
}), document[_0x3a0c80(0xe6)](_0x3a0c80(0x17f))['addEventListener'](_0x3a0c80(0x139), _0x4c6a9b => {
    const _0x279243 = _0x3a0c80;
    window[_0x279243(0x1ee)] <= 0x300 && showUserListPanel();
});
const savedImage = localStorage['getItem'](_0x3a0c80(0xd5));
document[_0x3a0c80(0xb2)](_0x3a0c80(0x1b5))[_0x3a0c80(0x12c)] = savedImage || _0x3a0c80(0x190);
function showNotification(_0x540de7) {
    const _0x3fd99a = _0x3a0c80, _0x6216bc = document[_0x3fd99a(0x178)](_0x3fd99a(0xe2));
    _0x6216bc[_0x3fd99a(0xff)] = _0x540de7, _0x6216bc[_0x3fd99a(0x1ab)][_0x3fd99a(0x173)] = _0x3fd99a(0xcd), document['body'][_0x3fd99a(0x1dd)](_0x6216bc), setTimeout(() => _0x6216bc[_0x3fd99a(0x1a6)](), 0xbb8);
}
async function generateKey() {
    const _0x9aef45 = _0x3a0c80;
    if (sessionStorage['getItem'](_0x9aef45(0xf2)))
        return;
    const _0x20ba5f = await crypto[_0x9aef45(0x188)][_0x9aef45(0xfe)]({
            'name': 'AES-GCM',
            'length': 0x100
        }, !![], [
            _0x9aef45(0x165),
            _0x9aef45(0x144)
        ]), _0x139979 = new Uint8Array(await crypto['subtle'][_0x9aef45(0x150)](_0x9aef45(0x169), _0x20ba5f));
    sessionStorage[_0x9aef45(0x17e)](_0x9aef45(0xf2), JSON[_0x9aef45(0x123)](Array[_0x9aef45(0x10d)](_0x139979)));
}
generateKey();
async function getKey() {
    const _0x3efa32 = _0x3a0c80, _0x42e527 = JSON[_0x3efa32(0x18b)](sessionStorage[_0x3efa32(0x15f)](_0x3efa32(0xf2))), _0x5f27d5 = new Uint8Array(_0x42e527);
    return await crypto[_0x3efa32(0x188)]['importKey']('raw', _0x5f27d5, { 'name': _0x3efa32(0x16f) }, !![], [
        _0x3efa32(0x165),
        'decrypt'
    ]);
}
async function encryptMessage(_0xefb21e) {
    const _0x2f6a6a = _0x3a0c80, _0x3bfe87 = await getKey(), _0xe6985f = crypto['getRandomValues'](new Uint8Array(0xc)), _0xf2ac34 = new TextEncoder()[_0x2f6a6a(0x14e)](_0xefb21e), _0x19ab90 = await crypto['subtle'][_0x2f6a6a(0x165)]({
            'name': _0x2f6a6a(0x16f),
            'iv': _0xe6985f
        }, _0x3bfe87, _0xf2ac34);
    return JSON[_0x2f6a6a(0x123)]({
        'iv': Array['from'](_0xe6985f),
        'data': Array[_0x2f6a6a(0x10d)](new Uint8Array(_0x19ab90))
    });
}
async function decryptMessage(_0x4e20a6) {
    const _0x4c5d4c = _0x3a0c80;
    try {
        const _0x2b1fc8 = await getKey(), _0x1d5a2d = JSON[_0x4c5d4c(0x18b)](_0x4e20a6), _0x17f6fd = new Uint8Array(_0x1d5a2d['iv']), _0x214f77 = new Uint8Array(_0x1d5a2d[_0x4c5d4c(0xfd)]), _0x3bfc0a = await crypto[_0x4c5d4c(0x188)][_0x4c5d4c(0x144)]({
                'name': _0x4c5d4c(0x16f),
                'iv': _0x17f6fd
            }, _0x2b1fc8, _0x214f77);
        return new TextDecoder()[_0x4c5d4c(0x175)](_0x3bfc0a);
    } catch (_0x51e241) {
        return console[_0x4c5d4c(0x102)]('Decryption\x20failed:', _0x51e241), null;
    }
}
async function loadChatCache() {
    const _0x1caf25 = _0x3a0c80;
    showNotification(_0x1caf25(0x16c));
    let _0x2e8867 = ![];
    for (let _0x2123dd = 0x0; _0x2123dd < localStorage[_0x1caf25(0x106)]; _0x2123dd++) {
        const _0x121378 = localStorage[_0x1caf25(0x155)](_0x2123dd);
        if (_0x121378['startsWith'](_0x1caf25(0x108))) {
            const _0x994610 = _0x121378[_0x1caf25(0xb0)]('_')[0x1], _0x3fe80b = localStorage['getItem'](_0x121378);
            if (_0x3fe80b)
                try {
                    const _0x290841 = await Promise[_0x1caf25(0x1a7)](JSON[_0x1caf25(0x18b)](_0x3fe80b)['map'](async _0xa8cdf => {
                        const _0x16af59 = _0x1caf25, _0x4d9d53 = await decryptMessage(_0xa8cdf);
                        if (_0x4d9d53 === null)
                            throw new Error(_0x16af59(0xc5));
                        return JSON['parse'](_0x4d9d53);
                    }));
                    chatCache[_0x1caf25(0x1bd)](_0x994610, _0x290841);
                } catch (_0x55369f) {
                    console[_0x1caf25(0x102)](_0x1caf25(0xdf) + _0x994610 + ':', _0x55369f), localStorage[_0x1caf25(0xc4)](_0x121378), console[_0x1caf25(0xab)](_0x1caf25(0xbb) + _0x994610), _0x2e8867 = !![];
                }
        }
    }
    _0x2e8867 ? showNotification(_0x1caf25(0x186)) : showNotification(_0x1caf25(0x134));
}
window[_0x3a0c80(0xed)]('load', loadChatCache), document['addEventListener'](_0x3a0c80(0x131), () => {
    const _0x4ade42 = _0x3a0c80, _0x57fa59 = document['getElementById']('emoji-button'), _0x23556d = document[_0x4ade42(0xb2)]('message-input'), _0x263410 = document[_0x4ade42(0xb2)](_0x4ade42(0x1ce)), _0x570fd9 = new EmojiMart[(_0x4ade42(0x18d))]({
            'onEmojiSelect': _0x3259a3 => {
                const _0x25eadf = _0x4ade42;
                _0x23556d[_0x25eadf(0x19d)] += _0x3259a3[_0x25eadf(0x1c8)];
            },
            'theme': 'light'
        });
    _0x263410[_0x4ade42(0x1dd)](_0x570fd9), _0x57fa59[_0x4ade42(0xed)](_0x4ade42(0x139), () => {
        const _0x4db799 = _0x4ade42;
        _0x263410[_0x4db799(0x100)]['toggle']('hidden');
    }), document[_0x4ade42(0xed)]('click', _0x2e0fea => {
        const _0x50bdea = _0x4ade42;
        !_0x263410[_0x50bdea(0xd7)](_0x2e0fea[_0x50bdea(0x1bc)]) && _0x2e0fea[_0x50bdea(0x1bc)] !== _0x57fa59 && _0x263410[_0x50bdea(0x100)]['add'](_0x50bdea(0xf4));
    });
}), document['getElementById'](_0x3a0c80(0x187))[_0x3a0c80(0x1a0)] = function () {
    const _0x4325a4 = _0x3a0c80;
    document['getElementById']('wallpaperModal')[_0x4325a4(0x1ab)][_0x4325a4(0xfb)] = _0x4325a4(0x1cf);
};
function closeModal() {
    const _0x4994dc = _0x3a0c80;
    document[_0x4994dc(0xb2)](_0x4994dc(0xc1))[_0x4994dc(0x1ab)][_0x4994dc(0xfb)] = _0x4994dc(0xb4);
}
function setChatBackground(_0xb93f3b) {
    const _0x20ac26 = _0x3a0c80, _0x56f7d3 = document[_0x20ac26(0xe6)](_0x20ac26(0x1c3));
    _0x56f7d3['style'][_0x20ac26(0x129)] = _0xb93f3b, _0x56f7d3[_0x20ac26(0x1ab)]['backgroundSize'] = _0x20ac26(0xe4), _0x56f7d3[_0x20ac26(0x1ab)][_0x20ac26(0x1b6)] = 'center', localStorage['setItem'](_0x20ac26(0x10c), _0xb93f3b), closeModal();
}
function resetChatBackground() {
    const _0xc6627b = _0x3a0c80;
    document[_0xc6627b(0xe6)]('.chat-window')[_0xc6627b(0x1ab)][_0xc6627b(0x129)] = '', localStorage[_0xc6627b(0xc4)]('chatWallpaper'), closeModal();
}
window[_0x3a0c80(0xe8)] = function () {
    const _0x524c48 = _0x3a0c80;
    let _0x9a9aa6 = localStorage[_0x524c48(0x15f)](_0x524c48(0x10c));
    if (_0x9a9aa6) {
        let _0x36108e = document['querySelector'](_0x524c48(0x1c3));
        _0x36108e[_0x524c48(0x1ab)][_0x524c48(0x11f)] = _0x9a9aa6, _0x36108e[_0x524c48(0x1ab)][_0x524c48(0x10e)] = 'cover', _0x36108e[_0x524c48(0x1ab)]['backgroundPosition'] = _0x524c48(0x1eb);
    }
}, document[_0x3a0c80(0xed)](_0x3a0c80(0x131), function () {
    const _0x995167 = _0x3a0c80, _0x42d82f = document['getElementById'](_0x995167(0x111)), _0x51d83b = document[_0x995167(0xb2)](_0x995167(0x136)), _0x187f08 = document[_0x995167(0xb2)](_0x995167(0x184)), _0x55ee06 = document[_0x995167(0xb2)](_0x995167(0x122)), _0x4e7ef6 = document[_0x995167(0xb2)](_0x995167(0x193));
    let _0xe5b7db = localStorage[_0x995167(0x15f)]('chatBlur') || 0x5;
    document[_0x995167(0x19f)]['style'][_0x995167(0xae)](_0x995167(0x189), _0xe5b7db + 'px'), _0x187f08[_0x995167(0x19d)] = _0xe5b7db, _0x55ee06[_0x995167(0xff)] = _0xe5b7db, _0x42d82f[_0x995167(0xed)]('click', function () {
        const _0x7205db = _0x995167;
        _0x51d83b[_0x7205db(0x1ab)][_0x7205db(0xfb)] = _0x7205db(0x1cf);
    }), _0x187f08[_0x995167(0xed)]('input', function () {
        const _0x34b0ef = _0x995167;
        document[_0x34b0ef(0x19f)][_0x34b0ef(0x1ab)][_0x34b0ef(0xae)](_0x34b0ef(0x189), this[_0x34b0ef(0x19d)] + 'px'), _0x55ee06[_0x34b0ef(0xff)] = this['value'], localStorage[_0x34b0ef(0x17e)](_0x34b0ef(0xa9), this[_0x34b0ef(0x19d)]);
    }), _0x4e7ef6['addEventListener']('click', function () {
        const _0x47c8ec = _0x995167;
        _0x51d83b[_0x47c8ec(0x1ab)]['display'] = 'none';
    });
});
function clearChatCacheCnf(_0x5eb2db, _0x2aa734) {
    const _0x1e7628 = _0x3a0c80;
    if (!confirm(_0x1e7628(0xb1) + currentChatUsername + '?'))
        return;
    clearChatCache(_0x5eb2db, _0x2aa734);
}
function clearChatCache(_0x9c98ca, _0x1ccaa0) {
    const _0x213668 = _0x3a0c80;
    chatCache[_0x213668(0x1c4)](_0x9c98ca) && chatCache[_0x213668(0xda)](_0x9c98ca);
    const _0xf136cc = 'chat_' + _0x9c98ca;
    localStorage[_0x213668(0x15f)](_0xf136cc) && localStorage[_0x213668(0xc4)](_0xf136cc);
    const _0x589809 = document[_0x213668(0xb2)]('chat-window');
    currentChatUsername === _0x1ccaa0 && (_0x589809[_0x213668(0x1ab)][_0x213668(0x145)] = _0x213668(0xbc), _0x589809[_0x213668(0x1ab)]['opacity'] = '0', _0x589809['style'][_0x213668(0x153)] = _0x213668(0x147), setTimeout(() => {
        const _0xf6a6ed = _0x213668;
        _0x589809[_0xf6a6ed(0x1ca)] = '', _0x589809[_0xf6a6ed(0x1ab)]['opacity'] = '1', _0x589809[_0xf6a6ed(0x1ab)][_0xf6a6ed(0x153)] = 'translateY(0)';
    }, 0x190)), showPopupMessage(_0x213668(0x1d3) + _0x1ccaa0);
}
async function deleteChatHistory(_0x1f8acf) {
    const _0x36be08 = _0x3a0c80;
    if (!_0x1f8acf) {
        showPopupMessage2(_0x36be08(0x149));
        return;
    }
    const _0x5b36b1 = confirm(_0x36be08(0x15e));
    if (!_0x5b36b1)
        return;
    try {
        showPopupMessage2(_0x36be08(0x1d1), 0x2710, _0x36be08(0xaa));
        const _0x4ae17f = await apiRequest(_0x36be08(0x14a) + senderUserId + '/' + _0x1f8acf, {
                'method': _0x36be08(0x176),
                'headers': {
                    'Content-Type': _0x36be08(0x159),
                    'Authorization': _0x36be08(0xfc) + localStorage[_0x36be08(0x15f)](_0x36be08(0x158))
                }
            }), _0x27fae6 = await _0x4ae17f['json']();
        if (_0x4ae17f['ok']) {
            console[_0x36be08(0xd8)](_0x36be08(0xe0), _0x27fae6), showPopupMessage2(_0x36be08(0xdb), 0xbb8, _0x36be08(0x179));
            let _0x310813 = JSON[_0x36be08(0x18b)](localStorage['getItem'](_0x36be08(0x105))) || [];
            _0x310813 = _0x310813[_0x36be08(0x11a)](_0xaeaa7d => _0xaeaa7d[_0x36be08(0x177)] !== _0x1f8acf), localStorage['setItem'](_0x36be08(0x105), JSON['stringify'](_0x310813)), clearChatCache(currentChatUserId, currentChatUsername);
            const _0x508084 = document[_0x36be08(0xb2)]('chat-window');
            loadChatList(), socket['emit'](_0x36be08(0x1e2), {
                'senderUsername': senderUsername,
                'chatUserId': _0x1f8acf
            });
        } else
            console[_0x36be08(0x102)]('Failed\x20to\x20delete\x20chat\x20history:', _0x27fae6[_0x36be08(0x102)]), alert('Error:\x20' + _0x27fae6[_0x36be08(0x102)]);
    } catch (_0x118491) {
        showPopupMessage2(_0x36be08(0x19b), 0x1388), console[_0x36be08(0x102)](_0x36be08(0x1a9), _0x118491);
    }
}
socket['on'](_0x3a0c80(0x1d2), ({
    senderUserId: _0x5d614c,
    senderUsername: _0x38a1dd
}) => {
    const _0x514744 = _0x3a0c80;
    clearChatCache(_0x5d614c, _0x38a1dd), console[_0x514744(0xd8)](_0x514744(0x114) + _0x5d614c + _0x514744(0x1bf)), showPopupMessage2(_0x514744(0x114) + _0x38a1dd + _0x514744(0x1bf), 0x1388);
}), intializeSocket(), socket['on'](_0x3a0c80(0x102), _0x476f01 => {
    const _0x478faa = _0x3a0c80;
    console[_0x478faa(0x102)](_0x478faa(0x160), _0x476f01), showAlert('Socket\x20Error!', _0x476f01['message'] || 'Socket\x20connection\x20failed,\x20try\x20again\x20later.');
});