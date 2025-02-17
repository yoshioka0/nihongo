const _0x2cc82b = _0x1eec;
(function (_0x4e31e7, _0x568c35) {
    const _0x9bd7cd = _0x1eec, _0x5bde76 = _0x4e31e7();
    while (!![]) {
        try {
            const _0xae0be6 = parseInt(_0x9bd7cd(0x14f)) / 0x1 * (-parseInt(_0x9bd7cd(0x1f7)) / 0x2) + -parseInt(_0x9bd7cd(0x13c)) / 0x3 * (-parseInt(_0x9bd7cd(0x1e6)) / 0x4) + parseInt(_0x9bd7cd(0x18d)) / 0x5 * (parseInt(_0x9bd7cd(0x1fa)) / 0x6) + parseInt(_0x9bd7cd(0x11b)) / 0x7 * (parseInt(_0x9bd7cd(0x1df)) / 0x8) + parseInt(_0x9bd7cd(0x16a)) / 0x9 + -parseInt(_0x9bd7cd(0x19f)) / 0xa * (-parseInt(_0x9bd7cd(0x14e)) / 0xb) + -parseInt(_0x9bd7cd(0x186)) / 0xc;
            if (_0xae0be6 === _0x568c35)
                break;
            else
                _0x5bde76['push'](_0x5bde76['shift']());
        } catch (_0x1b75c6) {
            _0x5bde76['push'](_0x5bde76['shift']());
        }
    }
}(_0x1759, 0x80c8a), history[_0x2cc82b(0x1c9)](null, null, location[_0x2cc82b(0x173)]), window[_0x2cc82b(0x153)] = function () {
    const _0x262ae7 = _0x2cc82b;
    history[_0x262ae7(0x1c9)](null, null, location[_0x262ae7(0x173)]);
});
let tokenexpired;
const token = getJWTToken();
if (token) {
    const decodedToken = JSON[_0x2cc82b(0x22a)](atob(token[_0x2cc82b(0x1c7)]('.')[0x1])), expiryTime = decodedToken[_0x2cc82b(0x126)] * 0x3e8;
    startCountdown(expiryTime);
} else
    console[_0x2cc82b(0x1ed)]('No\x20token\x20found');
