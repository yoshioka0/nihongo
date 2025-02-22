const _0x4bdcb7 = _0x3bb1;
(function (_0x7639f3, _0x364682) {
    const _0x11cbb8 = _0x3bb1, _0x467118 = _0x7639f3();
    while (!![]) {
        try {
            const _0x188240 = -parseInt(_0x11cbb8(0x268)) / 0x1 + parseInt(_0x11cbb8(0x19d)) / 0x2 + parseInt(_0x11cbb8(0x197)) / 0x3 + -parseInt(_0x11cbb8(0x2a2)) / 0x4 + parseInt(_0x11cbb8(0x1b0)) / 0x5 * (parseInt(_0x11cbb8(0x287)) / 0x6) + -parseInt(_0x11cbb8(0x244)) / 0x7 * (parseInt(_0x11cbb8(0x20a)) / 0x8) + parseInt(_0x11cbb8(0x2c9)) / 0x9;
            if (_0x188240 === _0x364682)
                break;
            else
                _0x467118['push'](_0x467118['shift']());
        } catch (_0x50b8f5) {
            _0x467118['push'](_0x467118['shift']());
        }
    }
}(_0x4dea, 0x6050d), history[_0x4bdcb7(0x205)](null, null, location[_0x4bdcb7(0x292)]), window[_0x4bdcb7(0x224)] = function () {
    history['pushState'](null, null, location['href']);
});
let currentRoomId = null, currentRoomName = null, tokenexpired;
const token = getJWTToken();
if (token) {
    const decodedToken = JSON[_0x4bdcb7(0x1e5)](atob(token[_0x4bdcb7(0x2d0)]('.')[0x1])), expiryTime = decodedToken[_0x4bdcb7(0x1b1)] * 0x3e8;
    startCountdown(expiryTime);
} else
    console['log'](_0x4bdcb7(0x1f4));