function startCountdown(_0x43e560) {
    const _0x2d4935 = _0x2cc82b, _0x4ed1be = document[_0x2d4935(0x14b)](_0x2d4935(0x1f1)), _0x356b14 = setInterval(() => {
            const _0x35fd27 = _0x2d4935, _0xf88d27 = Date[_0x35fd27(0x14c)](), _0x168f45 = _0x43e560 - _0xf88d27;
            if (_0x168f45 <= 0x0)
                clearInterval(_0x356b14), _0x4ed1be[_0x35fd27(0x172)] = 'Session\x20expired', _0x4ed1be[_0x35fd27(0x189)][_0x35fd27(0x145)](_0x35fd27(0x22d)), _0x4ed1be['classList'][_0x35fd27(0x15e)]('session-expired'), showPopupMessage('Session\x20Expired'), tokenexpired = !![];
            else {
                const _0x2592c5 = Math[_0x35fd27(0x183)](_0x168f45 / 0xea60), _0x471dee = Math[_0x35fd27(0x183)](_0x168f45 % 0xea60 / 0x3e8);
                _0x4ed1be[_0x35fd27(0x172)] = '⏰\x20' + _0x2592c5 + ':' + (_0x471dee < 0xa ? '0' : '') + _0x471dee, _0x4ed1be['classList']['remove'](_0x35fd27(0x178)), _0x4ed1be[_0x35fd27(0x189)]['add'](_0x35fd27(0x22d));
            }
        }, 0x3e8);
}
const accessToken = localStorage[_0x2cc82b(0x10f)](_0x2cc82b(0x1dd)), socket = io(SOCKET_URL, { 'auth': { 'token': localStorage[_0x2cc82b(0x10f)](_0x2cc82b(0x1dd)) } });
socket['on']('connect', () => {
    const _0x4ee585 = _0x2cc82b;
    console[_0x4ee585(0x1ed)]('🛜\x20Socket\x20connected\x20to\x20the\x20server\x20with\x20ID:', socket['id']), document[_0x4ee585(0x14b)](_0x4ee585(0x111))['textContent'] = '🛜\x20Connected', document[_0x4ee585(0x14b)](_0x4ee585(0x111))['classList'][_0x4ee585(0x145)](_0x4ee585(0x184), _0x4ee585(0x138)), document[_0x4ee585(0x14b)](_0x4ee585(0x111))['classList'][_0x4ee585(0x15e)](_0x4ee585(0x184));
});
const searchUser = document[_0x2cc82b(0x14b)](_0x2cc82b(0x16e)), chatList = document[_0x2cc82b(0x14b)]('chat-list'), chatWindow = document[_0x2cc82b(0x14b)](_0x2cc82b(0x1b3)), messageInput = document['getElementById'](_0x2cc82b(0x224)), sendButton = document[_0x2cc82b(0x14b)](_0x2cc82b(0x1ef)), logoutButton = document[_0x2cc82b(0x14b)]('logoutBtn'), blockButton = document[_0x2cc82b(0x14b)](_0x2cc82b(0x1b8)), chatUserElement = document[_0x2cc82b(0x14b)](_0x2cc82b(0x147)), lastActiveElement = document[_0x2cc82b(0x14b)](_0x2cc82b(0x13f)), userElement2 = chatUserElement, loader = document[_0x2cc82b(0x14b)](_0x2cc82b(0x20c)), decoded = decodeJWT(accessToken), senderUserId = decoded[_0x2cc82b(0x155)], senderUsername = decoded[_0x2cc82b(0x12e)];
document[_0x2cc82b(0x14b)](_0x2cc82b(0x19b))[_0x2cc82b(0x172)] = senderUsername;
async function fetchAPI(_0x2c6554, _0x8ec5c6 = _0x2cc82b(0x17a), _0xe64b8e = null) {
    const _0x3f8813 = _0x2cc82b, _0x40ecab = {
            'Content-Type': _0x3f8813(0x16d),
            'Authorization': _0x3f8813(0x217) + accessToken
        }, _0x1a3d09 = {
            'method': _0x8ec5c6,
            'headers': _0x40ecab
        };
    if (_0xe64b8e)
        _0x1a3d09[_0x3f8813(0x10b)] = JSON[_0x3f8813(0x1d0)](_0xe64b8e);
    const _0x16dd04 = await apiRequest('' + _0x2c6554, _0x1a3d09);
    if (!_0x16dd04['ok'])
        throw new Error(await _0x16dd04[_0x3f8813(0x154)]());
    return _0x16dd04[_0x3f8813(0x1b9)]();
}
const url = new URL(self[_0x2cc82b(0x218)][_0x2cc82b(0x173)]), queryParam = url[_0x2cc82b(0x1ec)][_0x2cc82b(0x1f0)](_0x2cc82b(0x12e));
let query = null;
queryParam ? (query = queryParam, searchUser[_0x2cc82b(0x171)] = query, loadChatList(query)) : loadChatList();
let debounceTimeout;
function searchUsers() {
    const _0x4c8ae7 = _0x2cc82b, _0x645bda = document[_0x4c8ae7(0x14b)](_0x4c8ae7(0x16e))['value']['trim']();
    clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
        loadChatList(_0x645bda);
    }, 0x1f4);
}
let currentChatUserId = null;
async function loadChatList(_0x5a0c2a = '') {
    const _0x2b72e0 = _0x2cc82b;
    try {
        chatList[_0x2b72e0(0x180)] = '';
        const _0x250a42 = JSON[_0x2b72e0(0x22a)](localStorage[_0x2b72e0(0x10f)](_0x2b72e0(0x109))) || [], _0x5dc7de = document[_0x2b72e0(0x1db)]('hr'), _0x3e9381 = document['createElement']('hr'), _0x28b37b = new Set(_0x250a42[_0x2b72e0(0x1bf)](_0x38889a => _0x38889a[_0x2b72e0(0x155)]));
        let _0x14cd43 = [], _0x12c9ec = new Set();
        console['log'](_0x2b72e0(0x1d6)), _0x250a42[_0x2b72e0(0x16b)](({
            username: _0x529afc,
            userId: _0x2ef8be
        }) => {
            const _0x2837c5 = _0x2b72e0;
            if (_0x529afc['toLowerCase']()['includes'](_0x5a0c2a[_0x2837c5(0x148)]())) {
                const _0x2c230c = createUserItem(_0x529afc, _0x2ef8be);
                chatList[_0x2837c5(0x112)](_0x2c230c), _0x12c9ec[_0x2837c5(0x15e)](_0x2ef8be);
            }
        }), chatList[_0x2b72e0(0x112)](_0x5dc7de);
        if (_0x5a0c2a) {
            if (_0x5a0c2a[_0x2b72e0(0x18a)] < 0x3) {
                chatList[_0x2b72e0(0x180)] = _0x2b72e0(0x22e);
                return;
            }
            const _0x21abb8 = await fetchAPI('/api/chats/users?username=' + _0x5a0c2a);
            _0x21abb8[_0x2b72e0(0x18a)] === 0x0 && (chatList[_0x2b72e0(0x180)] = _0x2b72e0(0x1d4)), _0x14cd43 = _0x21abb8['filter'](_0xfb6b53 => !_0x28b37b['has'](_0xfb6b53[_0x2b72e0(0x1a4)])), _0x14cd43[_0x2b72e0(0x16b)](_0x1cf889 => {
                const _0x5b2851 = _0x2b72e0, _0x5dc3eb = createUserItem(_0x1cf889['username'], _0x1cf889[_0x5b2851(0x1a4)]);
                chatList['appendChild'](_0x5dc3eb);
            }), _0x14cd43[_0x2b72e0(0x18a)] > 0x0 && chatList[_0x2b72e0(0x112)](_0x3e9381);
        }
        !_0x5a0c2a && _0x250a42[_0x2b72e0(0x16b)](({
            username: _0x1aeac2,
            userId: _0x4db622
        }) => {
            const _0x5141db = _0x2b72e0;
            if (!_0x12c9ec[_0x5141db(0x10c)](_0x4db622)) {
                const _0xa8c198 = createUserItem(_0x1aeac2, _0x4db622);
                chatList[_0x5141db(0x112)](_0xa8c198);
            }
        });
    } catch (_0x32f77f) {
        chatList[_0x2b72e0(0x180)] = '<p>No\x20users\x20found\x20matching\x20your\x20query</p>', console[_0x2b72e0(0x106)](_0x2b72e0(0x1c6), _0x32f77f[_0x2b72e0(0x130)]);
    }
}
function createUserItem(_0x380790, _0x26dbae) {
    const _0x557e4c = _0x2cc82b, _0x5d0f59 = document[_0x557e4c(0x1db)]('div');
    return _0x5d0f59[_0x557e4c(0x172)] = _0x380790, _0x5d0f59[_0x557e4c(0x189)][_0x557e4c(0x15e)](_0x557e4c(0x187)), _0x5d0f59[_0x557e4c(0x1cc)]['userId'] = _0x26dbae, _0x5d0f59[_0x557e4c(0x206)](_0x557e4c(0x1f8), () => openChat(_0x26dbae, _0x380790)), _0x5d0f59;
}
let currentRoomId = null;
function joinRoom(_0x5b9607) {
    const _0x2172bc = _0x2cc82b;
    currentRoomId && (socket[_0x2172bc(0x192)](_0x2172bc(0x123), { 'roomId': currentRoomId }), console[_0x2172bc(0x1ed)](_0x2172bc(0x200) + currentRoomId)), currentRoomId = _0x5b9607, socket['emit'](_0x2172bc(0x1e3), { 'recipientUserId': _0x5b9607 }), console[_0x2172bc(0x1ed)](_0x2172bc(0x143) + currentRoomId);
}
const chatCache = new Map();
async function openChat(_0x3d4de5, _0x2d2289) {
    const _0x432d9a = _0x2cc82b;
    currentChatUserId = _0x3d4de5, currentChatUsername = _0x2d2289, saveUser(currentChatUsername), document[_0x432d9a(0x14b)]('chat-user')['textContent'] = _0x432d9a(0x1f4) + _0x2d2289;
    if (tokenexpired) {
        showPopupMessage(_0x432d9a(0x128)), chatWindow[_0x432d9a(0x180)] = '<h1>Session\x20Expired,\x20Refresh\x20the\x20page.</h1>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09<img\x20style=\x22height:50px;\x20width:50px;\x22\x20src=\x22/nihongo/img/icon.png\x22\x20/>\x09';
        return;
    }
    chatWindow[_0x432d9a(0x180)] = '\x20<div\x20class=\x22loader-container\x22>\x20<div\x20class=\x22loader\x22></div>\x20<span>Loading\x20Chats...</span>\x20</div>\x09', joinRoom(_0x3d4de5);
    if (chatCache[_0x432d9a(0x10c)](_0x3d4de5))
        showNotification(_0x432d9a(0x1bb) + _0x2d2289), renderMessages(chatCache[_0x432d9a(0x1f0)](_0x3d4de5));
    else
        try {
            let _0x2c42c7 = [];
            const _0x29d973 = localStorage['getItem'](_0x432d9a(0x182) + _0x3d4de5);
            if (_0x29d973)
                showNotification(_0x432d9a(0x1f6) + _0x2d2289), _0x2c42c7 = await Promise[_0x432d9a(0x1b0)](JSON[_0x432d9a(0x22a)](_0x29d973)[_0x432d9a(0x1bf)](async _0x2ae964 => JSON[_0x432d9a(0x22a)](await decryptMessage(_0x2ae964))));
            else {
                showNotification(_0x432d9a(0x115)), _0x2c42c7 = await fetchAPI('/api/chats/history/' + senderUserId + '/' + _0x3d4de5);
                const _0x24f57a = await Promise[_0x432d9a(0x1b0)](_0x2c42c7[_0x432d9a(0x1bf)](_0x119b0c => encryptMessage(JSON['stringify'](_0x119b0c))));
                localStorage[_0x432d9a(0x204)]('chat_' + _0x3d4de5, JSON['stringify'](_0x24f57a));
            }
            chatCache[_0x432d9a(0x1cb)](_0x3d4de5, _0x2c42c7), renderMessages(_0x2c42c7);
        } catch (_0x4d23e6) {
            console[_0x432d9a(0x106)](_0x432d9a(0x1a8), _0x4d23e6[_0x432d9a(0x130)]), chatMessagesContainer[_0x432d9a(0x180)] = _0x432d9a(0x1d8);
        }
    checkUserAvailability(currentChatUserId), socket[_0x432d9a(0x192)](_0x432d9a(0x202), {
        'senderId': senderUserId,
        'receiverId': currentChatUserId
    }), updateBlockButton();
}
async function renderMessages(_0x3456a1) {
    const _0x33327d = _0x2cc82b;
    chatWindow[_0x33327d(0x180)] = '<div\x20class=\x22chat-messages\x22></div>';
    const _0x29b3ed = chatWindow['querySelector'](_0x33327d(0x1e9));
    _0x29b3ed[_0x33327d(0x180)] = _0x3456a1[_0x33327d(0x18a)] ? '' : _0x33327d(0x1a1);
    for (const _0x5f3fa4 of _0x3456a1) {
        const _0x5248ac = _0x5f3fa4['sender']['_id'] === senderUserId;
        displayMessage(_0x5f3fa4, _0x5248ac);
    }
}
function _0x1759() {
    const _0x25ea92 = [
        'sM9PBIbLBwL0igzHAwXLzcb0BYbZB2nRzxqGD2L0Acb1C2vYoG',
        'zw1PDa',
        'DgfYz2v0',
        'CMvJB25Uzwn0x2vYCM9Y',
        'B3jPz2LUywXuzxH0',
        'CMvTB3zLsxrLBq',
        'yMfJA2DYB3vUzfnPEMu',
        'AxncBg9JA2vK',
        'rMfPBgvKihrVig1HCMSGBwvZC2fNzxmGyxmGCMvHzdO',
        'y2fUy2vSlxbYzxzPzxC',
        'BxLvC2vYBMfTzq',
        'yNv0Dg9U',
        'zM9YBwf0',
        'DhLWAw5NlwLUzgLJyxrVCG',
        'mJbdv0Pdv1O',
        'CMvZAxPL',
        'pha+tM8GBwvZC2fNzxmGEwv0lJWVCd4',
        'zw5JCNLWDa',
        'D2fSBhbHCgvYtw9KywW',
        'x2LK',
        'z3jLzw4',
        '4PQG77IpifnVBwuGy2HHDhmGzMfPBgvKihrVigXVywqGzhvLihrVigrLy3j5ChrPB24GzxjYB3jZlG',
        'yMfJA2DYB3vUzfbVC2L0Aw9U',
        'rxjYB3iGBg9HzgLUzYbJAgf0ig1LC3nHz2vZoG',
        'DxnLCK9MzMXPBMu',
        'z2v0uMfUzg9TvMfSDwvZ',
        'C2HVCNq',
        'vhLWAw5N',
        'y29UBMvJDf9LCNjVCG',
        'BwvZC2fNzxnszwfK',
        'DMLZAwjPBgL0EwnOyw5Nzq',
        'ywXS',
        'BM9YBwfS',
        'sw1Hz2uGDxbSB2fKigzHAwXLzce',
        'y2HHDc13Aw5KB3C',
        'y2f0y2G',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVignSzwfYihrOzsbJAgf0ignHy2HLigzVCIa',
        'Dw5KzwzPBMvK',
        'vxnLCIbPCYbcDxn5',
        'yMXVy2STyNv0Dg9U',
        'ANnVBG',
        '4P2miezHAwXLzcb0BYbYzwzYzxnOignOyxqUifbSzwfZzsb0CNKGywDHAw4U',
        '4PQHifvZAw5NienHy2HLzcbdAgf0igzVCIa',
        'y3nZvgv4Da',
        'C3vIDgXL',
        'BMf0AxzL',
        'BwfW',
        'BgfUz3vHz2u',
        'CMvHzc1YzwnLAxb0',
        'y2vUDgvY',
        'zgvJB2rL',
        't25SAw5L',
        'zw4Tvvm',
        'rxjYB3iGBg9HzgLUzYbJAgf0igXPC3q6',
        'C3bSAxq',
        '4PQG77IpienVBM5Ly3rPB24GrMfPBgvK',
        'ChvZAfn0yxrL',
        '4PQG77IpifjLy29UBMvJDgLVBIbMywLSzwq6',
        'C2v0',
        'zgf0yxnLDa',
        'zMLSzxm',
        'u2vUDcbjBwfNzq',
        'vxnLCIbPCYbuExbPBMCGlIaUic4',
        'C3rYAw5NAwz5',
        'lM1LC3nHz2uUC2vSzIaUCMvHzc1YzwnLAxb0',
        'igHHCYbIzwvUia',
        'CMvZDwX0',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEs48l3a+',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZig1LC3nHz2u/',
        '8j+uTpcFN6lWN5+GieXVywrLzcbdAgf0DgvKifvZzxjZig1HDgnOAw5Nihf1zxj5',
        'lMjHy2STyNrU',
        'pha+rxjYB3iGBg9HzgLUzYbTzxnZywDLCY4GugXLyxnLihrYEsbHz2fPBIbSyxrLCI48l3a+',
        'yMX1CI12ywX1zq',
        'B25JBgLJAW',
        'y3jLyxrLrwXLBwvUDa',
        'C2vUze1LC3nHz2u',
        'ywnJzxnZvg9Rzw4',
        'D2fSBhbHCgvYlwj0BG',
        'ntG1mZG0q1LptK1t',
        'C2nYB2XSsgvPz2H0',
        'z2v0tw9UDgG',
        'rxjYB3iGBwfYA2LUzYbTzxnZywDLCYbHCYbYzwfKoG',
        'AM9PBG',
        'AgLKzgvU',
        'qwnJzxnZigrLBMLLzc4',
        'mZq1mNzQs0vhqW',
        'B25SB2fK',
        'zg9JDw1LBNrfBgvTzw50',
        'lMnOyxqTBwvZC2fNzxm',
        'y2HHDejSDxi',
        'yMXVy2S',
        'C2vHCMnOugfYyw1Z',
        'Bg9N',
        'sfruucbLCNjVCIeGu3rHDhvZoIa',
        'C2vUzc1IDxr0B24',
        'z2v0',
        'y291BNrKB3DU',
        'zw1VAMKTyNv0Dg9U',
        'ywX0',
        '8j+sRca',
        'Aw1Hz2vvCMW',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLigzVCIa',
        'otu1otq2CePptxLI',
        'y2XPy2S',
        'C2v0uhjVCgvYDhK',
        'mtu3mMjIvfPWra',
        'DxnLCKj1C3K',
        'x2jSyw5R',
        'rgvJCNLWDgLVBIbMywLSzwq6',
        '4PQG77IpienVBM5Ly3rPB24GzMfPBgvKoG',
        'w2rHDgeTDxnLCI1Pzd0N',
        'tgvMDcbYB29ToIa',
        'twvZC2fNzxmGBwfYA2vKigfZihjLywq6',
        'BwfYA0fZuMvHza',
        'tgfZDcbtzwvUoIa',
        'C2v0sxrLBq',
        'lMnOyxqTD2LUzg93',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'l2fWAs9JAgf0CY9IBg9JAY1ZDgf0DxmV',
        'CMvJB25Uzwn0',
        'B3bHy2L0Eq',
        'zgLZCgXHEq',
        'CxvLCNLtzwXLy3rVCG',
        'Aw1Hz2uTBg9HzgvY',
        'C29Tzq',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'A2v5',
        'zgvJCNLWDa',
        'Dw5IBg9JAY11C2vY',
        'yMXVy2TLza',
        'zMXLEa',
        '4PQG77IpifjLy29UBMvJDgLVBIbgywLSzwq',
        'zgvSzxrL',
        'B3rOzxi',
        'qMvHCMvYia',
        'Bg9JyxrPB24',
        'Aw1Hz2uTAw5WDxq',
        'Aw1Hz2uTChjLDMLLDW',
        'qMXVy2S',
        'yMX1CI1ZBgLKzxi',
        'CgXHEq',
        'AxnpBMXPBMu',
        'l25PAg9Uz28VBwvKAweVBM90AwzPy2f0Aw9UlM1WmW',
        'yxbWzw5K',
        'CMvK',
        'rxjYB3iGDxbSB2fKAw5NigLTywDLoG',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLlI4U',
        'BwvZC2fNzs1PBNb1Da',
        'yMvMB3jLDw5SB2fK',
        'CMvHzefZrgf0yvvsta',
        'i2nOyxqTBgLZDa',
        '8j+BNcbszwnVBM5Ly3rLzcb0BYbZzxj2zxiSigf0DgvTChqGiW',
        'C3bHBG',
        'CgfYC2u',
        'CMvJzwL2zxi',
        'BM9Uzq',
        'C2vZC2LVBI1Hy3rPDMu',
        'pha+u2vHCMnOihf1zxj5igXLBMD0AcbTDxn0igjLid49idm8l3a+',
        'C2vUzgvY',
        'zxjYB3i',
        'DgLTzxn0yw1W',
        'yMfJA2DYB3vUzeLTywDL',
        'y2HHDhrLzfvZzxjZ',
        'mI1KAwDPDa',
        'yM9KEq',
        'AgfZ',
        'BNvTzxjPyW',
        'ChvZAa',
        'z2v0sxrLBq',
        'rxjYB3iGy2HLy2TPBMCGDxnLCIbHDMfPBgfIAwXPDhK6',
        'C29JA2v0lxn0yxr1CW',
        'yxbWzw5Kq2HPBgq',
        'uefuq0G',
        'l2fWAs9JAgf0CY8',
        '8j+tOsbgzxrJAgLUzYbdAgf0igHPC3rVCNKGzNjVBsbZzxj2zxi',
        'vw5IBg9JAW',
        'zw1VAMKTCgLJA2vY',
        'zgvSzxrLlwj1DhrVBG',
        'z2v0rgf0zq',
        'zgL2',
        'mtrTve5guha',
        'ue9tva',
        'ihjLywqGBwvZC2fNzxmGAw4Gy2HHDca',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'zhjVCgrVD24TBwvUDq',
        'C3rYAw5N',
        'rxjYB3i6ie5VihvZzxiGC2vSzwn0zwqGDg8GyMXVy2SU',
        '8j+uHcbszwzYzxnOAw5NignOyxqGD2L0Aca',
        'BgvHDMu',
        'Dg9eyxrLu3rYAw5N',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVia',
        'zxHW',
        'l2fWAs9JAgf0CY9OAxn0B3j5lW',
        'u2vZC2LVBIbfEhbPCMvK',
        'y29UDgfPBNm',
        'BgfZDefJDgL2zq',
        'rNvUy3rPB24GDw5HDMfPBgfIBguHie1LC3nHz2uGBM90igrLBgv0zwqGAxrZigP1C3qGysbKzw1VlG',
        'tgfZDcbtzwvUoIbzzxn0zxjKyxKSia',
        'yMX1CI1ZBgLKzxiTy29UDgfPBMvY',
        'DxnLCM5HBwu',
        'CMf3',
        'BwvZC2fNzq',
        'DhjPBq',
        're9nq29UDgvUDeXVywrLza',
        'yNvZEq',
        'B2zMBgLUzq',
        'D2fYBG',
        'DxbKyxrLze1LC3nHz2vZ',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'zgLZ',
        'z2v0rNvSBfLLyxi',
        'zNjVBq',
        '4PQG77IpifnVy2TLDcbKAxnJB25Uzwn0zwq6',
        'odK3CLnOrgDf',
        'B25SAw5L',
        'rMfPBgvKihrVigrLy3j5ChqGy2HHDcbMB3iG',
        'C3rHDhvZ',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'C2HVDW',
        'C2HVDY1JAgf0',
        'sM9PBMvKihjVB206ia',
        'ls1IBhvYlxzHBhvL',
        'CMvTB3zL',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLoG',
        'y2HHDc11C2vY',
        'Dg9mB3DLCKnHC2u',
        'Aw5UzxjxAwr0Aa',
        '8j+tQsbozxCGBwvZC2fNzxmGBg9HzgvKihn1y2nLC3nMDwXSEs4',
        'z2v0rwXLBwvUDej5swq',
        'BM93',
        'EwvSBg93',
        'mtaYmZa4oejsuKvAtG',
        'mNrmugLRBa',
        'C3jJ',
        'C3r5Bgu',
        'vxnLCIa',
        'B25WB3bZDgf0zq',
        'Dgv4Da',
        'DxnLCKLK',
        'z2vUzxjHDgvlzxK',
        'Bg9Hza',
        'ugLJA2vY',
        'BxLHDMf0yxi',
        'B3bHy2L0EsaWlJnZigvHC2uTAw4TB3v0',
        'DxnLCLbYB2zPBgvqAwm',
        'w0LTywDLxq',
        'y2HHDfDHBgXWyxbLCG',
        'ywrK',
        'zgLZy29UBMvJDa',
        'Aw1Hz2uTyNv0Dg9U',
        'zM9UDfDLAwDODa',
        'y2HHBMDL',
        'l2fWAs91CgXVywq',
        'lMnOyxqTy29UDgfPBMvY',
        'y29SB3i',
        'Aw5UzxjizwLNAhq',
        'Bw9Yzs1IDg4',
        'rw50zxi',
        'quvtluDdtq',
        'nJy2mZa0mMLIBMfdCG',
        'zM9YrwfJAa',
        'rgvJCNLWDgLVBIbMywLSzwq',
        'yxbWBgLJyxrPB24VANnVBG',
        'C2vHCMnOlxvZzxjZ',
        'zxHWB3j0s2v5',
        'qNvZEq',
        'DMfSDwu',
        'Dgv4DenVBNrLBNq',
        'AhjLzG',
        'y292zxi',
        'Dhj1zq',
        'C2vSzG',
        'rxjYB3iGy2HLy2TPBMCGyMXVy2SGC3rHDhvZoG',
        'C2vZC2LVBI1LEhbPCMvK',
        'zMLSzvvYBa',
        'r0vu',
        'zw5JCNLWDgLVBKTLEq',
        'C2nYB2XSvg9W',
        'rxjYB3iGyMXVy2TPBMCGDxnLCJO',
        '4PYfienOyxqGAxmGywXYzwfKEsb1Ccb0BYbKyxrLihDPDgGG',
        't2zMBgLUzq',
        'Aw5Uzxjive1m',
        'DhLWAw5N',
        'y2HHDf8',
        'zMXVB3i',
        'y29U',
        'rxjYB3iGCgXHEwLUzYbZB3vUzdO',
        'nteYmJa0nfDMDgzWBa',
        'DxnLCI1PDgvT',
        'i0reodzgrG',
        'y2XHC3nmAxn0',
        'BgvUz3rO',
        'Aw1Hz2u',
        'Aw1Hz2uTChjLDMLLDY1JB250ywLUzxi',
        'mteWnJb3uLrjwLO',
        'Aw5WDxq',
        'DhLWzq',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCG'
    ];
    _0x1759 = function () {
        return _0x25ea92;
    };
    return _0x1759();
}
async function saveUser(_0x2f95aa) {
    const _0x1f6718 = _0x2cc82b;
    if (_0x2f95aa) {
        const _0x4129cc = JSON['parse'](localStorage[_0x1f6718(0x10f)]('chattedUsers')) || [];
        !_0x4129cc['some'](_0x3fba47 => _0x3fba47[_0x1f6718(0x155)] === currentChatUserId) && (_0x4129cc[_0x1f6718(0x10e)]({
            'username': _0x2f95aa,
            'userId': currentChatUserId
        }), localStorage['setItem'](_0x1f6718(0x109), JSON[_0x1f6718(0x1d0)](_0x4129cc)));
    } else
        console['warn']('currentChatUsername\x20is\x20undefined.\x20Skipping\x20localStorage\x20update.');
}
async function appendMessages(_0x5ef946) {
    const _0x1f4230 = _0x2cc82b;
    for (const _0x2c0caa of _0x5ef946) {
        typeof _0x2c0caa['sender'] === _0x1f4230(0x120) && (_0x2c0caa[_0x1f4230(0x105)] = { '_id': _0x2c0caa[_0x1f4230(0x105)] });
        typeof _0x2c0caa[_0x1f4230(0x22b)] === 'string' && (_0x2c0caa[_0x1f4230(0x22b)] = { '_id': _0x2c0caa['receiver'] });
        const _0x38f621 = _0x2c0caa['sender'][_0x1f4230(0x1a4)] === senderUserId;
        displayMessage(_0x2c0caa, _0x38f621);
    }
}
async function refreshChat() {
    const _0x379dbe = _0x2cc82b;
    if (!currentChatUserId) {
        showNotification('⚠️\x20No\x20chat\x20selected\x20to\x20refresh.');
        return;
    }
    showNotification(_0x379dbe(0x122) + currentChatUsername);
    try {
        const _0x3581db = await fetchAPI(_0x379dbe(0x127) + senderUserId + '/' + currentChatUserId), _0x1887e2 = chatCache[_0x379dbe(0x1f0)](currentChatUserId) || [], _0xb2df80 = _0x3581db['filter'](_0x25c09a => !_0x1887e2[_0x379dbe(0x20d)](_0x4f976b => _0x4f976b['_id'] === _0x25c09a[_0x379dbe(0x1a4)]));
        if (_0xb2df80[_0x379dbe(0x18a)] === 0x0) {
            showNotification(_0x379dbe(0x17e) + currentChatUsername);
            return;
        }
        const _0x31f2fd = [
            ..._0x1887e2,
            ..._0xb2df80
        ];
        chatCache[_0x379dbe(0x1cb)](currentChatUserId, _0x31f2fd);
        const _0x1b0763 = await Promise['all'](_0x31f2fd[_0x379dbe(0x1bf)](_0x1c1407 => encryptMessage(JSON['stringify'](_0x1c1407))));
        localStorage[_0x379dbe(0x204)](_0x379dbe(0x182) + currentChatUserId, JSON[_0x379dbe(0x1d0)](_0x1b0763)), appendMessages(_0xb2df80), showNotification(_0x379dbe(0x14a));
    } catch (_0x263d41) {
        console[_0x379dbe(0x106)]('Error\x20refreshing\x20chat:', _0x263d41), showNotification(_0x379dbe(0x1ba));
    }
}
function displayMessage(_0x380fc0, _0x5514a1) {
    const _0x22ae89 = _0x2cc82b, _0x33010a = document[_0x22ae89(0x1db)](_0x22ae89(0x11a));
    _0x33010a['classList'][_0x22ae89(0x15e)]('message', _0x5514a1 ? _0x22ae89(0x176) : _0x22ae89(0x216)), _0x33010a[_0x22ae89(0x1cc)][_0x22ae89(0x195)] = _0x380fc0[_0x22ae89(0x130)], _0x33010a[_0x22ae89(0x1cc)][_0x22ae89(0x1c0)] = detectLanguage(_0x380fc0[_0x22ae89(0x130)]);
    const _0x445dd2 = document[_0x22ae89(0x1db)](_0x22ae89(0x19c));
    _0x445dd2[_0x22ae89(0x189)][_0x22ae89(0x15e)](_0x22ae89(0x118)), _0x445dd2[_0x22ae89(0x180)] = '<i\x20class=\x22fa-solid\x20fa-trash\x22></i>', _0x445dd2[_0x22ae89(0x1da)] = () => confirmDelete(_0x33010a);
    const _0x3e5ceb = new Date(_0x380fc0['timestamp'])[_0x22ae89(0x20e)]([], {
            'year': _0x22ae89(0x10d),
            'month': _0x22ae89(0x1ab),
            'day': _0x22ae89(0x10d)
        }), _0x2be9c6 = new Date(_0x380fc0[_0x22ae89(0x107)])[_0x22ae89(0x140)]([], {
            'hour': _0x22ae89(0x10a),
            'minute': '2-digit',
            'second': _0x22ae89(0x10a)
        }), _0x323166 = _0x3e5ceb + ',\x20' + _0x2be9c6, _0x5dd751 = document[_0x22ae89(0x1db)]('span');
    _0x5dd751['classList'][_0x22ae89(0x15e)](_0x22ae89(0x107)), _0x5dd751[_0x22ae89(0x172)] = _0x323166;
    const _0x2927c3 = document[_0x22ae89(0x1db)](_0x22ae89(0x229));
    _0x2927c3['classList'][_0x22ae89(0x15e)](_0x22ae89(0x1c1));
    _0x5514a1 && (_0x2927c3['textContent'] = _0x380fc0['isRead'] ? '✔✔' : '✔');
    if (_0x380fc0[_0x22ae89(0x18f)] === _0x22ae89(0x18b)) {
        const _0x4d8d96 = document[_0x22ae89(0x1db)]('img');
        _0x4d8d96[_0x22ae89(0x150)] = _0x380fc0['fileUrl'], _0x4d8d96[_0x22ae89(0x189)][_0x22ae89(0x15e)]('chat-image'), _0x4d8d96[_0x22ae89(0x1f3)] = _0x22ae89(0x1ce), _0x4d8d96[_0x22ae89(0x1da)] = () => window['open'](_0x380fc0[_0x22ae89(0x179)], _0x22ae89(0x1fc)), _0x33010a[_0x22ae89(0x112)](_0x4d8d96);
    } else {
        const _0x4d5ccb = document['createElement']('p');
        _0x4d5ccb[_0x22ae89(0x172)] = _0x380fc0[_0x22ae89(0x130)], _0x33010a['appendChild'](_0x4d5ccb);
    }
    _0x33010a['appendChild'](_0x445dd2), _0x33010a['appendChild'](_0x5dd751), _0x33010a[_0x22ae89(0x112)](_0x2927c3), chatWindow[_0x22ae89(0x112)](_0x33010a), chatWindow[_0x22ae89(0x17c)] = chatWindow[_0x22ae89(0x1e0)], updateMessages();
}
function confirmDelete(_0xba7562) {
    const _0x4b59f6 = _0x2cc82b;
    confirm(_0x4b59f6(0x1d5)) && (_0xba7562['remove'](), showPopupMessage2(_0x4b59f6(0x12b)));
}
function intializeSocket() {
    const _0x12bb66 = _0x2cc82b;
    if (socket) {
        sendButton[_0x12bb66(0x206)](_0x12bb66(0x1f8), _0x34c42f), messageInput[_0x12bb66(0x206)]('keydown', _0x372031 => {
            const _0x16d5f8 = _0x12bb66;
            if (_0x372031[_0x16d5f8(0x20f)] === _0x16d5f8(0x168))
                _0x34c42f();
        });
        const _0x155e3e = document[_0x12bb66(0x14b)](_0x12bb66(0x160)), _0x414f6c = document[_0x12bb66(0x14b)](_0x12bb66(0x219)), _0x454897 = document['getElementById'](_0x12bb66(0x18c)), _0x13a61d = document[_0x12bb66(0x14b)](_0x12bb66(0x21a)), _0x5bd558 = document[_0x12bb66(0x14b)](_0x12bb66(0x19a));
        let _0x593e28 = null;
        _0x155e3e[_0x12bb66(0x206)](_0x12bb66(0x1f8), () => {
            _0x414f6c['click']();
        }), _0x5bd558[_0x12bb66(0x206)]('click', () => {
            const _0x42df94 = _0x12bb66;
            _0x593e28 = null, _0x454897[_0x42df94(0x151)][_0x42df94(0x20a)] = _0x42df94(0x22c), _0x414f6c[_0x42df94(0x171)] = '';
        }), _0x414f6c[_0x12bb66(0x206)](_0x12bb66(0x162), _0x5c35ec => {
            const _0x34e9ec = _0x12bb66, _0x36d847 = _0x5c35ec[_0x34e9ec(0x193)][_0x34e9ec(0x1cd)][0x0];
            if (_0x36d847) {
                _0x593e28 = _0x36d847;
                const _0x4db411 = new FileReader();
                _0x4db411[_0x34e9ec(0x1e7)] = _0x2daff1 => {
                    const _0x4e855d = _0x34e9ec;
                    _0x13a61d[_0x4e855d(0x150)] = _0x2daff1[_0x4e855d(0x193)][_0x4e855d(0x1d3)], _0x454897['style'][_0x4e855d(0x20a)] = _0x4e855d(0x1eb);
                }, _0x4db411[_0x34e9ec(0x226)](_0x36d847);
            }
        });
        async function _0x34c42f() {
            const _0x2bcfaf = _0x12bb66;
            if (!currentChatUserId)
                return;
            let _0xde0bd5 = null;
            const _0x11f454 = messageInput['value'][_0x2bcfaf(0x131)]();
            if (_0x11f454) {
                const _0x5a193e = {
                    'senderUsername': senderUsername,
                    'receiver': currentChatUserId,
                    'message': _0x11f454,
                    'type': 'text'
                };
                try {
                    socket[_0x2bcfaf(0x192)](_0x2bcfaf(0x1dc), _0x5a193e, _0x3f4641 => {
                        const _0x223e71 = _0x2bcfaf;
                        messageInput[_0x223e71(0x171)] = '', _0x3f4641?.[_0x223e71(0x106)] && alert(_0x3f4641[_0x223e71(0x106)]);
                    });
                } catch (_0x557387) {
                    console[_0x2bcfaf(0x106)](_0x2bcfaf(0x146), _0x557387['message']);
                }
            }
            if (_0x593e28) {
                showNotification('Uploading\x20image...'), loader[_0x2bcfaf(0x151)]['display'] = _0x2bcfaf(0x1eb);
                try {
                    const _0x216e9b = new FormData();
                    _0x216e9b[_0x2bcfaf(0x220)](_0x2bcfaf(0x18b), _0x593e28);
                    const _0x35b33a = await apiRequest(_0x2bcfaf(0x163), {
                            'method': _0x2bcfaf(0x11c),
                            'headers': { 'Authorization': _0x2bcfaf(0x217) + localStorage[_0x2bcfaf(0x10f)](_0x2bcfaf(0x1dd)) },
                            'body': _0x216e9b
                        }), _0x1fc5a6 = await _0x35b33a['json']();
                    if (!_0x1fc5a6[_0x2bcfaf(0x1f5)]) {
                        showNotification(_0x2bcfaf(0x1b2)), loader['style'][_0x2bcfaf(0x20a)] = _0x2bcfaf(0x22c), showPopupMessage(_0x1fc5a6['message'] || _0x2bcfaf(0x1e5));
                        return;
                    }
                    _0x1fc5a6?.['error'] && (loader[_0x2bcfaf(0x151)][_0x2bcfaf(0x20a)] = _0x2bcfaf(0x22c), alert(_0x1fc5a6['error']));
                    _0xde0bd5 = _0x1fc5a6[_0x2bcfaf(0x1f5)];
                    const _0xf0a119 = {
                        'senderUsername': senderUsername,
                        'receiver': currentChatUserId,
                        'message': _0x2bcfaf(0x15c),
                        'type': _0x2bcfaf(0x18b),
                        'fileUrl': _0xde0bd5
                    };
                    socket['emit'](_0x2bcfaf(0x1dc), _0xf0a119, _0x12f115 => {
                        const _0x53811d = _0x2bcfaf;
                        _0x12f115?.[_0x53811d(0x106)] && alert(_0x12f115[_0x53811d(0x106)]);
                    }), _0x593e28 = null, loader[_0x2bcfaf(0x151)][_0x2bcfaf(0x20a)] = _0x2bcfaf(0x22c), _0x454897['style']['display'] = _0x2bcfaf(0x22c), _0x414f6c[_0x2bcfaf(0x171)] = '';
                } catch (_0x366a4d) {
                    loader[_0x2bcfaf(0x151)][_0x2bcfaf(0x20a)] = 'none', showNotification('Error:\x20File\x20size\x20exceeded\x20or\x20too\x20many\x20requests'), console[_0x2bcfaf(0x106)](_0x2bcfaf(0x222), _0x366a4d[_0x2bcfaf(0x130)]);
                }
            }
        }
        socket['on']('receiveMessage', async _0x410ef1 => {
            const _0x18ac59 = _0x12bb66;
            if (_0x410ef1[_0x18ac59(0x22b)] === senderUserId || _0x410ef1[_0x18ac59(0x105)] === senderUserId) {
                _0x2951ac[_0x18ac59(0x151)][_0x18ac59(0x20a)] = _0x18ac59(0x22c), displayMessage(_0x410ef1, _0x410ef1[_0x18ac59(0x105)] === senderUserId);
                _0x410ef1[_0x18ac59(0x105)] !== senderUserId && _0x1a1918();
                const _0x1d120b = {
                        ..._0x410ef1,
                        'sender': { '_id': _0x410ef1[_0x18ac59(0x105)] },
                        'receiver': { '_id': _0x410ef1[_0x18ac59(0x22b)] }
                    }, _0x5dd4cc = chatCache[_0x18ac59(0x1f0)](currentChatUserId) || [];
                if (_0x1d120b[_0x18ac59(0x1a4)] && !_0x5dd4cc['some'](_0x1e4247 => _0x1e4247['_id'] === _0x1d120b['_id'])) {
                    const _0x455731 = [
                        ..._0x5dd4cc,
                        _0x1d120b
                    ];
                    chatCache['set'](currentChatUserId, _0x455731);
                    const _0x4305f2 = await Promise[_0x18ac59(0x1b0)](_0x455731[_0x18ac59(0x1bf)](_0x5acf68 => encryptMessage(JSON['stringify'](_0x5acf68))));
                    localStorage['setItem'](_0x18ac59(0x182) + currentChatUserId, JSON['stringify'](_0x4305f2));
                }
            }
        });
        const _0x25a766 = new Audio(_0x12bb66(0x21f));
        function _0x1a1918() {
            const _0x4d10b5 = _0x12bb66;
            _0x25a766['currentTime'] = 0x0, _0x25a766[_0x4d10b5(0x21d)]()[_0x4d10b5(0x1b4)](_0x188a40 => console[_0x4d10b5(0x106)](_0x4d10b5(0x185), _0x188a40));
        }
        let _0x122ea1, _0x295159 = !![];
        const _0x2951ac = document[_0x12bb66(0x14b)](_0x12bb66(0x19e));
        messageInput['addEventListener']('input', () => {
            const _0x2d0b17 = _0x12bb66;
            currentChatUserId && senderUserId !== currentChatUserId && (_0x295159 && socket && (socket[_0x2d0b17(0x192)](_0x2d0b17(0x181), {
                'senderId': senderUserId,
                'receiverId': currentChatUserId
            }), _0x295159 = ![], setTimeout(() => {
                _0x295159 = !![];
            }, 0x5dc)), clearTimeout(_0x122ea1));
        }), socket && socket['on'](_0x12bb66(0x181), ({senderId: _0x2f5f64}) => {
            const _0x549b79 = _0x12bb66;
            _0x2f5f64 !== senderUserId && currentChatUserId === _0x2f5f64 && (updateStatus('Typing'), _0x2951ac['style'][_0x549b79(0x20a)] !== 'flex' && (_0x2951ac[_0x549b79(0x151)][_0x549b79(0x20a)] = _0x549b79(0x213), _0x2951ac[_0x549b79(0x180)] = '\x0a\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22typing-dots\x22>\x0a\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span></span><span></span><span></span>\x0a\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x09\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), clearTimeout(_0x122ea1), _0x122ea1 = setTimeout(() => {
                const _0x5bc660 = _0x549b79;
                updateStatus(_0x5bc660(0x1c4)), _0x2951ac[_0x5bc660(0x151)][_0x5bc660(0x20a)] = _0x5bc660(0x22c);
            }, 0xbb8));
        }), document[_0x12bb66(0x206)](_0x12bb66(0x1af), () => {
            const _0x5667fb = _0x12bb66;
            socket && (document[_0x5667fb(0x1e4)] ? socket[_0x5667fb(0x192)](_0x5667fb(0x1fb), { 'senderUserId': senderUserId }) : (senderId = senderUserId, receiverId = currentChatUserId, socket[_0x5667fb(0x192)](_0x5667fb(0x202), {
                'senderId': senderId,
                'receiverId': receiverId
            }), socket[_0x5667fb(0x192)]('userOnline', { 'senderUserId': senderUserId })));
        }), window['addEventListener'](_0x12bb66(0x225), () => {
            const _0x20eb2c = _0x12bb66;
            socket && socket[_0x20eb2c(0x192)]('userOffline', { 'senderUserId': senderUserId });
        }), socket['on']('userOnline', ({senderUserId: _0x5147b4}) => {
            const _0x53e6a5 = _0x12bb66;
            userId = _0x5147b4;
            const _0x5293c = document[_0x53e6a5(0x20b)]('[data-user-id=\x27' + userId + '\x27]');
            _0x5293c ? (_0x5293c[_0x53e6a5(0x189)][_0x53e6a5(0x145)](_0x53e6a5(0x134), _0x53e6a5(0x133), _0x53e6a5(0x13d)), _0x5293c[_0x53e6a5(0x189)]['add'](_0x53e6a5(0x13d))) : '🤯🤯🤯', userElement2 && currentChatUserId === _0x5147b4 && (userElement2['classList'][_0x53e6a5(0x145)](_0x53e6a5(0x134), _0x53e6a5(0x133), _0x53e6a5(0x13d)), userElement2[_0x53e6a5(0x189)]['add'](_0x53e6a5(0x13d)), updateStatus(_0x53e6a5(0x1c4)));
        }), socket['on'](_0x12bb66(0x1a9), ({senderUserId: _0x79cc68}) => {
            const _0xc7202e = _0x12bb66;
            updateStatus('Offline'), userId = _0x79cc68;
            const _0x6694e3 = document['querySelector'](_0xc7202e(0x1ff) + userId + '\x27]');
            _0x6694e3 && (_0x6694e3[_0xc7202e(0x189)][_0xc7202e(0x145)](_0xc7202e(0x134), _0xc7202e(0x133), _0xc7202e(0x13d)), _0x6694e3[_0xc7202e(0x189)][_0xc7202e(0x15e)]('offline')), userElement2 && currentChatUserId === _0x79cc68 && (userElement2[_0xc7202e(0x189)]['remove'](_0xc7202e(0x134), _0xc7202e(0x133), 'online'), userElement2[_0xc7202e(0x189)][_0xc7202e(0x15e)]('offline'), checkUserAvailability(currentChatUserId));
        }), socket['on']('userBusy', ({senderUserId: _0x5e52a9}) => {
            const _0xd7c11 = _0x12bb66;
            userId = _0x5e52a9;
            const _0x50e14a = document[_0xd7c11(0x20b)]('[data-user-id=\x27' + userId + '\x27]');
            _0x50e14a && (_0x50e14a[_0xd7c11(0x189)][_0xd7c11(0x145)](_0xd7c11(0x134), _0xd7c11(0x133), _0xd7c11(0x13d)), _0x50e14a[_0xd7c11(0x189)]['add']('busy')), userElement2 && currentChatUserId === _0x5e52a9 && (userElement2[_0xd7c11(0x189)]['remove'](_0xd7c11(0x134), _0xd7c11(0x133), _0xd7c11(0x13d)), userElement2[_0xd7c11(0x189)][_0xd7c11(0x15e)](_0xd7c11(0x133)), updateStatus(_0xd7c11(0x170)));
        }), socket['on'](_0x12bb66(0x1ae), _0x2c1754 => {
            const _0x1e749d = _0x12bb66, {
                    chatId: _0x3d60f8,
                    readerId: _0x54b579
                } = _0x2c1754;
            currentChatUserId === _0x54b579 && senderUserId === _0x3d60f8 && (console[_0x1e749d(0x1ed)](_0x1e749d(0x152) + _0x54b579 + _0x1e749d(0x11d) + _0x3d60f8), lol());
        });
    } else
        console['log']('socket:', socket), console[_0x12bb66(0x1ed)]('🔴\x20Socket\x20undefined:\x20Likely\x20due\x20to\x20socket\x20initialisation\x20asynchronous');
    socket['on'](_0x12bb66(0x15f), _0x551566 => {
        const _0x1566e3 = _0x12bb66;
        console['log'](_0x1566e3(0x13b), _0x551566), document['getElementById'](_0x1566e3(0x111))['textContent'] = '⚠️\x20Disconnected', document[_0x1566e3(0x14b)](_0x1566e3(0x111))[_0x1566e3(0x189)]['remove']('con', _0x1566e3(0x138)), document['getElementById'](_0x1566e3(0x111))[_0x1566e3(0x189)][_0x1566e3(0x15e)](_0x1566e3(0x138));
    }), socket['on'](_0x12bb66(0x1ad), _0x2f4526 => {
        const _0x235b50 = _0x12bb66;
        console['error'](_0x235b50(0x1fe), _0x2f4526), document[_0x235b50(0x14b)]('socket-status')['textContent'] = _0x235b50(0x1c8), document[_0x235b50(0x14b)](_0x235b50(0x111))[_0x235b50(0x189)]['remove']('con', _0x235b50(0x138)), document['getElementById'](_0x235b50(0x111))[_0x235b50(0x189)][_0x235b50(0x15e)]('dis');
    }), socket['on'](_0x12bb66(0x208), _0x1382a2 => {
        const _0x441c7a = _0x12bb66;
        console['log'](_0x441c7a(0x228) + _0x1382a2), document['getElementById']('socket-status')[_0x441c7a(0x172)] = '🛜\x20Reconnected\x20(Attempt\x20' + _0x1382a2 + ')', document[_0x441c7a(0x14b)](_0x441c7a(0x111))[_0x441c7a(0x189)][_0x441c7a(0x145)](_0x441c7a(0x184), _0x441c7a(0x138)), document['getElementById'](_0x441c7a(0x111))[_0x441c7a(0x189)][_0x441c7a(0x15e)](_0x441c7a(0x184));
    }), socket['on'](_0x12bb66(0x194), _0x5dc0d5 => {
        const _0x1a9ddd = _0x12bb66;
        console[_0x1a9ddd(0x106)](_0x1a9ddd(0x1ca), _0x5dc0d5), document[_0x1a9ddd(0x14b)](_0x1a9ddd(0x111))[_0x1a9ddd(0x172)] = _0x1a9ddd(0x214), document[_0x1a9ddd(0x14b)](_0x1a9ddd(0x111))['classList'][_0x1a9ddd(0x145)](_0x1a9ddd(0x184), _0x1a9ddd(0x138)), document[_0x1a9ddd(0x14b)](_0x1a9ddd(0x111))[_0x1a9ddd(0x189)][_0x1a9ddd(0x15e)](_0x1a9ddd(0x138));
    });
}
async function toggleBlockUser() {
    const _0x427106 = _0x2cc82b;
    if (!currentChatUserId) {
        showPopupMessage2('Error:\x20No\x20user\x20selected\x20to\x20block.');
        return;
    }
    const _0x5b611d = blockButton[_0x427106(0x1cc)][_0x427106(0x212)] === _0x427106(0x175), _0x544307 = _0x5b611d ? _0x427106(0x211) : 'block-user';
    if (!confirm(_0x427106(0x125) + _0x544307 + '\x20' + currentChatUsername + '?'))
        return;
    try {
        const _0x6ecf65 = {
                'blockUserId': currentChatUserId,
                'unblockUserId': currentChatUserId
            }, _0x6c8a29 = await apiRequest(_0x427106(0x114) + _0x544307, {
                'method': 'POST',
                'headers': {
                    'Content-Type': _0x427106(0x16d),
                    'Authorization': _0x427106(0x217) + localStorage[_0x427106(0x10f)](_0x427106(0x1dd))
                },
                'body': JSON[_0x427106(0x1d0)](_0x6ecf65)
            }), _0xa565b = await _0x6c8a29[_0x427106(0x1b9)]();
        _0x6c8a29['ok'] ? (blockButton[_0x427106(0x172)] = _0x5b611d ? 'Block' : 'Unblock', blockButton[_0x427106(0x1cc)][_0x427106(0x212)] = !_0x5b611d, socket['emit']('leaveRoom', { 'currentChatUserId': currentChatUserId }), showPopupMessage(currentChatUsername + _0x427106(0x1d2) + (_0x5b611d ? 'unblocked' : _0x427106(0x212)) + '.'), _0x5b611d && (recipientUserId = currentChatUserId, socket ? socket[_0x427106(0x192)](_0x427106(0x1e3), { 'recipientUserId': recipientUserId }) : console[_0x427106(0x106)](_0x427106(0x191), recipientUserId))) : alert(_0xa565b[_0x427106(0x106)] || 'Error\x20blocking\x20user.');
    } catch (_0x3bf06e) {
        console['error'](_0x427106(0x17d), _0x3bf06e[_0x427106(0x130)]);
    }
}
async function markMessagesssssAsRead(_0x4509d3, _0xd3fdf) {
    const _0x579d21 = _0x2cc82b;
    try {
        const _0x31c1c5 = await apiRequest('/api/chats/mark-read', {
                'method': _0x579d21(0x113),
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': _0x579d21(0x217) + localStorage['getItem'](_0x579d21(0x1dd))
                },
                'body': JSON['stringify']({
                    'senderId': senderUserId,
                    'receiverId': currentChatUserId
                })
            }), _0x5e98c7 = await _0x31c1c5['json']();
        _0x31c1c5['ok'] ? (console[_0x579d21(0x1ed)](_0x579d21(0x201), _0x5e98c7[_0x579d21(0x136)]), io['to'](_0x4509d3)[_0x579d21(0x192)]('messagesRead', {
            'readerId': readerId,
            'chatId': chatId
        })) : console['error'](_0x579d21(0x199), _0x5e98c7['error']);
    } catch (_0xb7cf91) {
        console[_0x579d21(0x106)](_0x579d21(0x1e2), _0xb7cf91);
    }
}
async function updateBlockButton() {
    const _0x3a7aca = _0x2cc82b;
    if (!currentChatUserId) {
        showPopupMessage(_0x3a7aca(0x121));
        return;
    }
    try {
        const _0x487a03 = await apiRequest(_0x3a7aca(0x207) + currentChatUserId, {
            'method': 'GET',
            'headers': { 'Authorization': _0x3a7aca(0x217) + localStorage[_0x3a7aca(0x10f)](_0x3a7aca(0x1dd)) }
        });
        if (!_0x487a03['ok'])
            throw new Error(_0x3a7aca(0x1ee) + _0x487a03[_0x3a7aca(0x13f)]);
        const _0x28f874 = await _0x487a03[_0x3a7aca(0x1b9)]();
        if (typeof _0x28f874[_0x3a7aca(0x198)] === _0x3a7aca(0x1b6))
            throw new Error(_0x3a7aca(0x190));
        blockButton['textContent'] = _0x28f874['isBlocked'] ? _0x3a7aca(0x116) : _0x3a7aca(0x21b), blockButton[_0x3a7aca(0x1cc)][_0x3a7aca(0x212)] = _0x28f874['isBlocked']['toString']();
    } catch (_0x1a42f9) {
        console[_0x3a7aca(0x106)](_0x3a7aca(0x177), _0x1a42f9), blockButton['style'][_0x3a7aca(0x20a)] = 'none';
    }
}
function toggleDropdown() {
    const _0x5a31e0 = _0x2cc82b, _0x5ea67b = document[_0x5a31e0(0x14b)]('dropdown-menu');
    _0x5ea67b['classList'][_0x5a31e0(0x129)](_0x5a31e0(0x141)) ? (_0x5ea67b[_0x5a31e0(0x189)]['remove'](_0x5a31e0(0x141)), setTimeout(() => _0x5ea67b['style'][_0x5a31e0(0x20a)] = _0x5a31e0(0x22c), 0xc8)) : (_0x5ea67b[_0x5a31e0(0x151)][_0x5a31e0(0x20a)] = 'block', setTimeout(() => _0x5ea67b['classList'][_0x5a31e0(0x15e)](_0x5a31e0(0x141)), 0xa));
}
document[_0x2cc82b(0x206)](_0x2cc82b(0x1f8), function (_0x437cfd) {
    const _0x21653b = _0x2cc82b, _0xd24481 = document[_0x21653b(0x14b)](_0x21653b(0x11f)), _0x2a2a40 = document[_0x21653b(0x14b)](_0x21653b(0x167));
    !_0x2a2a40[_0x21653b(0x129)](_0x437cfd[_0x21653b(0x193)]) && !_0xd24481[_0x21653b(0x129)](_0x437cfd[_0x21653b(0x193)]) && (_0xd24481['classList']['remove'](_0x21653b(0x141)), setTimeout(() => _0xd24481[_0x21653b(0x151)]['display'] = _0x21653b(0x22c), 0xc8));
});
async function checkUserAvailability(_0x5d95be) {
    const _0x2ad32b = _0x2cc82b;
    try {
        const _0xa153a9 = await apiRequest('/api/chats/availability/' + _0x5d95be, {
            'method': _0x2ad32b(0x17a),
            'headers': { 'Authorization': _0x2ad32b(0x217) + localStorage[_0x2ad32b(0x10f)](_0x2ad32b(0x1dd)) }
        });
        if (!_0xa153a9['ok'])
            throw new Error('User\x20not\x20found\x20or\x20server\x20error');
        const _0x34e70a = await _0xa153a9['json']();
        _0x34e70a[_0x2ad32b(0x21e)] ? (updateStatus(_0x2ad32b(0x1c4)), chatUserElement[_0x2ad32b(0x189)][_0x2ad32b(0x15e)](_0x2ad32b(0x13d)), chatUserElement[_0x2ad32b(0x189)][_0x2ad32b(0x145)]('offline')) : (chatUserElement[_0x2ad32b(0x189)][_0x2ad32b(0x15e)](_0x2ad32b(0x134)), chatUserElement['classList'][_0x2ad32b(0x145)](_0x2ad32b(0x13d)));
        if (lastActiveElement) {
            if (chatUserElement[_0x2ad32b(0x189)][_0x2ad32b(0x129)](_0x2ad32b(0x134))) {
                const _0x36300c = new Date(_0x34e70a[_0x2ad32b(0x12a)]), _0x4ec82d = new Date(), _0x43612c = _0x36300c[_0x2ad32b(0x140)](_0x2ad32b(0x1c5), {
                        'hour': _0x2ad32b(0x10a),
                        'minute': _0x2ad32b(0x10a),
                        'hour12': !![]
                    }), _0x51fa04 = new Intl['DateTimeFormat']([], {
                        'year': 'numeric',
                        'month': _0x2ad32b(0x10a),
                        'day': _0x2ad32b(0x10a)
                    }), _0x45c096 = _0x36300c[_0x2ad32b(0x124)]() === _0x4ec82d[_0x2ad32b(0x124)](), _0x309b99 = _0x36300c[_0x2ad32b(0x119)]() === _0x4ec82d[_0x2ad32b(0x119)]() - 0x1 && _0x36300c[_0x2ad32b(0x1e1)]() === _0x4ec82d['getMonth']() && _0x36300c[_0x2ad32b(0x139)]() === _0x4ec82d['getFullYear']();
                let _0x4c68b7;
                if (_0x45c096)
                    _0x4c68b7 = _0x2ad32b(0x203) + _0x43612c;
                else
                    _0x309b99 ? _0x4c68b7 = _0x2ad32b(0x12c) + _0x43612c : _0x4c68b7 = 'Last\x20Seen:\x20' + _0x51fa04[_0x2ad32b(0x19d)](_0x36300c) + '\x20' + _0x43612c;
                lastActiveElement[_0x2ad32b(0x172)] = _0x4c68b7;
            }
        }
    } catch (_0x5c1ed0) {
        console[_0x2ad32b(0x106)](_0x2ad32b(0x110), _0x5c1ed0);
    }
}
function updateStatus(_0x2d629b) {
    const _0x581810 = _0x2cc82b;
    lastActiveElement[_0x581810(0x151)]['transition'] = _0x581810(0x15a), lastActiveElement['style'][_0x581810(0x209)] = '0', setTimeout(() => {
        const _0x226929 = _0x581810;
        if (_0x2d629b === _0x226929(0x1c4))
            lastActiveElement['textContent'] = 'Online', lastActiveElement[_0x226929(0x151)][_0x226929(0x165)] = _0x226929(0x1a5), lastActiveElement[_0x226929(0x151)][_0x226929(0x161)] = 'bold';
        else {
            if (_0x2d629b === _0x226929(0x170))
                lastActiveElement[_0x226929(0x172)] = _0x226929(0x1b7), lastActiveElement[_0x226929(0x151)]['color'] = _0x226929(0x14d), lastActiveElement[_0x226929(0x151)]['fontWeight'] = _0x226929(0x1b1);
            else {
                if (_0x2d629b === _0x226929(0x17f))
                    lastActiveElement[_0x226929(0x172)] = _0x226929(0x17f), lastActiveElement[_0x226929(0x151)][_0x226929(0x165)] = _0x226929(0x221), lastActiveElement[_0x226929(0x151)][_0x226929(0x161)] = _0x226929(0x1b1);
                else
                    _0x2d629b === _0x226929(0x1ac) && (lastActiveElement[_0x226929(0x172)] = _0x226929(0x1cf), lastActiveElement[_0x226929(0x151)][_0x226929(0x165)] = _0x226929(0x188), lastActiveElement[_0x226929(0x151)][_0x226929(0x161)] = _0x226929(0x1b1));
            }
        }
        lastActiveElement[_0x226929(0x151)][_0x226929(0x209)] = '1';
    }, 0x12c);
}
function lol() {
    const _0x5e61c9 = _0x2cc82b;
    document[_0x5e61c9(0x11e)](_0x5e61c9(0x1d1))['forEach'](_0x3c4bc9 => {
        const _0x2d6985 = _0x5e61c9;
        _0x3c4bc9[_0x2d6985(0x172)] === '✔' && (_0x3c4bc9[_0x2d6985(0x172)] = '✔✔');
    });
}
function setViewportHeight() {
    const _0x2204fa = _0x2cc82b;
    document[_0x2204fa(0x1e8)][_0x2204fa(0x151)][_0x2204fa(0x1f9)]('--vh', window[_0x2204fa(0x166)] * 0.01 + 'px');
}
window[_0x2cc82b(0x206)](_0x2cc82b(0x1a0), setViewportHeight), setViewportHeight();
function showChatPanel() {
    const _0x572006 = _0x2cc82b;
    document[_0x572006(0x20b)](_0x572006(0x164))[_0x572006(0x189)][_0x572006(0x15e)](_0x572006(0x142));
}
function showUserListPanel() {
    const _0x1ca235 = _0x2cc82b;
    document[_0x1ca235(0x20b)](_0x1ca235(0x164))[_0x1ca235(0x189)]['remove']('show-chat');
}
document['querySelector'](_0x2cc82b(0x227))[_0x2cc82b(0x206)](_0x2cc82b(0x1f8), _0x3c7cf5 => {
    window['innerWidth'] <= 0x300 && showChatPanel();
}), document[_0x2cc82b(0x20b)](_0x2cc82b(0x1d7))['addEventListener'](_0x2cc82b(0x1f8), _0x193746 => {
    const _0x383dfc = _0x2cc82b;
    window[_0x383dfc(0x149)] <= 0x300 && showUserListPanel();
});
const savedImage = localStorage[_0x2cc82b(0x10f)](_0x2cc82b(0x15b));
document['getElementById'](_0x2cc82b(0x159))[_0x2cc82b(0x150)] = savedImage || _0x2cc82b(0x137);
function showNotification(_0x3f049b) {
    const _0x5479c3 = _0x2cc82b, _0x5f29e1 = document[_0x5479c3(0x1db)](_0x5479c3(0x11a));
    _0x5f29e1[_0x5479c3(0x172)] = _0x3f049b, _0x5f29e1[_0x5479c3(0x151)][_0x5479c3(0x1bc)] = 'position:\x20fixed;\x20top:\x2070px;\x20right:\x2010px;\x20background:\x20#007bff;\x20color:\x20white;\x20padding:\x208px;\x20border-radius:\x204px;\x20z-index:\x201000;', document[_0x5479c3(0x10b)][_0x5479c3(0x112)](_0x5f29e1), setTimeout(() => _0x5f29e1[_0x5479c3(0x145)](), 0xbb8);
}
async function generateKey() {
    const _0x469fa9 = _0x2cc82b;
    if (sessionStorage[_0x469fa9(0x10f)](_0x469fa9(0x17b)))
        return;
    const _0xa18a38 = await crypto[_0x469fa9(0x1bd)][_0x469fa9(0x156)]({
            'name': _0x469fa9(0x169),
            'length': 0x100
        }, !![], [
            _0x469fa9(0x1a2),
            _0x469fa9(0x210)
        ]), _0x3d8fb3 = new Uint8Array(await crypto['subtle'][_0x469fa9(0x16f)]('raw', _0xa18a38));
    sessionStorage[_0x469fa9(0x204)](_0x469fa9(0x17b), JSON['stringify'](Array[_0x469fa9(0x13a)](_0x3d8fb3)));
}
function _0x1eec(_0x558717, _0x3d56db) {
    const _0x175985 = _0x1759();
    return _0x1eec = function (_0x1eecc3, _0x4e0c08) {
        _0x1eecc3 = _0x1eecc3 - 0x105;
        let _0x18005d = _0x175985[_0x1eecc3];
        if (_0x1eec['lxiKwt'] === undefined) {
            var _0x475b1c = function (_0x43e560) {
                const _0x4ed1be = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x356b14 = '', _0xf88d27 = '';
                for (let _0x168f45 = 0x0, _0x2592c5, _0x471dee, _0x2c6554 = 0x0; _0x471dee = _0x43e560['charAt'](_0x2c6554++); ~_0x471dee && (_0x2592c5 = _0x168f45 % 0x4 ? _0x2592c5 * 0x40 + _0x471dee : _0x471dee, _0x168f45++ % 0x4) ? _0x356b14 += String['fromCharCode'](0xff & _0x2592c5 >> (-0x2 * _0x168f45 & 0x6)) : 0x0) {
                    _0x471dee = _0x4ed1be['indexOf'](_0x471dee);
                }
                for (let _0x8ec5c6 = 0x0, _0xe64b8e = _0x356b14['length']; _0x8ec5c6 < _0xe64b8e; _0x8ec5c6++) {
                    _0xf88d27 += '%' + ('00' + _0x356b14['charCodeAt'](_0x8ec5c6)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0xf88d27);
            };
            _0x1eec['IrpevF'] = _0x475b1c, _0x558717 = arguments, _0x1eec['lxiKwt'] = !![];
        }
        const _0x5ee4f9 = _0x175985[0x0], _0x9c2ace = _0x1eecc3 + _0x5ee4f9, _0x339d73 = _0x558717[_0x9c2ace];
        return !_0x339d73 ? (_0x18005d = _0x1eec['IrpevF'](_0x18005d), _0x558717[_0x9c2ace] = _0x18005d) : _0x18005d = _0x339d73, _0x18005d;
    }, _0x1eec(_0x558717, _0x3d56db);
}
generateKey();
async function getKey() {
    const _0x26b798 = _0x2cc82b, _0x423fa2 = JSON[_0x26b798(0x22a)](sessionStorage[_0x26b798(0x10f)](_0x26b798(0x17b))), _0x19d146 = new Uint8Array(_0x423fa2);
    return await crypto[_0x26b798(0x1bd)]['importKey'](_0x26b798(0x12f), _0x19d146, { 'name': _0x26b798(0x169) }, !![], [
        'encrypt',
        _0x26b798(0x210)
    ]);
}
async function encryptMessage(_0x194c0a) {
    const _0x46f72f = _0x2cc82b, _0x188350 = await getKey(), _0x4cd9c3 = crypto[_0x46f72f(0x1aa)](new Uint8Array(0xc)), _0x46d608 = new TextEncoder()['encode'](_0x194c0a), _0x29f6d3 = await crypto[_0x46f72f(0x1bd)][_0x46f72f(0x1a2)]({
            'name': 'AES-GCM',
            'iv': _0x4cd9c3
        }, _0x188350, _0x46d608);
    return JSON['stringify']({
        'iv': Array['from'](_0x4cd9c3),
        'data': Array[_0x46f72f(0x13a)](new Uint8Array(_0x29f6d3))
    });
}
async function decryptMessage(_0x7682d) {
    const _0x32f11d = _0x2cc82b;
    try {
        const _0x4e6124 = await getKey(), _0x2f2a0d = JSON[_0x32f11d(0x22a)](_0x7682d), _0x1035bb = new Uint8Array(_0x2f2a0d['iv']), _0x2626e2 = new Uint8Array(_0x2f2a0d['data']), _0x174d5c = await crypto[_0x32f11d(0x1bd)]['decrypt']({
                'name': 'AES-GCM',
                'iv': _0x1035bb
            }, _0x4e6124, _0x2626e2);
        return new TextDecoder()[_0x32f11d(0x1c3)](_0x174d5c);
    } catch (_0x1594f5) {
        return console[_0x32f11d(0x106)](_0x32f11d(0x1fd), _0x1594f5), null;
    }
}
async function loadChatCache() {
    const _0x501edc = _0x2cc82b;
    showNotification(_0x501edc(0x223));
    let _0x22db18 = ![];
    for (let _0x3d250f = 0x0; _0x3d250f < localStorage[_0x501edc(0x18a)]; _0x3d250f++) {
        const _0x3c5ff7 = localStorage[_0x501edc(0x20f)](_0x3d250f);
        if (_0x3c5ff7['startsWith'](_0x501edc(0x182))) {
            const _0x1a8d8d = _0x3c5ff7[_0x501edc(0x1c7)]('_')[0x1], _0xfcebce = localStorage[_0x501edc(0x10f)](_0x3c5ff7);
            if (_0xfcebce)
                try {
                    const _0xaf2f52 = await Promise['all'](JSON['parse'](_0xfcebce)[_0x501edc(0x1bf)](async _0x23327c => {
                        const _0x33fc3c = _0x501edc, _0x10b652 = await decryptMessage(_0x23327c);
                        if (_0x10b652 === null)
                            throw new Error(_0x33fc3c(0x16c));
                        return JSON['parse'](_0x10b652);
                    }));
                    chatCache[_0x501edc(0x1cb)](_0x1a8d8d, _0xaf2f52);
                } catch (_0x90c276) {
                    console['error'](_0x501edc(0x13e) + _0x1a8d8d + ':', _0x90c276), localStorage[_0x501edc(0x196)](_0x3c5ff7), console[_0x501edc(0x135)]('Removed\x20corrupted\x20chat\x20cache\x20for\x20user\x20' + _0x1a8d8d), _0x22db18 = !![];
                }
        }
    }
    _0x22db18 ? showNotification(_0x501edc(0x1a6)) : showNotification('✅\x20Chat\x20Cache\x20Loaded\x20Successfully.');
}
window[_0x2cc82b(0x206)](_0x2cc82b(0x157), loadChatCache), document['addEventListener'](_0x2cc82b(0x132), () => {
    const _0x36b77d = _0x2cc82b, _0x36070d = document[_0x36b77d(0x14b)](_0x36b77d(0x1f2)), _0x27977b = document[_0x36b77d(0x14b)](_0x36b77d(0x224)), _0x25ebad = document[_0x36b77d(0x14b)](_0x36b77d(0x117)), _0x37dbf8 = new EmojiMart[(_0x36b77d(0x158))]({
            'onEmojiSelect': _0x5eedeb => {
                const _0x48c803 = _0x36b77d;
                _0x27977b[_0x48c803(0x171)] += _0x5eedeb[_0x48c803(0x1be)];
            },
            'theme': 'light'
        });
    _0x25ebad[_0x36b77d(0x112)](_0x37dbf8), _0x36070d[_0x36b77d(0x206)](_0x36b77d(0x1f8), () => {
        const _0x46ecb4 = _0x36b77d;
        _0x25ebad[_0x46ecb4(0x189)]['toggle'](_0x46ecb4(0x1e4));
    }), document['addEventListener']('click', _0x201477 => {
        const _0xa14f6e = _0x36b77d;
        !_0x25ebad['contains'](_0x201477[_0xa14f6e(0x193)]) && _0x201477[_0xa14f6e(0x193)] !== _0x36070d && _0x25ebad['classList'][_0xa14f6e(0x15e)](_0xa14f6e(0x1e4));
    });
}), document[_0x2cc82b(0x14b)](_0x2cc82b(0x1de))[_0x2cc82b(0x1da)] = function () {
    const _0x92470 = _0x2cc82b;
    document[_0x92470(0x14b)]('wallpaperModal')['style'][_0x92470(0x20a)] = 'block';
};
function closeModal() {
    const _0x46e19c = _0x2cc82b;
    document['getElementById'](_0x46e19c(0x1a3))[_0x46e19c(0x151)][_0x46e19c(0x20a)] = _0x46e19c(0x22c);
}
function setChatBackground(_0x4648dc) {
    const _0x2a64cf = _0x2cc82b, _0x35e2fe = document[_0x2a64cf(0x20b)](_0x2a64cf(0x205));
    _0x35e2fe['style']['background'] = _0x4648dc, _0x35e2fe[_0x2a64cf(0x151)][_0x2a64cf(0x197)] = _0x2a64cf(0x174), _0x35e2fe[_0x2a64cf(0x151)][_0x2a64cf(0x1a7)] = 'center', localStorage[_0x2a64cf(0x204)](_0x2a64cf(0x15d), _0x4648dc), closeModal();
}
function resetChatBackground() {
    const _0x1113c8 = _0x2cc82b;
    document[_0x1113c8(0x20b)](_0x1113c8(0x205))['style']['background'] = '', localStorage['removeItem'](_0x1113c8(0x15d)), closeModal();
}
window[_0x2cc82b(0x1e7)] = function () {
    const _0x388abd = _0x2cc82b;
    let _0x355bdd = localStorage['getItem'](_0x388abd(0x15d));
    if (_0x355bdd) {
        let _0x552f5c = document[_0x388abd(0x20b)](_0x388abd(0x205));
        _0x552f5c['style'][_0x388abd(0x108)] = _0x355bdd, _0x552f5c['style']['backgroundSize'] = _0x388abd(0x174), _0x552f5c[_0x388abd(0x151)][_0x388abd(0x1a7)] = _0x388abd(0x1c2);
    }
}, document[_0x2cc82b(0x206)](_0x2cc82b(0x132), function () {
    const _0x47fd13 = _0x2cc82b, _0x20969f = document[_0x47fd13(0x14b)]('blur-btn'), _0x5ee5e0 = document[_0x47fd13(0x14b)](_0x47fd13(0x12d)), _0x37ed42 = document[_0x47fd13(0x14b)](_0x47fd13(0x21c)), _0x121219 = document[_0x47fd13(0x14b)](_0x47fd13(0x1d9)), _0x361b8f = document['getElementById']('close-blur-slider');
    let _0xd73192 = localStorage[_0x47fd13(0x10f)]('chatBlur') || 0x5;
    document[_0x47fd13(0x1e8)][_0x47fd13(0x151)]['setProperty']('--blur-value', _0xd73192 + 'px'), _0x37ed42[_0x47fd13(0x171)] = _0xd73192, _0x121219[_0x47fd13(0x172)] = _0xd73192, _0x20969f[_0x47fd13(0x206)](_0x47fd13(0x1f8), function () {
        const _0x926f7a = _0x47fd13;
        _0x5ee5e0[_0x926f7a(0x151)][_0x926f7a(0x20a)] = _0x926f7a(0x1eb);
    }), _0x37ed42[_0x47fd13(0x206)](_0x47fd13(0x18e), function () {
        const _0x572a07 = _0x47fd13;
        document[_0x572a07(0x1e8)][_0x572a07(0x151)][_0x572a07(0x1f9)](_0x572a07(0x144), this['value'] + 'px'), _0x121219[_0x572a07(0x172)] = this[_0x572a07(0x171)], localStorage[_0x572a07(0x204)](_0x572a07(0x1ea), this[_0x572a07(0x171)]);
    }), _0x361b8f['addEventListener']('click', function () {
        const _0x440c23 = _0x47fd13;
        _0x5ee5e0[_0x440c23(0x151)][_0x440c23(0x20a)] = _0x440c23(0x22c);
    });
});
function clearChatCache(_0x47272a) {
    const _0x53ccb1 = _0x2cc82b;
    if (!confirm(_0x53ccb1(0x1b5) + currentChatUsername + '?'))
        return;
    chatCache[_0x53ccb1(0x10c)](_0x47272a) && chatCache[_0x53ccb1(0x215)](_0x47272a);
    const _0x447d06 = _0x53ccb1(0x182) + _0x47272a;
    localStorage[_0x53ccb1(0x10f)](_0x447d06) && localStorage[_0x53ccb1(0x196)](_0x447d06), showPopupMessage2('Chat\x20cache\x20cleared\x20for\x20user\x20' + currentChatUsername);
}
intializeSocket(), socket['on']('error', _0x564f76 => {
    const _0x284365 = _0x2cc82b;
    console[_0x284365(0x106)]('🔴\x20Socket\x20Error:', _0x564f76);
});