function startCountdown(_0x45318b) {
    const _0x3b897c = _0x4bdcb7, _0x35d738 = document[_0x3b897c(0x1bb)](_0x3b897c(0x1c6)), _0x183425 = setInterval(() => {
            const _0x47935c = _0x3b897c, _0x5afcf6 = Date[_0x47935c(0x29f)](), _0x91a990 = _0x45318b - _0x5afcf6;
            if (_0x91a990 <= 0x0)
                clearInterval(_0x183425), _0x35d738[_0x47935c(0x1fd)] = _0x47935c(0x1b9), _0x35d738[_0x47935c(0x223)][_0x47935c(0x2b7)](_0x47935c(0x1de)), _0x35d738['classList'][_0x47935c(0x1e2)](_0x47935c(0x25b)), showPopupMessage(_0x47935c(0x255)), tokenexpired = !![];
            else {
                const _0x141ecd = Math[_0x47935c(0x222)](_0x91a990 / 0xea60), _0x5b1f60 = Math[_0x47935c(0x222)](_0x91a990 % 0xea60 / 0x3e8);
                _0x35d738['textContent'] = '⏰\x20' + _0x141ecd + ':' + (_0x5b1f60 < 0xa ? '0' : '') + _0x5b1f60, _0x35d738[_0x47935c(0x223)][_0x47935c(0x2b7)](_0x47935c(0x25b)), _0x35d738[_0x47935c(0x223)]['add'](_0x47935c(0x1de));
            }
        }, 0x3e8);
}
const accessToken = localStorage['getItem'](_0x4bdcb7(0x295)), socket = io(SOCKET_URL, { 'auth': { 'token': localStorage[_0x4bdcb7(0x22c)](_0x4bdcb7(0x295)) } });
socket['on'](_0x4bdcb7(0x1a3), () => {
    const _0x4e2d71 = _0x4bdcb7;
    console[_0x4e2d71(0x21e)](_0x4e2d71(0x218), socket['id']), document[_0x4e2d71(0x1bb)]('socket-status')[_0x4e2d71(0x1fd)] = _0x4e2d71(0x196), document[_0x4e2d71(0x1bb)](_0x4e2d71(0x227))['classList'][_0x4e2d71(0x2b7)]('con', _0x4e2d71(0x249)), document[_0x4e2d71(0x1bb)](_0x4e2d71(0x227))[_0x4e2d71(0x223)][_0x4e2d71(0x1e2)](_0x4e2d71(0x252)), currentRoomId && currentRoomName && (showPopupMessage2('🟢\x20Reconnected', 0x7d0, 'green'), joinRoom(currentRoomId, currentRoomName));
});
const searchUser = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x247)), chatList = document[_0x4bdcb7(0x1bb)]('chat-list'), chatWindow = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x1cf)), messageInput = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x1d3)), sendButton = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x1d9)), logoutButton = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x2af)), blockButton = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x1ab)), chatUserElement = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x258)), lastActiveElement = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x293)), userElement2 = chatUserElement, loader = document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x206)), decoded = decodeJWT(accessToken), senderUserId = decoded['userId'], senderUsername = decoded[_0x4bdcb7(0x2c6)];
document[_0x4bdcb7(0x1bb)]('myUsername')[_0x4bdcb7(0x1fd)] = senderUsername;
async function fetchAPI(_0x1ffaff, _0x4b2b6e = _0x4bdcb7(0x232), _0x4e558f = null) {
    const _0x3a821a = _0x4bdcb7, _0x5b363a = {
            'Content-Type': _0x3a821a(0x273),
            'Authorization': _0x3a821a(0x2ac) + accessToken
        }, _0x33009d = {
            'method': _0x4b2b6e,
            'headers': _0x5b363a
        };
    if (_0x4e558f)
        _0x33009d[_0x3a821a(0x1c2)] = JSON[_0x3a821a(0x2c7)](_0x4e558f);
    const _0x241a87 = await apiRequest('' + _0x1ffaff, _0x33009d);
    if (!_0x241a87['ok'])
        throw new Error(await _0x241a87[_0x3a821a(0x209)]());
    return _0x241a87[_0x3a821a(0x2d1)]();
}
const url = new URL(self[_0x4bdcb7(0x278)]['href']), queryParam = url[_0x4bdcb7(0x271)][_0x4bdcb7(0x2d4)](_0x4bdcb7(0x2c6));
let query = null;
queryParam && (query = queryParam, searchUser[_0x4bdcb7(0x1c7)] = query, loadChatList(query));
function _0x3bb1(_0x1b062e, _0x4715a) {
    const _0x4dea3d = _0x4dea();
    return _0x3bb1 = function (_0x3bb14b, _0x6e08e4) {
        _0x3bb14b = _0x3bb14b - 0x191;
        let _0x3b2b39 = _0x4dea3d[_0x3bb14b];
        if (_0x3bb1['kkOYUe'] === undefined) {
            var _0x364725 = function (_0x45318b) {
                const _0x35d738 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x183425 = '', _0x5afcf6 = '';
                for (let _0x91a990 = 0x0, _0x141ecd, _0x5b1f60, _0x1ffaff = 0x0; _0x5b1f60 = _0x45318b['charAt'](_0x1ffaff++); ~_0x5b1f60 && (_0x141ecd = _0x91a990 % 0x4 ? _0x141ecd * 0x40 + _0x5b1f60 : _0x5b1f60, _0x91a990++ % 0x4) ? _0x183425 += String['fromCharCode'](0xff & _0x141ecd >> (-0x2 * _0x91a990 & 0x6)) : 0x0) {
                    _0x5b1f60 = _0x35d738['indexOf'](_0x5b1f60);
                }
                for (let _0x4b2b6e = 0x0, _0x4e558f = _0x183425['length']; _0x4b2b6e < _0x4e558f; _0x4b2b6e++) {
                    _0x5afcf6 += '%' + ('00' + _0x183425['charCodeAt'](_0x4b2b6e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x5afcf6);
            };
            _0x3bb1['leJrLi'] = _0x364725, _0x1b062e = arguments, _0x3bb1['kkOYUe'] = !![];
        }
        const _0x3302b5 = _0x4dea3d[0x0], _0x42d466 = _0x3bb14b + _0x3302b5, _0xadb03d = _0x1b062e[_0x42d466];
        return !_0xadb03d ? (_0x3b2b39 = _0x3bb1['leJrLi'](_0x3b2b39), _0x1b062e[_0x42d466] = _0x3b2b39) : _0x3b2b39 = _0xadb03d, _0x3b2b39;
    }, _0x3bb1(_0x1b062e, _0x4715a);
}
let debounceTimeout;
function searchUsers() {
    const _0x143f5a = _0x4bdcb7, _0x10a7dd = document[_0x143f5a(0x1bb)](_0x143f5a(0x247))['value']['trim']();
    clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
        loadChatList(_0x10a7dd);
    }, 0x1f4);
}
let currentChatUserId = null;
async function loadChatList(_0x86bfc7 = '') {
    const _0x443f50 = _0x4bdcb7;
    try {
        chatList['innerHTML'] = '';
        const _0x6e2914 = JSON[_0x443f50(0x1e5)](localStorage[_0x443f50(0x22c)](_0x443f50(0x1d6))) || [], _0xa35232 = document[_0x443f50(0x26d)]('hr'), _0x2130f8 = document[_0x443f50(0x26d)]('hr'), _0x17dfbf = new Set(_0x6e2914['map'](_0x34665a => _0x34665a[_0x443f50(0x1f1)]));
        let _0x42247d = [], _0x5ccdba = new Set();
        console['log'](_0x443f50(0x204)), _0x6e2914['forEach'](({
            username: _0x27e81e,
            userId: _0x4fc33b
        }) => {
            const _0x3b425f = _0x443f50;
            if (_0x27e81e[_0x3b425f(0x2bf)]()[_0x3b425f(0x19e)](_0x86bfc7[_0x3b425f(0x2bf)]())) {
                const _0xaf6638 = createUserItem(_0x27e81e, _0x4fc33b);
                chatList[_0x3b425f(0x270)](_0xaf6638), _0x5ccdba[_0x3b425f(0x1e2)](_0x4fc33b);
            }
        }), chatList[_0x443f50(0x270)](_0xa35232);
        if (_0x86bfc7) {
            if (_0x86bfc7[_0x443f50(0x212)] < 0x3) {
                chatList[_0x443f50(0x239)] = _0x443f50(0x1dd);
                return;
            }
            const _0x4e2c59 = await fetchAPI(_0x443f50(0x233) + _0x86bfc7);
            _0x4e2c59[_0x443f50(0x212)] === 0x0 && (chatList['innerHTML'] = _0x443f50(0x217)), _0x42247d = _0x4e2c59[_0x443f50(0x1f8)](_0x232bf9 => !_0x17dfbf[_0x443f50(0x1d0)](_0x232bf9[_0x443f50(0x1bf)])), _0x42247d['forEach'](_0x3805c7 => {
                const _0x37260e = _0x443f50, _0x1b1ae4 = createUserItem(_0x3805c7['username'], _0x3805c7[_0x37260e(0x1bf)]);
                chatList[_0x37260e(0x270)](_0x1b1ae4);
            }), _0x42247d['length'] > 0x0 && chatList[_0x443f50(0x270)](_0x2130f8);
        }
        !_0x86bfc7 && _0x6e2914['forEach'](({
            username: _0x328e1c,
            userId: _0x4805b1
        }) => {
            const _0x1a2338 = _0x443f50;
            if (!_0x5ccdba['has'](_0x4805b1)) {
                const _0x3e9f96 = createUserItem(_0x328e1c, _0x4805b1);
                chatList[_0x1a2338(0x270)](_0x3e9f96);
            }
        });
    } catch (_0x2eb431) {
        chatList[_0x443f50(0x239)] = _0x443f50(0x2a8), console['error'](_0x443f50(0x254), _0x2eb431[_0x443f50(0x1b5)]);
    }
}
function createUserItem(_0x2539ba, _0x392b50) {
    const _0x5b290e = _0x4bdcb7, _0x31514a = document['createElement'](_0x5b290e(0x27a));
    return _0x31514a[_0x5b290e(0x1fd)] = _0x2539ba, _0x31514a[_0x5b290e(0x223)][_0x5b290e(0x1e2)](_0x5b290e(0x29e)), _0x31514a[_0x5b290e(0x1fa)]['userId'] = _0x392b50, _0x31514a[_0x5b290e(0x219)](_0x5b290e(0x1d8), () => openChat(_0x392b50, _0x2539ba)), _0x31514a;
}
function joinRoom(_0x560524, _0x381d7a) {
    const _0x2b35f9 = _0x4bdcb7;
    currentRoomId && (socket[_0x2b35f9(0x19c)](_0x2b35f9(0x21d), { 'roomId': currentRoomId }), showPopupMessage(_0x2b35f9(0x29c) + currentRoomName, 0x7d0)), currentRoomId = _0x560524, currentRoomName = _0x381d7a, socket[_0x2b35f9(0x19c)](_0x2b35f9(0x1ec), { 'recipientUserId': _0x560524 }), showPopupMessage(_0x2b35f9(0x290) + currentRoomName);
}
const chatCache = new Map();
async function openChat(_0x357192, _0x19642f) {
    const _0x39a7ff = _0x4bdcb7;
    console[_0x39a7ff(0x21e)](_0x357192, _0x19642f), currentChatUserId = _0x357192, currentChatUsername = _0x19642f, searchUser[_0x39a7ff(0x1c7)] = null, loadChatList(), saveUser(currentChatUserId, currentChatUsername), document[_0x39a7ff(0x1bb)](_0x39a7ff(0x258))['textContent'] = _0x39a7ff(0x1e0) + _0x19642f;
    if (tokenexpired) {
        showPopupMessage('Session\x20Expired'), chatWindow[_0x39a7ff(0x239)] = _0x39a7ff(0x2ad);
        return;
    }
    chatWindow[_0x39a7ff(0x239)] = _0x39a7ff(0x27e), joinRoom(_0x357192, _0x19642f);
    if (chatCache[_0x39a7ff(0x1d0)](_0x357192))
        showNotification(_0x39a7ff(0x1f5) + _0x19642f), renderMessages(chatCache[_0x39a7ff(0x2d4)](_0x357192));
    else
        try {
            let _0x3e634d = [];
            const _0x2c4a14 = localStorage['getItem']('chat_' + _0x357192);
            if (_0x2c4a14)
                showNotification(_0x39a7ff(0x1a0) + _0x19642f), _0x3e634d = await Promise['all'](JSON[_0x39a7ff(0x1e5)](_0x2c4a14)[_0x39a7ff(0x257)](async _0x10c478 => JSON[_0x39a7ff(0x1e5)](await decryptMessage(_0x10c478))));
            else {
                showNotification(_0x39a7ff(0x1ce)), _0x3e634d = await fetchAPI(_0x39a7ff(0x299) + senderUserId + '/' + _0x357192);
                const _0xfbd5fd = await Promise[_0x39a7ff(0x191)](_0x3e634d[_0x39a7ff(0x257)](_0x2ccd80 => encryptMessage(JSON[_0x39a7ff(0x2c7)](_0x2ccd80))));
                localStorage[_0x39a7ff(0x2a7)]('chat_' + _0x357192, JSON[_0x39a7ff(0x2c7)](_0xfbd5fd));
            }
            chatCache[_0x39a7ff(0x283)](_0x357192, _0x3e634d), renderMessages(_0x3e634d);
        } catch (_0x2c3a2e) {
            console[_0x39a7ff(0x213)](_0x39a7ff(0x2bd), _0x2c3a2e[_0x39a7ff(0x1b5)]), chatMessagesContainer[_0x39a7ff(0x239)] = _0x39a7ff(0x2ce);
        }
    checkUserAvailability(currentChatUserId), socket['emit'](_0x39a7ff(0x2d3), {
        'senderId': senderUserId,
        'receiverId': currentChatUserId
    }), updateBlockButton();
}
async function renderMessages(_0x3fbeaf) {
    const _0x255ea0 = _0x4bdcb7;
    chatWindow[_0x255ea0(0x239)] = _0x255ea0(0x234);
    const _0x3ca697 = chatWindow[_0x255ea0(0x1b3)](_0x255ea0(0x19b));
    _0x3ca697[_0x255ea0(0x239)] = _0x3fbeaf[_0x255ea0(0x212)] ? '' : _0x255ea0(0x276);
    for (const _0x3e0f8e of _0x3fbeaf) {
        const _0x4e5877 = _0x3e0f8e[_0x255ea0(0x1b7)][_0x255ea0(0x1bf)] === senderUserId;
        displayMessage(_0x3e0f8e, _0x4e5877);
    }
}
async function saveUser(_0x495a39, _0x50a598) {
    const _0x3f3e55 = _0x4bdcb7;
    if (!_0x495a39 || !_0x50a598) {
        console['warn'](_0x3f3e55(0x22e));
        return;
    }
    let _0x194798 = JSON[_0x3f3e55(0x1e5)](localStorage['getItem'](_0x3f3e55(0x1d6))) || [];
    !_0x194798['some'](_0x33a010 => _0x33a010[_0x3f3e55(0x1f1)] === _0x495a39) && (_0x194798[_0x3f3e55(0x267)]({
        'userId': _0x495a39,
        'username': _0x50a598
    }), localStorage[_0x3f3e55(0x2a7)](_0x3f3e55(0x1d6), JSON[_0x3f3e55(0x2c7)](_0x194798)));
    try {
        const _0x5a1f4f = await apiRequest(_0x3f3e55(0x1c5), {
                'method': _0x3f3e55(0x26f),
                'headers': {
                    'Content-Type': _0x3f3e55(0x273),
                    'Authorization': 'Bearer\x20' + localStorage[_0x3f3e55(0x22c)](_0x3f3e55(0x295))
                },
                'body': JSON[_0x3f3e55(0x2c7)]({ 'currentChatUserId': _0x495a39 })
            }), _0x3e6aab = await _0x5a1f4f['json']();
        console['log'](_0x3e6aab['message']);
    } catch (_0x10b2bb) {
        console[_0x3f3e55(0x213)](_0x3f3e55(0x250), _0x10b2bb), showPopupMessage(_0x10b2bb);
    }
}
async function getChattedUsers() {
    const _0x5e6cdd = _0x4bdcb7;
    let _0xdfeb19 = JSON[_0x5e6cdd(0x1e5)](localStorage[_0x5e6cdd(0x22c)](_0x5e6cdd(0x1d6)));
    if (!_0xdfeb19 || _0xdfeb19['length'] === 0x0)
        try {
            const _0x3f9b6f = await apiRequest(_0x5e6cdd(0x1f9), {
                    'method': 'GET',
                    'headers': { 'Authorization': _0x5e6cdd(0x2ac) + localStorage['getItem'](_0x5e6cdd(0x295)) }
                }), _0x1b230c = await _0x3f9b6f[_0x5e6cdd(0x2d1)]();
            _0x1b230c[_0x5e6cdd(0x1d6)] && (_0xdfeb19 = _0x1b230c['chattedUsers'][_0x5e6cdd(0x257)](_0x1e485d => ({
                'userId': _0x1e485d[_0x5e6cdd(0x1bf)],
                'username': _0x1e485d['username']
            })), localStorage[_0x5e6cdd(0x2a7)](_0x5e6cdd(0x1d6), JSON[_0x5e6cdd(0x2c7)](_0xdfeb19)), loadChatList());
        } catch (_0x54b88a) {
            console[_0x5e6cdd(0x213)]('Error\x20fetching\x20from\x20server:', _0x54b88a);
        }
    else
        loadChatList();
}
document[_0x4bdcb7(0x219)]('DOMContentLoaded', getChattedUsers);
async function appendMessages(_0x2da8be) {
    const _0x5adcfe = _0x4bdcb7;
    for (const _0xad9713 of _0x2da8be) {
        typeof _0xad9713[_0x5adcfe(0x1b7)] === _0x5adcfe(0x20b) && (_0xad9713[_0x5adcfe(0x1b7)] = { '_id': _0xad9713[_0x5adcfe(0x1b7)] });
        typeof _0xad9713[_0x5adcfe(0x2d6)] === _0x5adcfe(0x20b) && (_0xad9713[_0x5adcfe(0x2d6)] = { '_id': _0xad9713['receiver'] });
        const _0x43cecb = _0xad9713['sender'][_0x5adcfe(0x1bf)] === senderUserId;
        displayMessage(_0xad9713, _0x43cecb);
    }
}
async function refreshChat() {
    const _0x9f6405 = _0x4bdcb7;
    if (!currentChatUserId) {
        showNotification(_0x9f6405(0x24d));
        return;
    }
    showNotification(_0x9f6405(0x198) + currentChatUsername);
    try {
        const _0x3735c2 = await fetchAPI(_0x9f6405(0x299) + senderUserId + '/' + currentChatUserId), _0xb537ec = chatCache[_0x9f6405(0x2d4)](currentChatUserId) || [], _0x55b5ef = _0x3735c2[_0x9f6405(0x1f8)](_0x5726df => !_0xb537ec['some'](_0x23e207 => _0x23e207[_0x9f6405(0x1bf)] === _0x5726df[_0x9f6405(0x1bf)]));
        if (_0x55b5ef[_0x9f6405(0x212)] === 0x0) {
            showNotification(_0x9f6405(0x253) + currentChatUsername);
            return;
        }
        const _0x568394 = [
            ..._0xb537ec,
            ..._0x55b5ef
        ];
        chatCache[_0x9f6405(0x283)](currentChatUserId, _0x568394);
        const _0x4eeadf = await Promise[_0x9f6405(0x191)](_0x568394[_0x9f6405(0x257)](_0x398f44 => encryptMessage(JSON[_0x9f6405(0x2c7)](_0x398f44))));
        localStorage[_0x9f6405(0x2a7)]('chat_' + currentChatUserId, JSON[_0x9f6405(0x2c7)](_0x4eeadf)), appendMessages(_0x55b5ef), showNotification(_0x9f6405(0x194));
    } catch (_0x2622fa) {
        console['error'](_0x9f6405(0x2c3), _0x2622fa), showNotification(_0x9f6405(0x2c8));
    }
}
function displayMessage(_0x3a3808, _0xa62cbb) {
    const _0x4ec900 = _0x4bdcb7, _0x2183ee = document[_0x4ec900(0x26d)]('div');
    _0x2183ee[_0x4ec900(0x223)][_0x4ec900(0x1e2)]('message', _0xa62cbb ? _0x4ec900(0x288) : _0x4ec900(0x2a3)), _0x2183ee['dataset'][_0x4ec900(0x256)] = _0x3a3808[_0x4ec900(0x1b5)], _0x2183ee[_0x4ec900(0x1fa)][_0x4ec900(0x208)] = detectLanguage(_0x3a3808['message']);
    const _0x186aaa = document[_0x4ec900(0x26d)]('button');
    _0x186aaa[_0x4ec900(0x223)][_0x4ec900(0x1e2)](_0x4ec900(0x236)), _0x186aaa['innerHTML'] = '<i\x20class=\x22fa-solid\x20fa-trash\x22></i>', _0x186aaa[_0x4ec900(0x27b)] = () => confirmDelete(_0x2183ee);
    const _0x860aa7 = new Date(_0x3a3808['timestamp'])[_0x4ec900(0x2ba)]([], {
            'year': _0x4ec900(0x28d),
            'month': 'short',
            'day': 'numeric'
        }), _0x32d227 = new Date(_0x3a3808[_0x4ec900(0x1db)])[_0x4ec900(0x1d4)]([], {
            'hour': _0x4ec900(0x23e),
            'minute': '2-digit',
            'second': '2-digit'
        }), _0x4ed0d3 = _0x860aa7 + ',\x20' + _0x32d227, _0x6310e6 = document[_0x4ec900(0x26d)]('span');
    _0x6310e6[_0x4ec900(0x223)][_0x4ec900(0x1e2)]('timestamp'), _0x6310e6[_0x4ec900(0x1fd)] = _0x4ed0d3;
    const _0x29b8b3 = document[_0x4ec900(0x26d)](_0x4ec900(0x242));
    _0x29b8b3['classList'][_0x4ec900(0x1e2)](_0x4ec900(0x199));
    _0xa62cbb && (_0x29b8b3['textContent'] = _0x3a3808[_0x4ec900(0x25a)] ? '✔✔' : '✔');
    if (_0x3a3808['type'] === _0x4ec900(0x1a5)) {
        const _0x127c94 = document[_0x4ec900(0x26d)](_0x4ec900(0x237));
        _0x127c94[_0x4ec900(0x29a)] = _0x3a3808[_0x4ec900(0x2d2)], _0x127c94['classList'][_0x4ec900(0x1e2)](_0x4ec900(0x25f)), _0x127c94[_0x4ec900(0x193)] = 'Sent\x20Image', _0x127c94[_0x4ec900(0x27b)] = () => window['open'](_0x3a3808[_0x4ec900(0x2d2)], _0x4ec900(0x262)), _0x2183ee['appendChild'](_0x127c94);
    } else {
        const _0x1c18e3 = document[_0x4ec900(0x26d)]('p');
        _0x1c18e3[_0x4ec900(0x1fd)] = _0x3a3808[_0x4ec900(0x1b5)], _0x2183ee[_0x4ec900(0x270)](_0x1c18e3);
    }
    _0x2183ee[_0x4ec900(0x270)](_0x186aaa), _0x2183ee[_0x4ec900(0x270)](_0x6310e6), _0x2183ee[_0x4ec900(0x270)](_0x29b8b3), chatWindow['appendChild'](_0x2183ee), chatWindow['scrollTop'] = chatWindow[_0x4ec900(0x274)], updateMessages();
}
function confirmDelete(_0x47c40b) {
    const _0x507759 = _0x4bdcb7;
    confirm(_0x507759(0x1f2)) && (_0x47c40b['remove'](), showPopupMessage2(_0x507759(0x261)));
}
function intializeSocket() {
    const _0x150d35 = _0x4bdcb7;
    if (socket) {
        sendButton[_0x150d35(0x219)](_0x150d35(0x1d8), _0x190d7c), messageInput[_0x150d35(0x219)](_0x150d35(0x2aa), _0x1bbf3e => {
            const _0x376451 = _0x150d35;
            if (_0x1bbf3e[_0x376451(0x263)] === _0x376451(0x1fc))
                _0x190d7c();
        });
        const _0x306236 = document[_0x150d35(0x1bb)](_0x150d35(0x1f3)), _0xb6770e = document[_0x150d35(0x1bb)](_0x150d35(0x2d7)), _0x4fb39c = document[_0x150d35(0x1bb)](_0x150d35(0x1c1)), _0x4c5ad4 = document['getElementById'](_0x150d35(0x246)), _0x477277 = document['getElementById'](_0x150d35(0x1b4));
        let _0x14dca1 = null;
        _0x306236[_0x150d35(0x219)](_0x150d35(0x1d8), () => {
            const _0x5ba5e = _0x150d35;
            _0xb6770e[_0x5ba5e(0x1d8)]();
        }), _0x477277[_0x150d35(0x219)](_0x150d35(0x1d8), () => {
            const _0x32cd2a = _0x150d35;
            _0x14dca1 = null, _0x4fb39c[_0x32cd2a(0x297)][_0x32cd2a(0x2c2)] = 'none', _0xb6770e['value'] = '';
        }), _0xb6770e['addEventListener'](_0x150d35(0x248), _0x19223c => {
            const _0x5d976e = _0x150d35, _0x36e8d1 = _0x19223c[_0x5d976e(0x1ea)][_0x5d976e(0x2b2)][0x0];
            if (_0x36e8d1) {
                _0x14dca1 = _0x36e8d1;
                const _0x151a59 = new FileReader();
                _0x151a59[_0x5d976e(0x23d)] = _0x44e16d => {
                    const _0x5b24da = _0x5d976e;
                    _0x4c5ad4['src'] = _0x44e16d['target']['result'], _0x4fb39c[_0x5b24da(0x297)]['display'] = _0x5b24da(0x1c9);
                }, _0x151a59[_0x5d976e(0x266)](_0x36e8d1);
            }
        });
        async function _0x190d7c() {
            const _0x45d377 = _0x150d35;
            if (!currentChatUserId)
                return;
            let _0x516a68 = null;
            const _0x1397d5 = messageInput[_0x45d377(0x1c7)][_0x45d377(0x1ed)]();
            if (_0x1397d5) {
                const _0x4e539e = {
                    'senderUsername': senderUsername,
                    'receiver': currentChatUserId,
                    'message': _0x1397d5,
                    'type': 'text'
                };
                try {
                    socket[_0x45d377(0x19c)](_0x45d377(0x24f), _0x4e539e, _0xf5c42f => {
                        const _0x2ae5a2 = _0x45d377;
                        messageInput[_0x2ae5a2(0x1c7)] = '', _0xf5c42f?.[_0x2ae5a2(0x213)] && alert(_0xf5c42f[_0x2ae5a2(0x213)]);
                    });
                } catch (_0x247f1e) {
                    console['error'](_0x45d377(0x20c), _0x247f1e[_0x45d377(0x1b5)]);
                }
            }
            if (_0x14dca1) {
                showNotification(_0x45d377(0x1a7)), loader['style'][_0x45d377(0x2c2)] = 'block';
                try {
                    const _0x1b91eb = new FormData();
                    _0x1b91eb['append'](_0x45d377(0x1a5), _0x14dca1);
                    const _0x35f8a7 = await apiRequest('/api/upload', {
                            'method': _0x45d377(0x26f),
                            'headers': { 'Authorization': _0x45d377(0x2ac) + localStorage[_0x45d377(0x22c)]('accessToken') },
                            'body': _0x1b91eb
                        }), _0x5135ca = await _0x35f8a7['json']();
                    if (!_0x5135ca[_0x45d377(0x1ca)]) {
                        showNotification(_0x45d377(0x20e)), loader['style'][_0x45d377(0x2c2)] = _0x45d377(0x1e9), showPopupMessage(_0x5135ca[_0x45d377(0x1b5)] || _0x45d377(0x29d));
                        return;
                    }
                    _0x5135ca?.[_0x45d377(0x213)] && (loader[_0x45d377(0x297)]['display'] = _0x45d377(0x1e9), alert(_0x5135ca[_0x45d377(0x213)]));
                    _0x516a68 = _0x5135ca[_0x45d377(0x1ca)];
                    const _0xb0363d = {
                        'senderUsername': senderUsername,
                        'receiver': currentChatUserId,
                        'message': _0x45d377(0x29b),
                        'type': _0x45d377(0x1a5),
                        'fileUrl': _0x516a68
                    };
                    socket[_0x45d377(0x19c)](_0x45d377(0x24f), _0xb0363d, _0x3a19b0 => {
                        const _0x4d3f6f = _0x45d377;
                        _0x3a19b0?.[_0x4d3f6f(0x213)] && alert(_0x3a19b0['error']);
                    }), _0x14dca1 = null, loader[_0x45d377(0x297)][_0x45d377(0x2c2)] = _0x45d377(0x1e9), _0x4fb39c['style'][_0x45d377(0x2c2)] = 'none', _0xb6770e[_0x45d377(0x1c7)] = '';
                } catch (_0x12dfc8) {
                    loader['style'][_0x45d377(0x2c2)] = _0x45d377(0x1e9), showNotification(_0x45d377(0x22b)), console[_0x45d377(0x213)](_0x45d377(0x200), _0x12dfc8[_0x45d377(0x1b5)]);
                }
            }
        }
        socket['on'](_0x150d35(0x2cd), async _0x439386 => {
            const _0x5be315 = _0x150d35;
            if (!_0x439386 || !_0x439386[_0x5be315(0x1b7)] || !_0x439386[_0x5be315(0x2d6)])
                return;
            if (_0x439386['sender'] === currentChatUserId || _0x439386['receiver'] === currentChatUserId) {
                _0x5f1d11['style']['display'] = _0x5be315(0x1e9), displayMessage(_0x439386, _0x439386[_0x5be315(0x1b7)] === senderUserId);
                _0x439386['sender'] !== senderUserId && _0x259b66();
                const _0x13450c = chatCache[_0x5be315(0x2d4)](currentChatUserId) || [];
                if (!_0x13450c[_0x5be315(0x27c)](_0x42494c => _0x42494c[_0x5be315(0x1bf)] === _0x439386['_id'])) {
                    chatCache[_0x5be315(0x283)](currentChatUserId, [
                        ..._0x13450c,
                        _0x439386
                    ]);
                    const _0x1e1388 = await Promise['all'](chatCache['get'](currentChatUserId)[_0x5be315(0x257)](_0x544b4e => encryptMessage(JSON['stringify'](_0x544b4e))));
                    localStorage[_0x5be315(0x2a7)]('chat_' + currentChatUserId, JSON['stringify'](_0x1e1388));
                }
            } else
                console[_0x5be315(0x21e)](_0x5be315(0x24c));
        });
        const _0x3e3cf6 = new Audio(_0x150d35(0x28e));
        function _0x259b66() {
            const _0x1e2ed5 = _0x150d35;
            _0x3e3cf6[_0x1e2ed5(0x1ba)] = 0x0, _0x3e3cf6[_0x1e2ed5(0x19a)]()[_0x1e2ed5(0x26c)](_0x5664e6 => console[_0x1e2ed5(0x213)]('Error\x20playing\x20sound:', _0x5664e6));
        }
        let _0x41b742, _0x3cc491 = !![];
        const _0x5f1d11 = document[_0x150d35(0x1bb)]('typing-indicator');
        messageInput['addEventListener'](_0x150d35(0x2b5), () => {
            const _0x167b3e = _0x150d35;
            currentChatUserId && senderUserId !== currentChatUserId && (_0x3cc491 && socket && (socket[_0x167b3e(0x19c)](_0x167b3e(0x22f), {
                'senderId': senderUserId,
                'receiverId': currentChatUserId
            }), _0x3cc491 = ![], setTimeout(() => {
                _0x3cc491 = !![];
            }, 0x5dc)), clearTimeout(_0x41b742));
        }), socket && socket['on'](_0x150d35(0x22f), ({senderId: _0x283e5b}) => {
            const _0x5c2253 = _0x150d35;
            _0x283e5b !== senderUserId && currentChatUserId === _0x283e5b && (updateStatus(_0x5c2253(0x1eb)), _0x5f1d11['style'][_0x5c2253(0x2c2)] !== _0x5c2253(0x272) && (_0x5f1d11[_0x5c2253(0x297)][_0x5c2253(0x2c2)] = _0x5c2253(0x272), _0x5f1d11['innerHTML'] = _0x5c2253(0x25d)), clearTimeout(_0x41b742), _0x41b742 = setTimeout(() => {
                const _0x1dbd93 = _0x5c2253;
                updateStatus(_0x1dbd93(0x1b8)), _0x5f1d11[_0x1dbd93(0x297)][_0x1dbd93(0x2c2)] = _0x1dbd93(0x1e9);
            }, 0xbb8));
        }), document['addEventListener']('visibilitychange', () => {
            const _0xbe9b7e = _0x150d35;
            socket && (document[_0xbe9b7e(0x2c4)] ? socket[_0xbe9b7e(0x19c)]('userBusy', { 'senderUserId': senderUserId }) : (senderId = senderUserId, receiverId = currentChatUserId, socket['emit'](_0xbe9b7e(0x2d3), {
                'senderId': senderId,
                'receiverId': receiverId
            }), socket['emit']('userOnline', { 'senderUserId': senderUserId })));
        }), window[_0x150d35(0x219)](_0x150d35(0x2a0), () => {
            const _0x45a8b4 = _0x150d35;
            socket && socket['emit'](_0x45a8b4(0x2b9), { 'senderUserId': senderUserId });
        }), socket['on'](_0x150d35(0x289), ({senderUserId: _0x126d01}) => {
            const _0x10d17c = _0x150d35;
            userId = _0x126d01;
            const _0x6abb17 = document[_0x10d17c(0x1b3)](_0x10d17c(0x1bc) + userId + '\x27]');
            _0x6abb17 ? (_0x6abb17[_0x10d17c(0x223)]['remove'](_0x10d17c(0x1c4), _0x10d17c(0x2ab), _0x10d17c(0x1a4)), _0x6abb17[_0x10d17c(0x223)]['add'](_0x10d17c(0x1a4))) : _0x10d17c(0x235), userElement2 && currentChatUserId === _0x126d01 && (userElement2[_0x10d17c(0x223)][_0x10d17c(0x2b7)](_0x10d17c(0x1c4), _0x10d17c(0x2ab), _0x10d17c(0x1a4)), userElement2[_0x10d17c(0x223)][_0x10d17c(0x1e2)](_0x10d17c(0x1a4)), updateStatus(_0x10d17c(0x1b8)));
        }), socket['on'](_0x150d35(0x2b9), ({senderUserId: _0x5c3b7c}) => {
            const _0x130d5b = _0x150d35;
            updateStatus('Offline'), userId = _0x5c3b7c;
            const _0x426cdd = document[_0x130d5b(0x1b3)](_0x130d5b(0x1bc) + userId + '\x27]');
            _0x426cdd && (_0x426cdd[_0x130d5b(0x223)][_0x130d5b(0x2b7)]('offline', 'busy', _0x130d5b(0x1a4)), _0x426cdd[_0x130d5b(0x223)][_0x130d5b(0x1e2)](_0x130d5b(0x1c4))), userElement2 && currentChatUserId === _0x5c3b7c && (userElement2['classList'][_0x130d5b(0x2b7)]('offline', _0x130d5b(0x2ab), 'online'), userElement2[_0x130d5b(0x223)][_0x130d5b(0x1e2)](_0x130d5b(0x1c4)), checkUserAvailability(currentChatUserId));
        }), socket['on'](_0x150d35(0x1ac), ({senderUserId: _0x144077}) => {
            const _0x4c1080 = _0x150d35;
            userId = _0x144077;
            const _0x15536b = document[_0x4c1080(0x1b3)]('[data-user-id=\x27' + userId + '\x27]');
            _0x15536b && (_0x15536b[_0x4c1080(0x223)][_0x4c1080(0x2b7)]('offline', _0x4c1080(0x2ab), 'online'), _0x15536b[_0x4c1080(0x223)][_0x4c1080(0x1e2)]('busy')), userElement2 && currentChatUserId === _0x144077 && (userElement2[_0x4c1080(0x223)]['remove'](_0x4c1080(0x1c4), _0x4c1080(0x2ab), _0x4c1080(0x1a4)), userElement2[_0x4c1080(0x223)][_0x4c1080(0x1e2)](_0x4c1080(0x2ab)), updateStatus(_0x4c1080(0x1d1)));
        }), socket['on'](_0x150d35(0x2b6), _0x878b00 => {
            const _0x79056 = _0x150d35, {
                    chatId: _0x46824d,
                    readerId: _0xc3f13c
                } = _0x878b00;
            currentChatUserId === _0xc3f13c && senderUserId === _0x46824d && (console[_0x79056(0x21e)](_0x79056(0x214) + _0xc3f13c + '\x20read\x20messages\x20in\x20chat\x20' + _0x46824d), lol());
        });
    } else
        console[_0x150d35(0x21e)](_0x150d35(0x2b1), socket), console[_0x150d35(0x21e)](_0x150d35(0x2a9));
    socket['on'](_0x150d35(0x260), _0x5e4004 => {
        const _0x502ed4 = _0x150d35;
        console[_0x502ed4(0x21e)]('⚠️\x20Socket\x20disconnected:', _0x5e4004), document['getElementById'](_0x502ed4(0x227))[_0x502ed4(0x1fd)] = _0x502ed4(0x1df), document[_0x502ed4(0x1bb)](_0x502ed4(0x227))[_0x502ed4(0x223)]['remove'](_0x502ed4(0x252), _0x502ed4(0x249)), document[_0x502ed4(0x1bb)](_0x502ed4(0x227))[_0x502ed4(0x223)]['add'](_0x502ed4(0x249));
    }), socket['on'](_0x150d35(0x26e), _0x53db21 => {
        const _0x5c69ca = _0x150d35;
        console[_0x5c69ca(0x213)](_0x5c69ca(0x24a), _0x53db21), document[_0x5c69ca(0x1bb)](_0x5c69ca(0x227))['textContent'] = _0x5c69ca(0x2cc), document[_0x5c69ca(0x1bb)]('socket-status')['classList'][_0x5c69ca(0x2b7)](_0x5c69ca(0x252), _0x5c69ca(0x249)), document[_0x5c69ca(0x1bb)](_0x5c69ca(0x227))['classList']['add']('dis');
    }), socket['on'](_0x150d35(0x279), _0x11e505 => {
        const _0x55e914 = _0x150d35;
        console[_0x55e914(0x21e)](_0x55e914(0x192) + _0x11e505), document[_0x55e914(0x1bb)](_0x55e914(0x227))[_0x55e914(0x1fd)] = _0x55e914(0x296) + _0x11e505 + ')', document[_0x55e914(0x1bb)]('socket-status')[_0x55e914(0x223)]['remove'](_0x55e914(0x252), _0x55e914(0x249)), document[_0x55e914(0x1bb)]('socket-status')[_0x55e914(0x223)]['add']('con');
    }), socket['on'](_0x150d35(0x202), _0x35ff50 => {
        const _0x11435f = _0x150d35;
        console['error'](_0x11435f(0x1a9), _0x35ff50), document[_0x11435f(0x1bb)](_0x11435f(0x227))['textContent'] = _0x11435f(0x281), document[_0x11435f(0x1bb)](_0x11435f(0x227))[_0x11435f(0x223)][_0x11435f(0x2b7)](_0x11435f(0x252), _0x11435f(0x249)), document[_0x11435f(0x1bb)](_0x11435f(0x227))['classList'][_0x11435f(0x1e2)](_0x11435f(0x249));
    });
}
async function toggleBlockUser() {
    const _0x3c9091 = _0x4bdcb7;
    if (!currentChatUserId) {
        showPopupMessage2('Error:\x20No\x20user\x20selected\x20to\x20block.');
        return;
    }
    const _0x2ba2fe = blockButton[_0x3c9091(0x1fa)][_0x3c9091(0x28f)] === _0x3c9091(0x25c), _0x2fb585 = _0x2ba2fe ? _0x3c9091(0x24b) : _0x3c9091(0x23a);
    if (!confirm(_0x3c9091(0x1c8) + _0x2fb585 + '\x20' + currentChatUsername + '?'))
        return;
    try {
        const _0x3f3bae = {
                'blockUserId': currentChatUserId,
                'unblockUserId': currentChatUserId
            }, _0x32c6a2 = await apiRequest('/api/chats/' + _0x2fb585, {
                'method': _0x3c9091(0x26f),
                'headers': {
                    'Content-Type': _0x3c9091(0x273),
                    'Authorization': _0x3c9091(0x2ac) + localStorage[_0x3c9091(0x22c)](_0x3c9091(0x295))
                },
                'body': JSON[_0x3c9091(0x2c7)](_0x3f3bae)
            }), _0x8c5929 = await _0x32c6a2[_0x3c9091(0x2d1)]();
        _0x32c6a2['ok'] ? (blockButton[_0x3c9091(0x1fd)] = _0x2ba2fe ? _0x3c9091(0x1dc) : _0x3c9091(0x2c1), blockButton['dataset'][_0x3c9091(0x28f)] = !_0x2ba2fe, socket[_0x3c9091(0x19c)]('leaveRoom', { 'currentChatUserId': currentChatUserId }), showPopupMessage(currentChatUsername + _0x3c9091(0x282) + (_0x2ba2fe ? _0x3c9091(0x2ae) : _0x3c9091(0x28f)) + '.'), _0x2ba2fe && (recipientUserId = currentChatUserId, socket ? socket['emit'](_0x3c9091(0x1ec), { 'recipientUserId': recipientUserId }) : console[_0x3c9091(0x213)](_0x3c9091(0x2a6), recipientUserId))) : alert(_0x8c5929[_0x3c9091(0x213)] || _0x3c9091(0x1e7));
    } catch (_0x2facbd) {
        console[_0x3c9091(0x213)](_0x3c9091(0x207), _0x2facbd['message']);
    }
}
async function markMessagesssssAsRead(_0x5a124f, _0x203fc6) {
    const _0x10090e = _0x4bdcb7;
    try {
        const _0x119fe7 = await apiRequest(_0x10090e(0x195), {
                'method': _0x10090e(0x2a5),
                'headers': {
                    'Content-Type': _0x10090e(0x273),
                    'Authorization': _0x10090e(0x2ac) + localStorage[_0x10090e(0x22c)]('accessToken')
                },
                'body': JSON[_0x10090e(0x2c7)]({
                    'senderId': senderUserId,
                    'receiverId': currentChatUserId
                })
            }), _0x209037 = await _0x119fe7[_0x10090e(0x2d1)]();
        _0x119fe7['ok'] ? (console['log'](_0x10090e(0x1be), _0x209037[_0x10090e(0x2b0)]), io['to'](_0x5a124f)['emit'](_0x10090e(0x2b6), {
            'readerId': readerId,
            'chatId': chatId
        })) : console[_0x10090e(0x213)]('Failed\x20to\x20mark\x20messages\x20as\x20read:', _0x209037[_0x10090e(0x213)]);
    } catch (_0x450301) {
        console[_0x10090e(0x213)](_0x10090e(0x27f), _0x450301);
    }
}
async function updateBlockButton() {
    const _0x2ee8bd = _0x4bdcb7;
    if (!currentChatUserId) {
        showPopupMessage(_0x2ee8bd(0x1d5));
        return;
    }
    try {
        const _0x5278ba = await apiRequest(_0x2ee8bd(0x2c5) + currentChatUserId, {
            'method': _0x2ee8bd(0x232),
            'headers': { 'Authorization': _0x2ee8bd(0x2ac) + localStorage[_0x2ee8bd(0x22c)](_0x2ee8bd(0x295)) }
        });
        if (!_0x5278ba['ok'])
            throw new Error(_0x2ee8bd(0x220) + _0x5278ba[_0x2ee8bd(0x293)]);
        const _0x13c3bf = await _0x5278ba[_0x2ee8bd(0x2d1)]();
        if (typeof _0x13c3bf[_0x2ee8bd(0x2bb)] === _0x2ee8bd(0x1f0))
            throw new Error(_0x2ee8bd(0x1b2));
        blockButton[_0x2ee8bd(0x1fd)] = _0x13c3bf[_0x2ee8bd(0x2bb)] ? _0x2ee8bd(0x2c1) : _0x2ee8bd(0x1dc), blockButton['dataset'][_0x2ee8bd(0x28f)] = _0x13c3bf[_0x2ee8bd(0x2bb)][_0x2ee8bd(0x1ee)]();
    } catch (_0x274df2) {
        console['error']('Error\x20checking\x20block\x20status:', _0x274df2), blockButton[_0x2ee8bd(0x297)]['display'] = _0x2ee8bd(0x1e9);
    }
}
function toggleDropdown() {
    const _0xa7c3d7 = _0x4bdcb7, _0x5a12d3 = document[_0xa7c3d7(0x1bb)](_0xa7c3d7(0x2b8));
    _0x5a12d3[_0xa7c3d7(0x223)][_0xa7c3d7(0x1a8)]('show') ? (_0x5a12d3[_0xa7c3d7(0x223)][_0xa7c3d7(0x2b7)](_0xa7c3d7(0x1a6)), setTimeout(() => _0x5a12d3[_0xa7c3d7(0x297)]['display'] = _0xa7c3d7(0x1e9), 0xc8)) : (_0x5a12d3[_0xa7c3d7(0x297)]['display'] = _0xa7c3d7(0x1c9), setTimeout(() => _0x5a12d3['classList'][_0xa7c3d7(0x1e2)]('show'), 0xa));
}
document[_0x4bdcb7(0x219)]('click', function (_0x772cbb) {
    const _0x13af8a = _0x4bdcb7, _0x544dde = document[_0x13af8a(0x1bb)](_0x13af8a(0x2b8)), _0x57845c = document['getElementById'](_0x13af8a(0x1fb));
    !_0x57845c[_0x13af8a(0x1a8)](_0x772cbb[_0x13af8a(0x1ea)]) && !_0x544dde[_0x13af8a(0x1a8)](_0x772cbb[_0x13af8a(0x1ea)]) && (_0x544dde['classList'][_0x13af8a(0x2b7)](_0x13af8a(0x1a6)), setTimeout(() => _0x544dde['style'][_0x13af8a(0x2c2)] = _0x13af8a(0x1e9), 0xc8));
});
async function checkUserAvailability(_0x1af5f7) {
    const _0x32461a = _0x4bdcb7;
    try {
        const _0xab45a1 = await apiRequest('/api/chats/availability/' + _0x1af5f7, {
            'method': _0x32461a(0x232),
            'headers': { 'Authorization': _0x32461a(0x2ac) + localStorage[_0x32461a(0x22c)](_0x32461a(0x295)) }
        });
        if (!_0xab45a1['ok'])
            throw new Error(_0x32461a(0x228));
        const _0x8f453b = await _0xab45a1[_0x32461a(0x2d1)]();
        _0x8f453b[_0x32461a(0x23b)] ? (updateStatus('Online'), chatUserElement[_0x32461a(0x223)][_0x32461a(0x1e2)](_0x32461a(0x1a4)), chatUserElement['classList'][_0x32461a(0x2b7)]('offline')) : (chatUserElement[_0x32461a(0x223)][_0x32461a(0x1e2)](_0x32461a(0x1c4)), chatUserElement['classList']['remove'](_0x32461a(0x1a4)));
        if (lastActiveElement) {
            if (chatUserElement['classList'][_0x32461a(0x1a8)](_0x32461a(0x1c4))) {
                const _0x30a13b = new Date(_0x8f453b[_0x32461a(0x1e1)]), _0x1fedec = new Date(), _0x296f09 = _0x30a13b[_0x32461a(0x1d4)](_0x32461a(0x2a4), {
                        'hour': '2-digit',
                        'minute': '2-digit',
                        'hour12': !![]
                    }), _0x32f8eb = new Intl[(_0x32461a(0x251))]([], {
                        'year': _0x32461a(0x28d),
                        'month': '2-digit',
                        'day': _0x32461a(0x23e)
                    }), _0x2ceed6 = _0x30a13b['toDateString']() === _0x1fedec[_0x32461a(0x2c0)](), _0x34961f = _0x30a13b['getDate']() === _0x1fedec[_0x32461a(0x1ae)]() - 0x1 && _0x30a13b[_0x32461a(0x210)]() === _0x1fedec[_0x32461a(0x210)]() && _0x30a13b[_0x32461a(0x241)]() === _0x1fedec[_0x32461a(0x241)]();
                let _0x10b2c4;
                if (_0x2ceed6)
                    _0x10b2c4 = _0x32461a(0x216) + _0x296f09;
                else
                    _0x34961f ? _0x10b2c4 = _0x32461a(0x240) + _0x296f09 : _0x10b2c4 = _0x32461a(0x216) + _0x32f8eb[_0x32461a(0x259)](_0x30a13b) + '\x20' + _0x296f09;
                lastActiveElement[_0x32461a(0x1fd)] = _0x10b2c4;
            }
        }
    } catch (_0x136b39) {
        console[_0x32461a(0x213)]('Error\x20checking\x20user\x20availability:', _0x136b39);
    }
}
function updateStatus(_0x44ec69) {
    const _0x47521f = _0x4bdcb7;
    lastActiveElement['style'][_0x47521f(0x2be)] = _0x47521f(0x286), lastActiveElement['style']['opacity'] = '0', setTimeout(() => {
        const _0x446ccf = _0x47521f;
        if (_0x44ec69 === _0x446ccf(0x1b8))
            lastActiveElement[_0x446ccf(0x1fd)] = 'Online', lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x203)] = _0x446ccf(0x230), lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x23f)] = _0x446ccf(0x1ff);
        else {
            if (_0x44ec69 === _0x446ccf(0x1d1))
                lastActiveElement[_0x446ccf(0x1fd)] = _0x446ccf(0x265), lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x203)] = _0x446ccf(0x1d2), lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x23f)] = _0x446ccf(0x1c3);
            else {
                if (_0x44ec69 === _0x446ccf(0x1cc))
                    lastActiveElement[_0x446ccf(0x1fd)] = _0x446ccf(0x1cc), lastActiveElement['style']['color'] = _0x446ccf(0x291), lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x23f)] = _0x446ccf(0x1c3);
                else
                    _0x44ec69 === _0x446ccf(0x1eb) && (lastActiveElement[_0x446ccf(0x1fd)] = 'User\x20is\x20Typing\x20.\x20.\x20.', lastActiveElement[_0x446ccf(0x297)][_0x446ccf(0x203)] = _0x446ccf(0x1bd), lastActiveElement[_0x446ccf(0x297)]['fontWeight'] = _0x446ccf(0x1c3));
            }
        }
        lastActiveElement[_0x446ccf(0x297)]['opacity'] = '1';
    }, 0x12c);
}
function lol() {
    const _0x1942e6 = _0x4bdcb7;
    document[_0x1942e6(0x27d)](_0x1942e6(0x226))[_0x1942e6(0x1e4)](_0x2fba4b => {
        const _0x17e8bd = _0x1942e6;
        _0x2fba4b[_0x17e8bd(0x1fd)] === '✔' && (_0x2fba4b[_0x17e8bd(0x1fd)] = '✔✔');
    });
}
function setViewportHeight() {
    const _0x35635b = _0x4bdcb7;
    document[_0x35635b(0x238)][_0x35635b(0x297)]['setProperty']('--vh', window['innerHeight'] * 0.01 + 'px');
}
window['addEventListener']('resize', setViewportHeight), setViewportHeight();
function showChatPanel() {
    const _0x31a3e7 = _0x4bdcb7;
    document[_0x31a3e7(0x1b3)](_0x31a3e7(0x2b4))['classList'][_0x31a3e7(0x1e2)]('show-chat');
}
function showUserListPanel() {
    const _0x1675d7 = _0x4bdcb7;
    document[_0x1675d7(0x1b3)](_0x1675d7(0x2b4))['classList']['remove'](_0x1675d7(0x221));
}
document[_0x4bdcb7(0x1b3)](_0x4bdcb7(0x26b))['addEventListener'](_0x4bdcb7(0x1d8), _0x3c637a => {
    const _0x2ca80b = _0x4bdcb7;
    window[_0x2ca80b(0x1fe)] <= 0x300 && showChatPanel();
}), document[_0x4bdcb7(0x1b3)]('.back-btn')[_0x4bdcb7(0x219)](_0x4bdcb7(0x1d8), _0x1bd2b7 => {
    window['innerWidth'] <= 0x300 && showUserListPanel();
});
const savedImage = localStorage[_0x4bdcb7(0x22c)]('userProfilePic');
document[_0x4bdcb7(0x1bb)](_0x4bdcb7(0x275))[_0x4bdcb7(0x29a)] = savedImage || _0x4bdcb7(0x1af);
function showNotification(_0x34041a) {
    const _0x34667c = _0x4bdcb7, _0x5aa837 = document[_0x34667c(0x26d)](_0x34667c(0x27a));
    _0x5aa837['textContent'] = _0x34041a, _0x5aa837['style']['cssText'] = _0x34667c(0x21a), document[_0x34667c(0x1c2)][_0x34667c(0x270)](_0x5aa837), setTimeout(() => _0x5aa837[_0x34667c(0x2b7)](), 0xbb8);
}
async function generateKey() {
    const _0x2d6dfc = _0x4bdcb7;
    if (sessionStorage[_0x2d6dfc(0x22c)]('encryptionKey'))
        return;
    const _0x10a25a = await crypto['subtle'][_0x2d6dfc(0x2bc)]({
            'name': _0x2d6dfc(0x1ef),
            'length': 0x100
        }, !![], [
            _0x2d6dfc(0x2cf),
            'decrypt'
        ]), _0x50cc4e = new Uint8Array(await crypto[_0x2d6dfc(0x28c)][_0x2d6dfc(0x1d7)]('raw', _0x10a25a));
    sessionStorage['setItem']('encryptionKey', JSON['stringify'](Array['from'](_0x50cc4e)));
}
generateKey();
async function getKey() {
    const _0x53c06b = _0x4bdcb7, _0x4060b6 = JSON['parse'](sessionStorage[_0x53c06b(0x22c)](_0x53c06b(0x1cb))), _0x3ba842 = new Uint8Array(_0x4060b6);
    return await crypto[_0x53c06b(0x28c)]['importKey'](_0x53c06b(0x22d), _0x3ba842, { 'name': _0x53c06b(0x1ef) }, !![], [
        _0x53c06b(0x2cf),
        _0x53c06b(0x19f)
    ]);
}
function _0x4dea() {
    const _0x328874 = [
        'y3jLyxrLrwXLBwvUDa',
        'y29UBMvJDf9LCNjVCG',
        'ue9tva',
        'yxbWzw5Kq2HPBgq',
        'C2vHCMnOugfYyw1Z',
        'zMXLEa',
        'yxbWBgLJyxrPB24VANnVBG',
        'C2nYB2XSsgvPz2H0',
        'BxLHDMf0yxi',
        'pha+tM8GBwvZC2fNzxmGEwv0lJWVCd4',
        'yMX1CI1ZBgLKzxi',
        'Bg9JyxrPB24',
        'CMvJB25Uzwn0',
        'zgL2',
        'B25JBgLJAW',
        'C29Tzq',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'idXKAxyGy2XHC3m9iMXVywrLCI1JB250ywLUzxiIpIa8zgL2ignSyxnZpsjSB2fKzxiIpJWVzgL2pIa8C3bHBJ5mB2fKAw5NienOyxrZlI4Upc9ZCgfUpIa8l2rPDJ4j',
        'rxjYB3iGBwfYA2LUzYbTzxnZywDLCYbHCYbYzwfKoG',
        'y292zxi',
        '4PQG77IpifjLy29UBMvJDgLVBIbgywLSzwq',
        'igHHCYbIzwvUia',
        'C2v0',
        'yMfJA2DYB3vUzeLTywDL',
        '4PQG77IpifnVBwuGy2HHDhmGzMfPBgvKihrVigXVywqGzhvLihrVigrLy3j5ChrPB24GzxjYB3jZlG',
        'B3bHy2L0EsaWlJnZigvHC2uTAw4TB3v0',
        'mZuXotC2mMnwzKLUDW',
        'C2vSzG',
        'DxnLCK9UBgLUzq',
        'rxjYB3i6ia',
        'B3jHBMDL',
        'C3vIDgXL',
        'BNvTzxjPyW',
        'l25PAg9Uz28VBwvKAweVBM90AwzPy2f0Aw9UlM1WmW',
        'yMXVy2TLza',
        'sM9PBMvKignOyxqGD2L0AdOG',
        'CMvK',
        'AhjLzG',
        'C3rHDhvZ',
        'yMX1CI1IDg4',
        'ywnJzxnZvg9Rzw4',
        '8j+BNcbszwnVBM5Ly3rLzcaOqxr0zw1WDca',
        'C3r5Bgu',
        'yMfJA2DYB3vUzfnPEMu',
        'l2fWAs9JAgf0CY9OAxn0B3j5lW',
        'C3jJ',
        'w0LTywDLxq',
        'tgvMDcbJAgf0ihDPDgG6ia',
        'qwnJzxnZigrLBMLLzc4',
        'DxnLCI1PDgvT',
        'BM93',
        'yMvMB3jLDw5SB2fK',
        'zw1VAMKTyNv0Dg9U',
        'mtC3ndq4ofrlA1PUAq',
        'B3rOzxi',
        'zw4Tvvm',
        'uefuq0G',
        'sM9PBIbLBwL0igzHAwXLzcb0BYbZB2nRzxqGD2L0Acb1C2vYoG',
        'C2v0sxrLBq',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEtWVCd4',
        '8j+uTcbtB2nRzxqGDw5KzwzPBMvKoIbmAwTLBhKGzhvLihrVihnVy2TLDcbPBML0AwfSAxnHDgLVBIbHC3LUy2HYB25VDxm',
        'A2v5zg93BG',
        'yNvZEq',
        'qMvHCMvYia',
        'pgGXpLnLC3nPB24GrxHWAxjLzcWGuMvMCMvZAcb0AguGCgfNzs48l2GXpGOjcqKjcqKjcqKjcqKjpgLTzYbZDhLSzt0IAgvPz2H0oJuWChG7ihDPzhrOoJuWChG7iIbZCMm9iI9UAwHVBMDVl2LTzY9Py29UlNbUzYiGlZ4j',
        'Dw5IBg9JA2vK',
        'Bg9NB3v0qNrU',
        'DxbKyxrLze1LC3nHz2vZ',
        'C29JA2v0oG',
        'zMLSzxm',
        'y2HHDf8',
        'lMnOyxqTy29UDgfPBMvY',
        'Aw5WDxq',
        'BwvZC2fNzxnszwfK',
        'CMvTB3zL',
        'zhjVCgrVD24TBwvUDq',
        'DxnLCK9MzMXPBMu',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'AxncBg9JA2vK',
        'z2vUzxjHDgvlzxK',
        'rxjYB3iGBg9HzgLUzYbJAgf0ig1LC3nHz2vZoG',
        'DhjHBNnPDgLVBG',
        'Dg9mB3DLCKnHC2u',
        'Dg9eyxrLu3rYAw5N',
        'vw5IBg9JAW',
        'zgLZCgXHEq',
        'rxjYB3iGCMvMCMvZAgLUzYbJAgf0oG',
        'AgLKzgvU',
        'l2fWAs9JAgf0CY9IBg9JAY1ZDgf0DxmV',
        'DxnLCM5HBwu',
        'C3rYAw5NAwz5',
        '4P2miezHAwXLzcb0BYbYzwzYzxnOignOyxqUifbSzwfZzsb0CNKGywDHAw4U',
        'ndC1mJC4m1LAzeD0zG',
        'igHHCYbIzwvUignSzwfYzwqU',
        'y2HHDejSDxi',
        '4PQG77IpienVBM5Ly3rPB24GrMfPBgvK',
        'CMvJzwL2zu1LC3nHz2u',
        'pha+rxjYB3iGBg9HzgLUzYbTzxnZywDLCY4GugXLyxnLihrYEsbHz2fPBIbSyxrLCI48l3a+',
        'zw5JCNLWDa',
        'C3bSAxq',
        'ANnVBG',
        'zMLSzvvYBa',
        'BwfYA0fZuMvHza',
        'z2v0',
        'q2HHDcb1C2vYieLeigLZihvUzgvMAw5Lzc4Gq2fUBM90igrLBgv0zsbJAgf0igHPC3rVCNKU',
        'CMvJzwL2zxi',
        'Aw1Hz2uTAw5WDxq',
        'ufvu',
        'ywXS',
        '8j+BNcbszwnVBM5Ly3rLzcb0BYbZzxj2zxiSigf0DgvTChqGiW',
        'ywX0',
        '8j+tQsbozxCGBwvZC2fNzxmGBg9HzgvKihn1y2nLC3nMDwXSEs4',
        'l2fWAs9JAgf0CY9TyxjRlxjLywq',
        '8j+BNcbdB25Uzwn0zwq',
        'mtm0nJmXm01Su1juBa',
        '8j+uHcbszwzYzxnOAw5NignOyxqGD2L0Aca',
        'CMvHzc1YzwnLAxb0',
        'CgXHEq',
        'lMnOyxqTBwvZC2fNzxm',
        'zw1PDa',
        'mZq0mdK4qujNz2rp',
        'Aw5JBhvKzxm',
        'zgvJCNLWDa',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLigzVCIa',
        'BgLNAhq',
        'zNjVBq',
        'y29UBMvJDa',
        'B25SAw5L',
        'Aw1Hz2u',
        'C2HVDW',
        'vxbSB2fKAw5NigLTywDLlI4U',
        'y29UDgfPBNm',
        '4PQG77IpifjLy29UBMvJDgLVBIbMywLSzwq6',
        '4PYfienOyxqGq2fJAguGtg9HzgvKifn1y2nLC3nMDwXSEs4',
        'yMXVy2STyNv0Dg9U',
        'DxnLCKj1C3K',
        'CMvTB3zLsxrLBq',
        'z2v0rgf0zq',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'nuDxt1vTDa',
        'zxHW',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCG',
        'CxvLCNLtzwXLy3rVCG',
        'y2fUy2vSlxbYzxzPzxC',
        'BwvZC2fNzq',
        'y2vUDgvY',
        'C2vUzgvY',
        't25SAw5L',
        'u2vZC2LVBIbLEhbPCMvK',
        'y3vYCMvUDfrPBwu',
        'z2v0rwXLBwvUDej5swq',
        'w2rHDgeTDxnLCI1Pzd0N',
        'i0reodzgrG',
        'twvZC2fNzxmGBwfYA2vKigfZihjLywq6',
        'x2LK',
        'uMvTB3zLzcbJB3jYDxb0zwqGy2HHDcbJywnOzsbMB3iGDxnLCIa',
        'Aw1Hz2uTChjLDMLLDY1JB250ywLUzxi',
        'yM9KEq',
        'BM9YBwfS',
        'B2zMBgLUzq',
        'l2fWAs9JAgf0CY9ZyxzLlwnOyxr0zwqTDxnLCG',
        'y291BNrKB3DU',
        'DMfSDwu',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVia',
        'yMXVy2S',
        'Aw1Hz2vvCMW',
        'zw5JCNLWDgLVBKTLEq',
        't2zMBgLUzq',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AguGzw50AxjLignOyxqGAgLZDg9YEt8GvgHPCYbHy3rPB24Gy2fUBM90igjLihvUzg9Uzs4',
        '8j+tOsbgzxrJAgLUzYbdAgf0igHPC3rVCNKGzNjVBsbZzxj2zxi',
        'y2HHDc13Aw5KB3C',
        'AgfZ',
        'qNvZEq',
        'EwvSBg93',
        'BwvZC2fNzs1PBNb1Da',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'rxjYB3i6ie5VihvZzxiGC2vSzwn0zwqGDg8GyMXVy2SU',
        'y2HHDhrLzfvZzxjZ',
        'zxHWB3j0s2v5',
        'y2XPy2S',
        'C2vUzc1IDxr0B24',
        'igHHCYbIzwvUigrLBgv0zwqGyNKGDgHLig90AgvYihvZzxiU',
        'DgLTzxn0yw1W',
        'qMXVy2S',
        'pha+u2vHCMnOihf1zxj5igXLBMD0AcbTDxn0igjLid49idm8l3a+',
        'C2vZC2LVBI1Hy3rPDMu',
        '4PQG77IpierPC2nVBM5Ly3rLza',
        '8j+sRca',
        'BgfZDefJDgL2zq',
        'ywrK',
        'y2HHDfDHBgXWyxbLCG',
        'zM9YrwfJAa',
        'CgfYC2u',
        'lMnOyxqTD2LUzg93',
        'rxjYB3iGyMXVy2TPBMCGDxnLCI4',
        'zw5JB2rL',
        'BM9Uzq',
        'DgfYz2v0',
        'vhLWAw5N',
        'AM9PBG',
        'DhjPBq',
        'Dg9tDhjPBMC',
        'quvtluDdtq',
        'Dw5KzwzPBMvK',
        'DxnLCKLK',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZig1LC3nHz2u/',
        'Aw1Hz2uTyNv0Dg9U',
        'tM8GDg9Rzw4GzM91BMq',
        '4PQHifvZAw5NienHy2HLzcbdAgf0igzVCIa',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVignSzwfYihrOzsbJAgf0ignHy2HLigzVCIa',
        'D2fYBG',
        'zMLSDgvY',
        'l2fWAs9JAgf0CY9JAgf0DgvKlxvZzxjZ',
        'zgf0yxnLDa',
        'Bw9Yzs1IDg4',
        'rw50zxi',
        'Dgv4DenVBNrLBNq',
        'Aw5UzxjxAwr0Aa',
        'yM9Sza',
        'rxjYB3iGDxbSB2fKAw5NigLTywDLoG',
        're9nq29UDgvUDeXVywrLza',
        'CMvJB25Uzwn0x2vYCM9Y',
        'y29SB3i',
        '8j+uTpcFN6lWN5+GieXVywrLzcbdAgf0DgvKifvZzxjZig1HDgnOAw5Nihf1zxj5',
        'ChvZAfn0yxrL',
        'Aw1Hz2uTBg9HzgvY',
        'rxjYB3iGyMXVy2TPBMCGDxnLCJO',
        'BgfUz3vHz2u',
        'Dgv4Da',
        'mJKXnty4sLHJwfH6',
        'C3rYAw5N',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLoG',
        'q2HHDcbOAxn0B3j5ihDPDgGG',
        'sw1Hz2uGDxbSB2fKigzHAwXLzce',
        'rgvSzxrPBMCGq2HHDcbiAxn0B3j5lcbqBgvHC2uGv2fPDc4UlG',
        'z2v0tw9UDgG',
        'D2fSBhbHCgvYtw9KywW',
        'BgvUz3rO',
        'zxjYB3i',
        'vxnLCIa',
        'Dg9Nz2XL',
        'tgfZDcbtzwvUoIa',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEs48l3a+',
        '8j+BNcbtB2nRzxqGy29UBMvJDgvKihrVihrOzsbZzxj2zxiGD2L0AcbjrdO',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idCWChG7ihjPz2H0oIaXmhb4oYbIywnRz3jVDw5KoIaJmda3yMzMoYbJB2XVCJOGD2HPDgu7ihbHzgrPBMC6idHWEdSGyM9YzgvYlxjHzgL1CZOGnhb4oYb6lwLUzgv4oIaXmdaWoW',
        'rxjYB3iGzgvSzxrPBMCGy2HHDcbOAxn0B3j5oG',
        'C3rHCNrZv2L0Aa',
        'BgvHDMvsB29T',
        'Bg9N',
        'ls1IBhvYlxzHBhvL',
        'sfruucbLCNjVCIeGu3rHDhvZoIa',
        'C2HVDY1JAgf0',
        'zMXVB3i',
        'y2XHC3nmAxn0',
        'B25WB3bZDgf0zq',
        '8j+uTcbtB2nRzxqGrxjYB3i6',
        'lM1LC3nHz2uUC2vSzIaUCMvHzc1YzwnLAxb0',
        'C29JA2v0lxn0yxr1CW',
        'vxnLCIbUB3qGzM91BMqGB3iGC2vYDMvYigvYCM9Y',
        'yMfJA2DYB3vUza',
        'C2v0uhjVCgvYDhK',
        'rxjYB3i6iezPBguGC2L6zsbLEgnLzwrLzcbVCIb0B28GBwfUEsbYzxf1zxn0CW',
        'z2v0sxrLBq',
        'CMf3',
        'vxnLCIbjrcbVCIbvC2vYBMfTzsbPCYbTAxnZAw5NlIbtA2LWCgLUzY4',
        'DhLWAw5N',
        'z3jLzw4',
        'yMX1CI1ZBgLKzxiTy29UDgfPBMvY',
        'r0vu',
        'l2fWAs9JAgf0CY91C2vYCZ91C2vYBMfTzt0',
        'pgrPDIbJBgfZCZ0Iy2HHDc1TzxnZywDLCYi+pc9KAxy+',
        '8j+KR/cFPk/WN6sV',
        'zgvSzxrLlwj1DhrVBG',
        'Aw1N',
        'zg9JDw1LBNrfBgvTzw50',
        'Aw5Uzxjive1m',
        'yMXVy2STDxnLCG',
        'AxnpBMXPBMu',
        'rMfPBgvKihrVigrLBgv0zsbJAgf0igHPC3rVCNKUifbSzwfZzsb0CNKGywDHAw4U',
        'B25SB2fK',
        'mI1KAwDPDa',
        'zM9UDfDLAwDODa',
        'tgfZDcbtzwvUoIbzzxn0zxjKyxKSia',
        'z2v0rNvSBfLLyxi',
        'C3bHBG',
        'rMfPBgvKihrVigrLy3j5ChqGy2HHDcbMB3iG',
        'mJfLEvLdA1e',
        'yMfJA2DYB3vUzfbVC2L0Aw9U',
        'Aw1Hz2uTChjLDMLLDW',
        'C2vHCMnOlxvZzxjZ',
        'y2HHBMDL',
        'zgLZ',
        '4PQG77IpienVBM5Ly3rPB24GzMfPBgvKoG',
        'Dw5IBg9JAY11C2vY',
        '8j+uJsbnzxnZywDLigLNBM9Yzwq6ie5VDcbMCM9TigfJDgL2zsbJAgf0',
        '4PQG77Ipie5VignOyxqGC2vSzwn0zwqGDg8GCMvMCMvZAc4',
        'zgf0yq',
        'C2vUze1LC3nHz2u',
        'rxjYB3iGDxbKyxrPBMCGC2vYDMvYoG',
        'rgf0zvrPBwvgB3jTyxq',
        'y29U',
        '4PYfienOyxqGAxmGywXYzwfKEsb1Ccb0BYbKyxrLihDPDgGG',
        'rxjYB3iGBg9HzgLUzYbJAgf0igXPC3q6',
        'u2vZC2LVBIbfEhbPCMvK',
        'B3jPz2LUywXuzxH0',
        'BwfW',
        'y2HHDc11C2vY',
        'zM9YBwf0',
        'AxnszwfK',
        'C2vZC2LVBI1LEhbPCMvK',
        'Dhj1zq',
        'cGKGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNr5CgLUzY1KB3rZiJ4kcsaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpJWVC3bHBJ48C3bHBJ48l3nWyw4+phnWyw4+pc9ZCgfUpGOjicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcsaGicaGicaGicaGicaGica',
        'zw1VAMKTCgLJA2vY',
        'y2HHDc1PBwfNzq',
        'zgLZy29UBMvJDa',
        'rNvUy3rPB24GDw5HDMfPBgfIBguHie1LC3nHz2uGBM90igrLBgv0zwqGAxrZigP1C3qGysbKzw1VlG',
        'x2jSyw5R',
        'A2v5',
        'rgvJCNLWDgLVBIbMywLSzwq6',
        'vxnLCIbPCYbcDxn5',
        'CMvHzefZrgf0yvvsta',
        'ChvZAa',
        'nZG4mdy1sMzAChPO',
        'zgvSzxrL',
        'y2HHDerLBgv0zwq',
        'i2nOyxqTBgLZDa',
        'y2f0y2G'
    ];
    _0x4dea = function () {
        return _0x328874;
    };
    return _0x4dea();
}
async function encryptMessage(_0x54af0a) {
    const _0x587390 = _0x4bdcb7, _0x20867b = await getKey(), _0x155417 = crypto['getRandomValues'](new Uint8Array(0xc)), _0x2bb50f = new TextEncoder()[_0x587390(0x1e8)](_0x54af0a), _0x41ce74 = await crypto['subtle'][_0x587390(0x2cf)]({
            'name': _0x587390(0x1ef),
            'iv': _0x155417
        }, _0x20867b, _0x2bb50f);
    return JSON['stringify']({
        'iv': Array[_0x587390(0x1a2)](_0x155417),
        'data': Array[_0x587390(0x1a2)](new Uint8Array(_0x41ce74))
    });
}
async function decryptMessage(_0x3490c7) {
    const _0x2cd55a = _0x4bdcb7;
    try {
        const _0x397b24 = await getKey(), _0x5125a8 = JSON[_0x2cd55a(0x1e5)](_0x3490c7), _0x63c7e3 = new Uint8Array(_0x5125a8['iv']), _0x11aa04 = new Uint8Array(_0x5125a8[_0x2cd55a(0x24e)]), _0xcece75 = await crypto[_0x2cd55a(0x28c)][_0x2cd55a(0x19f)]({
                'name': _0x2cd55a(0x1ef),
                'iv': _0x63c7e3
            }, _0x397b24, _0x11aa04);
        return new TextDecoder()['decode'](_0xcece75);
    } catch (_0x27470e) {
        return console[_0x2cd55a(0x213)](_0x2cd55a(0x264), _0x27470e), null;
    }
}
async function loadChatCache() {
    const _0xa8be95 = _0x4bdcb7;
    showNotification('🔑\x20Loading\x20Encrypted\x20Chat\x20Cache...');
    let _0x37ca88 = ![];
    for (let _0x53c287 = 0x0; _0x53c287 < localStorage[_0xa8be95(0x212)]; _0x53c287++) {
        const _0x43d6ed = localStorage['key'](_0x53c287);
        if (_0x43d6ed[_0xa8be95(0x21c)]('chat_')) {
            const _0x335054 = _0x43d6ed['split']('_')[0x1], _0x4622c1 = localStorage['getItem'](_0x43d6ed);
            if (_0x4622c1)
                try {
                    const _0x4b9320 = await Promise[_0xa8be95(0x191)](JSON[_0xa8be95(0x1e5)](_0x4622c1)[_0xa8be95(0x257)](async _0x243666 => {
                        const _0xecb7dd = await decryptMessage(_0x243666);
                        if (_0xecb7dd === null)
                            throw new Error('Decryption\x20failed');
                        return JSON['parse'](_0xecb7dd);
                    }));
                    chatCache[_0xa8be95(0x283)](_0x335054, _0x4b9320);
                } catch (_0x2ada6f) {
                    console[_0xa8be95(0x213)](_0xa8be95(0x243) + _0x335054 + ':', _0x2ada6f), localStorage[_0xa8be95(0x1ad)](_0x43d6ed), console[_0xa8be95(0x1f7)](_0xa8be95(0x1c0) + _0x335054), _0x37ca88 = !![];
                }
        }
    }
    _0x37ca88 ? showNotification(_0xa8be95(0x285)) : showNotification(_0xa8be95(0x1aa));
}
window[_0x4bdcb7(0x219)]('load', loadChatCache), document[_0x4bdcb7(0x219)](_0x4bdcb7(0x201), () => {
    const _0xba046e = _0x4bdcb7, _0x54ab09 = document['getElementById'](_0xba046e(0x2a1)), _0x4eec31 = document['getElementById'](_0xba046e(0x1d3)), _0x4322f5 = document[_0xba046e(0x1bb)](_0xba046e(0x25e)), _0x44a2a9 = new EmojiMart['Picker']({
            'onEmojiSelect': _0x1294f6 => {
                const _0x38ef57 = _0xba046e;
                _0x4eec31[_0x38ef57(0x1c7)] += _0x1294f6['native'];
            },
            'theme': _0xba046e(0x1a1)
        });
    _0x4322f5[_0xba046e(0x270)](_0x44a2a9), _0x54ab09[_0xba046e(0x219)](_0xba046e(0x1d8), () => {
        const _0x35caa7 = _0xba046e;
        _0x4322f5[_0x35caa7(0x223)][_0x35caa7(0x215)]('hidden');
    }), document[_0xba046e(0x219)](_0xba046e(0x1d8), _0x5cdc30 => {
        const _0x423083 = _0xba046e;
        !_0x4322f5[_0x423083(0x1a8)](_0x5cdc30[_0x423083(0x1ea)]) && _0x5cdc30['target'] !== _0x54ab09 && _0x4322f5[_0x423083(0x223)]['add'](_0x423083(0x2c4));
    });
}), document[_0x4bdcb7(0x1bb)]('wallpaper-btn')[_0x4bdcb7(0x27b)] = function () {
    const _0x2e75d6 = _0x4bdcb7;
    document[_0x2e75d6(0x1bb)](_0x2e75d6(0x211))[_0x2e75d6(0x297)][_0x2e75d6(0x2c2)] = _0x2e75d6(0x1c9);
};
function closeModal() {
    const _0x33950b = _0x4bdcb7;
    document[_0x33950b(0x1bb)](_0x33950b(0x211))['style'][_0x33950b(0x2c2)] = 'none';
}
function setChatBackground(_0x1a84de) {
    const _0x156b50 = _0x4bdcb7, _0x5a4714 = document[_0x156b50(0x1b3)](_0x156b50(0x1e6));
    _0x5a4714[_0x156b50(0x297)][_0x156b50(0x229)] = _0x1a84de, _0x5a4714[_0x156b50(0x297)][_0x156b50(0x298)] = _0x156b50(0x280), _0x5a4714[_0x156b50(0x297)][_0x156b50(0x245)] = _0x156b50(0x1b6), localStorage['setItem']('chatWallpaper', _0x1a84de), closeModal();
}
function resetChatBackground() {
    const _0x270155 = _0x4bdcb7;
    document[_0x270155(0x1b3)](_0x270155(0x1e6))[_0x270155(0x297)][_0x270155(0x229)] = '', localStorage[_0x270155(0x1ad)](_0x270155(0x1e3)), closeModal();
}
window[_0x4bdcb7(0x23d)] = function () {
    const _0x7deaa0 = _0x4bdcb7;
    let _0x25a24a = localStorage[_0x7deaa0(0x22c)](_0x7deaa0(0x1e3));
    if (_0x25a24a) {
        let _0x5e2a33 = document['querySelector'](_0x7deaa0(0x1e6));
        _0x5e2a33[_0x7deaa0(0x297)][_0x7deaa0(0x284)] = _0x25a24a, _0x5e2a33[_0x7deaa0(0x297)]['backgroundSize'] = 'cover', _0x5e2a33[_0x7deaa0(0x297)][_0x7deaa0(0x245)] = _0x7deaa0(0x1b6);
    }
}, document[_0x4bdcb7(0x219)](_0x4bdcb7(0x201), function () {
    const _0x560733 = _0x4bdcb7, _0xfe136f = document[_0x560733(0x1bb)](_0x560733(0x294)), _0x5c529e = document[_0x560733(0x1bb)](_0x560733(0x231)), _0x145f35 = document['getElementById'](_0x560733(0x277)), _0xf47b50 = document['getElementById']('blur-value'), _0x9fe2ed = document[_0x560733(0x1bb)]('close-blur-slider');
    let _0x2d7aa5 = localStorage[_0x560733(0x22c)](_0x560733(0x2cb)) || 0x5;
    document['documentElement']['style'][_0x560733(0x22a)](_0x560733(0x21f), _0x2d7aa5 + 'px'), _0x145f35[_0x560733(0x1c7)] = _0x2d7aa5, _0xf47b50[_0x560733(0x1fd)] = _0x2d7aa5, _0xfe136f[_0x560733(0x219)]('click', function () {
        const _0x31cac3 = _0x560733;
        _0x5c529e[_0x31cac3(0x297)][_0x31cac3(0x2c2)] = _0x31cac3(0x1c9);
    }), _0x145f35[_0x560733(0x219)]('input', function () {
        const _0x54e258 = _0x560733;
        document[_0x54e258(0x238)][_0x54e258(0x297)]['setProperty'](_0x54e258(0x21f), this['value'] + 'px'), _0xf47b50[_0x54e258(0x1fd)] = this[_0x54e258(0x1c7)], localStorage[_0x54e258(0x2a7)]('chatBlur', this[_0x54e258(0x1c7)]);
    }), _0x9fe2ed[_0x560733(0x219)](_0x560733(0x1d8), function () {
        const _0x39c900 = _0x560733;
        _0x5c529e[_0x39c900(0x297)][_0x39c900(0x2c2)] = _0x39c900(0x1e9);
    });
});
function clearChatCacheCnf(_0x235689) {
    const _0x7b5ace = _0x4bdcb7;
    if (!confirm(_0x7b5ace(0x1f6) + currentChatUsername + '?'))
        return;
    clearChatCache(_0x235689);
}
function clearChatCache(_0x2b0ef6) {
    const _0x1edc3a = _0x4bdcb7;
    chatCache[_0x1edc3a(0x1d0)](_0x2b0ef6) && chatCache[_0x1edc3a(0x269)](_0x2b0ef6);
    const _0x26e409 = _0x1edc3a(0x2b3) + _0x2b0ef6;
    localStorage[_0x1edc3a(0x22c)](_0x26e409) && localStorage[_0x1edc3a(0x1ad)](_0x26e409);
    const _0x12c469 = document['getElementById'](_0x1edc3a(0x1cf));
    _0x12c469[_0x1edc3a(0x239)] = '', showPopupMessage('Chat\x20cache\x20cleared\x20for\x20user\x20' + currentChatUsername);
}
async function deleteChatHistory(_0x1919db) {
    const _0x538ace = _0x4bdcb7;
    if (!_0x1919db) {
        showPopupMessage2(_0x538ace(0x2d5));
        return;
    }
    const _0x9bd0b9 = confirm(_0x538ace(0x1cd));
    if (!_0x9bd0b9)
        return;
    try {
        showPopupMessage2(_0x538ace(0x20f), 0x2710, _0x538ace(0x28b));
        const _0x111e47 = await apiRequest('/api/chats/delete/' + senderUserId + '/' + _0x1919db, {
                'method': _0x538ace(0x2d8),
                'headers': {
                    'Content-Type': _0x538ace(0x273),
                    'Authorization': _0x538ace(0x2ac) + localStorage['getItem'](_0x538ace(0x295))
                }
            }), _0x57c562 = await _0x111e47['json']();
        if (_0x111e47['ok']) {
            console['log']('Chat\x20history\x20deleted\x20successfully:', _0x57c562), showPopupMessage2('Chat\x20history\x20deleted\x20successfully', 0xbb8, _0x538ace(0x230));
            let _0x2ba9cc = JSON[_0x538ace(0x1e5)](localStorage['getItem'](_0x538ace(0x1d6))) || [];
            _0x2ba9cc = _0x2ba9cc[_0x538ace(0x1f8)](_0x58ee36 => _0x58ee36['userId'] !== _0x1919db), localStorage[_0x538ace(0x2a7)]('chattedUsers', JSON[_0x538ace(0x2c7)](_0x2ba9cc)), clearChatCache(currentChatUserId);
            const _0x29f465 = document[_0x538ace(0x1bb)](_0x538ace(0x1cf));
            _0x29f465['innerHTML'] = '', loadChatList(), socket[_0x538ace(0x19c)](_0x538ace(0x26a), { 'chatUserId': _0x1919db });
        } else
            console[_0x538ace(0x213)]('Failed\x20to\x20delete\x20chat\x20history:', _0x57c562[_0x538ace(0x213)]), alert(_0x538ace(0x28a) + _0x57c562['error']);
    } catch (_0x2241f6) {
        showPopupMessage2(_0x538ace(0x23c), 0x1388), console['error'](_0x538ace(0x21b), _0x2241f6);
    }
}
socket['on']('chatHistoryDeleted', ({
    senderUserId: _0x2c787e,
    chatUserId: _0x2c0ab7
}) => {
    const _0x67edba = _0x4bdcb7;
    console[_0x67edba(0x21e)]('Chat\x20history\x20with\x20' + _0x2c787e + _0x67edba(0x1da)), currentRoomId === _0x2c787e && (clearChatCache(currentRoomId), showPopupMessage(_0x67edba(0x20d) + currentRoomName + _0x67edba(0x2ca)));
}), intializeSocket(), socket['on'](_0x4bdcb7(0x213), _0x3e551f => {
    const _0x385f46 = _0x4bdcb7;
    console[_0x385f46(0x213)](_0x385f46(0x225), _0x3e551f);
});