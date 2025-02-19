const _0x275095 = _0x4117;
(function (_0x1b7ebf, _0x5877ea) {
    const _0x4a1c22 = _0x4117, _0x32b237 = _0x1b7ebf();
    while (!![]) {
        try {
            const _0x5f34e3 = parseInt(_0x4a1c22(0x1d4)) / 0x1 * (-parseInt(_0x4a1c22(0x1cf)) / 0x2) + parseInt(_0x4a1c22(0x1ed)) / 0x3 * (-parseInt(_0x4a1c22(0x24b)) / 0x4) + parseInt(_0x4a1c22(0x22a)) / 0x5 * (-parseInt(_0x4a1c22(0x208)) / 0x6) + parseInt(_0x4a1c22(0x230)) / 0x7 + parseInt(_0x4a1c22(0x206)) / 0x8 * (-parseInt(_0x4a1c22(0x1c5)) / 0x9) + -parseInt(_0x4a1c22(0x1b4)) / 0xa + parseInt(_0x4a1c22(0x1a6)) / 0xb;
            if (_0x5f34e3 === _0x5877ea)
                break;
            else
                _0x32b237['push'](_0x32b237['shift']());
        } catch (_0x2d26dd) {
            _0x32b237['push'](_0x32b237['shift']());
        }
    }
}(_0x5ee1, 0xed088), history['pushState'](null, null, location[_0x275095(0x2ab)]), window[_0x275095(0x251)] = function () {
    const _0x222de2 = _0x275095;
    history[_0x222de2(0x26f)](null, null, location['href']);
});
let tokenexpired;
const token = getJWTToken();
if (token) {
    const decodedToken = JSON['parse'](atob(token[_0x275095(0x1f4)]('.')[0x1])), expiryTime = decodedToken[_0x275095(0x1b2)] * 0x3e8;
    startCountdown(expiryTime);
} else
    console[_0x275095(0x262)](_0x275095(0x18a));
function startCountdown(_0x1f03fb) {
    const _0x5e554c = _0x275095, _0x5cf1f = document[_0x5e554c(0x296)](_0x5e554c(0x1cb)), _0x152194 = setInterval(() => {
            const _0x14c9d6 = _0x5e554c, _0x1dbce2 = Date[_0x14c9d6(0x2af)](), _0x5840cb = _0x1f03fb - _0x1dbce2;
            if (_0x5840cb <= 0x0)
                clearInterval(_0x152194), _0x5cf1f[_0x14c9d6(0x224)] = 'Session\x20expired', _0x5cf1f[_0x14c9d6(0x263)][_0x14c9d6(0x1f1)](_0x14c9d6(0x2a2)), _0x5cf1f[_0x14c9d6(0x263)][_0x14c9d6(0x1e1)]('session-expired'), showPopupMessage(_0x14c9d6(0x1df)), tokenexpired = !![];
            else {
                const _0x1dc83e = Math['floor'](_0x5840cb / 0xea60), _0x45b075 = Math[_0x14c9d6(0x248)](_0x5840cb % 0xea60 / 0x3e8);
                _0x5cf1f[_0x14c9d6(0x224)] = '⏰\x20' + _0x1dc83e + ':' + (_0x45b075 < 0xa ? '0' : '') + _0x45b075, _0x5cf1f[_0x14c9d6(0x263)][_0x14c9d6(0x1f1)](_0x14c9d6(0x27a)), _0x5cf1f[_0x14c9d6(0x263)]['add'](_0x14c9d6(0x2a2));
            }
        }, 0x3e8);
}
const accessToken = localStorage['getItem'](_0x275095(0x1e7)), socket = io(SOCKET_URL, { 'auth': { 'token': localStorage[_0x275095(0x291)](_0x275095(0x1e7)) } });
socket['on']('connect', () => {
    const _0x342b65 = _0x275095;
    console[_0x342b65(0x262)](_0x342b65(0x2a1), socket['id']), document[_0x342b65(0x296)]('socket-status')[_0x342b65(0x224)] = _0x342b65(0x1ec), document['getElementById'](_0x342b65(0x210))[_0x342b65(0x263)][_0x342b65(0x1f1)](_0x342b65(0x23a), _0x342b65(0x1d8)), document['getElementById'](_0x342b65(0x210))[_0x342b65(0x263)]['add'](_0x342b65(0x23a));
});
const searchUser = document[_0x275095(0x296)](_0x275095(0x215)), chatList = document[_0x275095(0x296)]('chat-list'), chatWindow = document[_0x275095(0x296)](_0x275095(0x2ad)), messageInput = document[_0x275095(0x296)]('message-input'), sendButton = document[_0x275095(0x296)](_0x275095(0x23b)), logoutButton = document[_0x275095(0x296)](_0x275095(0x201)), blockButton = document[_0x275095(0x296)](_0x275095(0x23f)), chatUserElement = document['getElementById'](_0x275095(0x1c2)), lastActiveElement = document['getElementById'](_0x275095(0x290)), userElement2 = chatUserElement, loader = document[_0x275095(0x296)](_0x275095(0x23d)), decoded = decodeJWT(accessToken), senderUserId = decoded[_0x275095(0x1e8)], senderUsername = decoded[_0x275095(0x1af)];
document[_0x275095(0x296)]('myUsername')[_0x275095(0x224)] = senderUsername;
async function fetchAPI(_0x5970ac, _0x5d2f06 = _0x275095(0x249), _0xc66795 = null) {
    const _0x18d86a = _0x275095, _0x34975c = {
            'Content-Type': _0x18d86a(0x25a),
            'Authorization': _0x18d86a(0x1c3) + accessToken
        }, _0x1bbe50 = {
            'method': _0x5d2f06,
            'headers': _0x34975c
        };
    if (_0xc66795)
        _0x1bbe50[_0x18d86a(0x217)] = JSON['stringify'](_0xc66795);
    const _0xfd746a = await apiRequest('' + _0x5970ac, _0x1bbe50);
    if (!_0xfd746a['ok'])
        throw new Error(await _0xfd746a[_0x18d86a(0x1ab)]());
    return _0xfd746a[_0x18d86a(0x236)]();
}
const url = new URL(self[_0x275095(0x295)][_0x275095(0x2ab)]), queryParam = url['searchParams'][_0x275095(0x1b6)](_0x275095(0x1af));
let query = null;
queryParam && (query = queryParam, searchUser[_0x275095(0x1fe)] = query, loadChatList(query));
let debounceTimeout;
function searchUsers() {
    const _0x35d41d = _0x275095, _0x32dd22 = document[_0x35d41d(0x296)](_0x35d41d(0x215))[_0x35d41d(0x1fe)]['trim']();
    clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
        loadChatList(_0x32dd22);
    }, 0x1f4);
}
let currentChatUserId = null;
async function loadChatList(_0x173b04 = '') {
    const _0x1c7456 = _0x275095;
    try {
        chatList[_0x1c7456(0x22b)] = '';
        const _0x503444 = JSON[_0x1c7456(0x20b)](localStorage[_0x1c7456(0x291)](_0x1c7456(0x1b8))) || [], _0x6b8ac7 = document[_0x1c7456(0x1e3)]('hr'), _0x113670 = document['createElement']('hr'), _0x1895f8 = new Set(_0x503444['map'](_0x309adc => _0x309adc[_0x1c7456(0x1e8)]));
        let _0x58d526 = [], _0x56c5b8 = new Set();
        console[_0x1c7456(0x262)](_0x1c7456(0x1c1)), _0x503444['forEach'](({
            username: _0x18fcb7,
            userId: _0x4bccb6
        }) => {
            const _0x485572 = _0x1c7456;
            if (_0x18fcb7[_0x485572(0x1db)]()[_0x485572(0x19c)](_0x173b04[_0x485572(0x1db)]())) {
                const _0x49e57b = createUserItem(_0x18fcb7, _0x4bccb6);
                chatList[_0x485572(0x1b1)](_0x49e57b), _0x56c5b8[_0x485572(0x1e1)](_0x4bccb6);
            }
        }), chatList[_0x1c7456(0x1b1)](_0x6b8ac7);
        if (_0x173b04) {
            if (_0x173b04[_0x1c7456(0x252)] < 0x3) {
                chatList['innerHTML'] = _0x1c7456(0x1c4);
                return;
            }
            const _0x771444 = await fetchAPI(_0x1c7456(0x233) + _0x173b04);
            _0x771444['length'] === 0x0 && (chatList['innerHTML'] = _0x1c7456(0x17e)), _0x58d526 = _0x771444[_0x1c7456(0x22e)](_0x4ba2f6 => !_0x1895f8[_0x1c7456(0x216)](_0x4ba2f6[_0x1c7456(0x1cd)])), _0x58d526[_0x1c7456(0x289)](_0x59decd => {
                const _0x5b3910 = _0x1c7456, _0x564590 = createUserItem(_0x59decd[_0x5b3910(0x1af)], _0x59decd[_0x5b3910(0x1cd)]);
                chatList[_0x5b3910(0x1b1)](_0x564590);
            }), _0x58d526['length'] > 0x0 && chatList[_0x1c7456(0x1b1)](_0x113670);
        }
        !_0x173b04 && _0x503444[_0x1c7456(0x289)](({
            username: _0xb8757,
            userId: _0x985592
        }) => {
            const _0x5c4e87 = _0x1c7456;
            if (!_0x56c5b8[_0x5c4e87(0x216)](_0x985592)) {
                const _0x3f8e82 = createUserItem(_0xb8757, _0x985592);
                chatList[_0x5c4e87(0x1b1)](_0x3f8e82);
            }
        });
    } catch (_0x2f4674) {
        chatList[_0x1c7456(0x22b)] = _0x1c7456(0x276), console[_0x1c7456(0x294)](_0x1c7456(0x1d3), _0x2f4674[_0x1c7456(0x1ee)]);
    }
}
function createUserItem(_0x4ca5f2, _0x475822) {
    const _0x34daf0 = _0x275095, _0x377253 = document[_0x34daf0(0x1e3)](_0x34daf0(0x2a5));
    return _0x377253[_0x34daf0(0x224)] = _0x4ca5f2, _0x377253['classList'][_0x34daf0(0x1e1)]('user-item'), _0x377253['dataset'][_0x34daf0(0x1e8)] = _0x475822, _0x377253[_0x34daf0(0x234)](_0x34daf0(0x21a), () => openChat(_0x475822, _0x4ca5f2)), _0x377253;
}
let currentRoomId = null;
function joinRoom(_0x3a24e8) {
    const _0x15d001 = _0x275095;
    currentRoomId && (socket[_0x15d001(0x27c)]('leave', { 'roomId': currentRoomId }), console[_0x15d001(0x262)]('Left\x20room:\x20' + currentRoomId)), currentRoomId = _0x3a24e8, socket[_0x15d001(0x27c)](_0x15d001(0x25f), { 'recipientUserId': _0x3a24e8 }), console['log'](_0x15d001(0x1de) + currentRoomId);
}
const chatCache = new Map();
async function openChat(_0x5767f4, _0x578b0a) {
    const _0x37c3ea = _0x275095;
    console[_0x37c3ea(0x262)](_0x5767f4, _0x578b0a), currentChatUserId = _0x5767f4, currentChatUsername = _0x578b0a, searchUser['value'] = null, loadChatList(), saveUser(currentChatUserId, currentChatUsername), document[_0x37c3ea(0x296)]('chat-user')[_0x37c3ea(0x224)] = '💬\x20' + _0x578b0a;
    if (tokenexpired) {
        showPopupMessage(_0x37c3ea(0x1df)), chatWindow[_0x37c3ea(0x22b)] = _0x37c3ea(0x203);
        return;
    }
    chatWindow[_0x37c3ea(0x22b)] = '\x20<div\x20class=\x22loader-container\x22>\x20<div\x20class=\x22loader\x22></div>\x20<span>Loading\x20Chats...</span>\x20</div>\x09', joinRoom(_0x5767f4);
    if (chatCache[_0x37c3ea(0x216)](_0x5767f4))
        showNotification(_0x37c3ea(0x29e) + _0x578b0a), renderMessages(chatCache[_0x37c3ea(0x1b6)](_0x5767f4));
    else
        try {
            let _0x476b98 = [];
            const _0x508420 = localStorage['getItem'](_0x37c3ea(0x271) + _0x5767f4);
            if (_0x508420)
                showNotification(_0x37c3ea(0x18b) + _0x578b0a), _0x476b98 = await Promise[_0x37c3ea(0x1c0)](JSON[_0x37c3ea(0x20b)](_0x508420)['map'](async _0xfee07b => JSON[_0x37c3ea(0x20b)](await decryptMessage(_0xfee07b))));
            else {
                showNotification('📡\x20Fetching\x20Chat\x20history\x20from\x20server'), _0x476b98 = await fetchAPI(_0x37c3ea(0x279) + senderUserId + '/' + _0x5767f4);
                const _0x1ccf9a = await Promise[_0x37c3ea(0x1c0)](_0x476b98[_0x37c3ea(0x283)](_0x2b166e => encryptMessage(JSON[_0x37c3ea(0x267)](_0x2b166e))));
                localStorage[_0x37c3ea(0x1b9)](_0x37c3ea(0x271) + _0x5767f4, JSON['stringify'](_0x1ccf9a));
            }
            chatCache[_0x37c3ea(0x280)](_0x5767f4, _0x476b98), renderMessages(_0x476b98);
        } catch (_0x1a7606) {
            console[_0x37c3ea(0x294)](_0x37c3ea(0x28c), _0x1a7606[_0x37c3ea(0x1ee)]), chatMessagesContainer[_0x37c3ea(0x22b)] = _0x37c3ea(0x211);
        }
    checkUserAvailability(currentChatUserId), socket[_0x37c3ea(0x27c)](_0x37c3ea(0x182), {
        'senderId': senderUserId,
        'receiverId': currentChatUserId
    }), updateBlockButton();
}
async function renderMessages(_0x10bfe8) {
    const _0x598bf3 = _0x275095;
    chatWindow[_0x598bf3(0x22b)] = _0x598bf3(0x284);
    const _0x447e7d = chatWindow[_0x598bf3(0x1be)](_0x598bf3(0x228));
    _0x447e7d['innerHTML'] = _0x10bfe8['length'] ? '' : '<p>No\x20messages\x20yet.</p>';
    for (const _0xab0557 of _0x10bfe8) {
        const _0x549c93 = _0xab0557[_0x598bf3(0x25d)][_0x598bf3(0x1cd)] === senderUserId;
        displayMessage(_0xab0557, _0x549c93);
    }
}
async function saveUser(_0x5262c2, _0x565ccf) {
    const _0x447d7f = _0x275095;
    if (!_0x5262c2 || !_0x565ccf) {
        console[_0x447d7f(0x23c)](_0x447d7f(0x25e));
        return;
    }
    let _0x3d40f2 = JSON[_0x447d7f(0x20b)](localStorage[_0x447d7f(0x291)](_0x447d7f(0x1b8))) || [];
    !_0x3d40f2[_0x447d7f(0x1d9)](_0x3e0849 => _0x3e0849['userId'] === _0x5262c2) && (_0x3d40f2['push']({
        'userId': _0x5262c2,
        'username': _0x565ccf
    }), localStorage[_0x447d7f(0x1b9)](_0x447d7f(0x1b8), JSON['stringify'](_0x3d40f2)));
    try {
        const _0x444772 = await apiRequest(_0x447d7f(0x1d1), {
                'method': _0x447d7f(0x1f5),
                'headers': {
                    'Content-Type': _0x447d7f(0x25a),
                    'Authorization': _0x447d7f(0x1c3) + localStorage[_0x447d7f(0x291)](_0x447d7f(0x1e7))
                },
                'body': JSON[_0x447d7f(0x267)]({ 'currentChatUserId': _0x5262c2 })
            }), _0x1d8291 = await _0x444772[_0x447d7f(0x236)]();
        console[_0x447d7f(0x262)](_0x1d8291['message']);
    } catch (_0x306cae) {
        console[_0x447d7f(0x294)](_0x447d7f(0x229), _0x306cae), showPopupMessage(_0x306cae);
    }
}
async function getChattedUsers() {
    const _0x112807 = _0x275095;
    let _0x3b9724 = JSON[_0x112807(0x20b)](localStorage[_0x112807(0x291)](_0x112807(0x1b8)));
    if (!_0x3b9724 || _0x3b9724['length'] === 0x0)
        try {
            const _0x3c07d0 = await apiRequest(_0x112807(0x1e2), {
                    'method': _0x112807(0x249),
                    'headers': { 'Authorization': _0x112807(0x1c3) + localStorage[_0x112807(0x291)](_0x112807(0x1e7)) }
                }), _0x1a57af = await _0x3c07d0[_0x112807(0x236)]();
            _0x1a57af[_0x112807(0x1b8)] && (_0x3b9724 = _0x1a57af[_0x112807(0x1b8)][_0x112807(0x283)](_0x3c0a2a => ({
                'userId': _0x3c0a2a[_0x112807(0x1cd)],
                'username': _0x3c0a2a['username']
            })), localStorage[_0x112807(0x1b9)](_0x112807(0x1b8), JSON[_0x112807(0x267)](_0x3b9724)), loadChatList());
        } catch (_0x37b4c8) {
            console[_0x112807(0x294)](_0x112807(0x292), _0x37b4c8);
        }
    else
        loadChatList();
}
document['addEventListener'](_0x275095(0x1c9), getChattedUsers);
async function appendMessages(_0x1b8bc4) {
    const _0x23cc93 = _0x275095;
    for (const _0x5f441e of _0x1b8bc4) {
        typeof _0x5f441e[_0x23cc93(0x25d)] === _0x23cc93(0x2ae) && (_0x5f441e['sender'] = { '_id': _0x5f441e[_0x23cc93(0x25d)] });
        typeof _0x5f441e[_0x23cc93(0x199)] === _0x23cc93(0x2ae) && (_0x5f441e[_0x23cc93(0x199)] = { '_id': _0x5f441e[_0x23cc93(0x199)] });
        const _0xebec13 = _0x5f441e[_0x23cc93(0x25d)][_0x23cc93(0x1cd)] === senderUserId;
        displayMessage(_0x5f441e, _0xebec13);
    }
}
async function refreshChat() {
    const _0x38b3a2 = _0x275095;
    if (!currentChatUserId) {
        showNotification(_0x38b3a2(0x1f0));
        return;
    }
    showNotification(_0x38b3a2(0x1f8) + currentChatUsername);
    try {
        const _0x6247fb = await fetchAPI(_0x38b3a2(0x279) + senderUserId + '/' + currentChatUserId), _0x5ecb6f = chatCache[_0x38b3a2(0x1b6)](currentChatUserId) || [], _0x24506e = _0x6247fb[_0x38b3a2(0x22e)](_0x5981e8 => !_0x5ecb6f[_0x38b3a2(0x1d9)](_0x550341 => _0x550341[_0x38b3a2(0x1cd)] === _0x5981e8[_0x38b3a2(0x1cd)]));
        if (_0x24506e[_0x38b3a2(0x252)] === 0x0) {
            showNotification(_0x38b3a2(0x1c8) + currentChatUsername);
            return;
        }
        const _0x36c8ca = [
            ..._0x5ecb6f,
            ..._0x24506e
        ];
        chatCache[_0x38b3a2(0x280)](currentChatUserId, _0x36c8ca);
        const _0x2c48ac = await Promise['all'](_0x36c8ca['map'](_0x2ec9f5 => encryptMessage(JSON['stringify'](_0x2ec9f5))));
        localStorage[_0x38b3a2(0x1b9)](_0x38b3a2(0x271) + currentChatUserId, JSON[_0x38b3a2(0x267)](_0x2c48ac)), appendMessages(_0x24506e), showNotification(_0x38b3a2(0x254));
    } catch (_0x2f3d5e) {
        console['error'](_0x38b3a2(0x19a), _0x2f3d5e), showNotification('❌\x20Failed\x20to\x20refresh\x20chat.\x20Please\x20try\x20again.');
    }
}
function displayMessage(_0x59a14d, _0x5a566b) {
    const _0x5a301f = _0x275095, _0x31c130 = document[_0x5a301f(0x1e3)](_0x5a301f(0x2a5));
    _0x31c130['classList'][_0x5a301f(0x1e1)](_0x5a301f(0x1ee), _0x5a566b ? _0x5a301f(0x293) : _0x5a301f(0x261)), _0x31c130[_0x5a301f(0x1da)]['originalText'] = _0x59a14d[_0x5a301f(0x1ee)], _0x31c130[_0x5a301f(0x1da)][_0x5a301f(0x1b5)] = detectLanguage(_0x59a14d[_0x5a301f(0x1ee)]);
    const _0x4ce874 = document[_0x5a301f(0x1e3)](_0x5a301f(0x20a));
    _0x4ce874[_0x5a301f(0x263)][_0x5a301f(0x1e1)]('delete-button'), _0x4ce874['innerHTML'] = '<i\x20class=\x22fa-solid\x20fa-trash\x22></i>', _0x4ce874['onclick'] = () => confirmDelete(_0x31c130);
    const _0x311635 = new Date(_0x59a14d['timestamp'])[_0x5a301f(0x1b3)]([], {
            'year': _0x5a301f(0x266),
            'month': _0x5a301f(0x275),
            'day': _0x5a301f(0x266)
        }), _0x8307b9 = new Date(_0x59a14d['timestamp'])['toLocaleTimeString']([], {
            'hour': _0x5a301f(0x23e),
            'minute': _0x5a301f(0x23e),
            'second': _0x5a301f(0x23e)
        }), _0x1c93b3 = _0x311635 + ',\x20' + _0x8307b9, _0x2c2e3c = document[_0x5a301f(0x1e3)](_0x5a301f(0x242));
    _0x2c2e3c['classList'][_0x5a301f(0x1e1)](_0x5a301f(0x1d5)), _0x2c2e3c[_0x5a301f(0x224)] = _0x1c93b3;
    const _0x139844 = document[_0x5a301f(0x1e3)](_0x5a301f(0x242));
    _0x139844[_0x5a301f(0x263)][_0x5a301f(0x1e1)](_0x5a301f(0x1dd));
    _0x5a566b && (_0x139844['textContent'] = _0x59a14d[_0x5a301f(0x28b)] ? '✔✔' : '✔');
    if (_0x59a14d['type'] === _0x5a301f(0x26d)) {
        const _0x506732 = document[_0x5a301f(0x1e3)](_0x5a301f(0x1bb));
        _0x506732[_0x5a301f(0x269)] = _0x59a14d[_0x5a301f(0x250)], _0x506732[_0x5a301f(0x263)][_0x5a301f(0x1e1)]('chat-image'), _0x506732[_0x5a301f(0x29a)] = _0x5a301f(0x26a), _0x506732[_0x5a301f(0x1d0)] = () => window[_0x5a301f(0x24d)](_0x59a14d[_0x5a301f(0x250)], _0x5a301f(0x1fd)), _0x31c130[_0x5a301f(0x1b1)](_0x506732);
    } else {
        const _0xfd3fcf = document[_0x5a301f(0x1e3)]('p');
        _0xfd3fcf[_0x5a301f(0x224)] = _0x59a14d[_0x5a301f(0x1ee)], _0x31c130[_0x5a301f(0x1b1)](_0xfd3fcf);
    }
    _0x31c130['appendChild'](_0x4ce874), _0x31c130[_0x5a301f(0x1b1)](_0x2c2e3c), _0x31c130[_0x5a301f(0x1b1)](_0x139844), chatWindow[_0x5a301f(0x1b1)](_0x31c130), chatWindow[_0x5a301f(0x26e)] = chatWindow[_0x5a301f(0x1a3)], updateMessages();
}
function confirmDelete(_0x3ad55e) {
    const _0x47b9c1 = _0x275095;
    confirm(_0x47b9c1(0x198)) && (_0x3ad55e['remove'](), showPopupMessage2(_0x47b9c1(0x200)));
}
function intializeSocket() {
    const _0x40e1ca = _0x275095;
    if (socket) {
        sendButton[_0x40e1ca(0x234)](_0x40e1ca(0x21a), _0x2e7fb9), messageInput[_0x40e1ca(0x234)](_0x40e1ca(0x193), _0x246e5f => {
            const _0x113dab = _0x40e1ca;
            if (_0x246e5f[_0x113dab(0x19b)] === 'Enter')
                _0x2e7fb9();
        });
        const _0x5d423d = document[_0x40e1ca(0x296)]('image-button'), _0x21ea04 = document[_0x40e1ca(0x296)](_0x40e1ca(0x231)), _0x1205ee = document[_0x40e1ca(0x296)](_0x40e1ca(0x1dc)), _0x49fc06 = document[_0x40e1ca(0x296)]('image-preview'), _0x251264 = document['getElementById']('cancel-preview');
        let _0x5f4e1a = null;
        _0x5d423d[_0x40e1ca(0x234)](_0x40e1ca(0x21a), () => {
            const _0xc3586 = _0x40e1ca;
            _0x21ea04[_0xc3586(0x21a)]();
        }), _0x251264['addEventListener'](_0x40e1ca(0x21a), () => {
            const _0x2b2290 = _0x40e1ca;
            _0x5f4e1a = null, _0x1205ee[_0x2b2290(0x270)][_0x2b2290(0x1ce)] = _0x2b2290(0x1c6), _0x21ea04[_0x2b2290(0x1fe)] = '';
        }), _0x21ea04['addEventListener']('change', _0x2b0c74 => {
            const _0x43412a = _0x40e1ca, _0x29619c = _0x2b0c74[_0x43412a(0x197)]['files'][0x0];
            if (_0x29619c) {
                _0x5f4e1a = _0x29619c;
                const _0x47fa72 = new FileReader();
                _0x47fa72[_0x43412a(0x21e)] = _0x5666fb => {
                    const _0x1fe05a = _0x43412a;
                    _0x49fc06[_0x1fe05a(0x269)] = _0x5666fb[_0x1fe05a(0x197)]['result'], _0x1205ee[_0x1fe05a(0x270)]['display'] = _0x1fe05a(0x184);
                }, _0x47fa72[_0x43412a(0x1bd)](_0x29619c);
            }
        });
        async function _0x2e7fb9() {
            const _0x131972 = _0x40e1ca;
            if (!currentChatUserId)
                return;
            let _0x3736ad = null;
            const _0x5b1896 = messageInput[_0x131972(0x1fe)][_0x131972(0x244)]();
            if (_0x5b1896) {
                const _0x5cb2a7 = {
                    'senderUsername': senderUsername,
                    'receiver': currentChatUserId,
                    'message': _0x5b1896,
                    'type': _0x131972(0x1ab)
                };
                try {
                    socket[_0x131972(0x27c)](_0x131972(0x288), _0x5cb2a7, _0x26202e => {
                        const _0x5e0c2c = _0x131972;
                        messageInput[_0x5e0c2c(0x1fe)] = '', _0x26202e?.[_0x5e0c2c(0x294)] && alert(_0x26202e[_0x5e0c2c(0x294)]);
                    });
                } catch (_0x4c4402) {
                    console[_0x131972(0x294)](_0x131972(0x219), _0x4c4402['message']);
                }
            }
            if (_0x5f4e1a) {
                showNotification('Uploading\x20image...'), loader[_0x131972(0x270)][_0x131972(0x1ce)] = 'block';
                try {
                    const _0x1cf231 = new FormData();
                    _0x1cf231['append']('image', _0x5f4e1a);
                    const _0x4d9a72 = await apiRequest(_0x131972(0x22f), {
                            'method': _0x131972(0x1f5),
                            'headers': { 'Authorization': _0x131972(0x1c3) + localStorage[_0x131972(0x291)](_0x131972(0x1e7)) },
                            'body': _0x1cf231
                        }), _0x33fb67 = await _0x4d9a72[_0x131972(0x236)]();
                    if (!_0x33fb67[_0x131972(0x1bf)]) {
                        showNotification(_0x131972(0x25c)), loader[_0x131972(0x270)]['display'] = _0x131972(0x1c6), showPopupMessage(_0x33fb67[_0x131972(0x1ee)] || 'Access\x20denied.');
                        return;
                    }
                    _0x33fb67?.['error'] && (loader[_0x131972(0x270)][_0x131972(0x1ce)] = _0x131972(0x1c6), alert(_0x33fb67['error']));
                    _0x3736ad = _0x33fb67[_0x131972(0x1bf)];
                    const _0x3e7f28 = {
                        'senderUsername': senderUsername,
                        'receiver': currentChatUserId,
                        'message': '[Image]',
                        'type': _0x131972(0x26d),
                        'fileUrl': _0x3736ad
                    };
                    socket[_0x131972(0x27c)]('sendMessage', _0x3e7f28, _0x524964 => {
                        const _0x4522a6 = _0x131972;
                        _0x524964?.[_0x4522a6(0x294)] && alert(_0x524964[_0x4522a6(0x294)]);
                    }), _0x5f4e1a = null, loader[_0x131972(0x270)][_0x131972(0x1ce)] = _0x131972(0x1c6), _0x1205ee[_0x131972(0x270)][_0x131972(0x1ce)] = 'none', _0x21ea04[_0x131972(0x1fe)] = '';
                } catch (_0x429ec5) {
                    loader[_0x131972(0x270)][_0x131972(0x1ce)] = 'none', showNotification(_0x131972(0x181)), console[_0x131972(0x294)]('Error\x20uploading\x20image:', _0x429ec5[_0x131972(0x1ee)]);
                }
            }
        }
        socket['on']('receiveMessage', async _0x5a86d7 => {
            const _0x167f9d = _0x40e1ca;
            if (_0x5a86d7[_0x167f9d(0x199)] === senderUserId || _0x5a86d7[_0x167f9d(0x25d)] === senderUserId) {
                _0x2c667c[_0x167f9d(0x270)][_0x167f9d(0x1ce)] = _0x167f9d(0x1c6), displayMessage(_0x5a86d7, _0x5a86d7[_0x167f9d(0x25d)] === senderUserId);
                _0x5a86d7[_0x167f9d(0x25d)] !== senderUserId && _0x18709d();
                const _0x3b13f8 = {
                        ..._0x5a86d7,
                        'sender': { '_id': _0x5a86d7[_0x167f9d(0x25d)] },
                        'receiver': { '_id': _0x5a86d7[_0x167f9d(0x199)] }
                    }, _0x61f34f = chatCache['get'](currentChatUserId) || [];
                if (_0x3b13f8[_0x167f9d(0x1cd)] && !_0x61f34f[_0x167f9d(0x1d9)](_0x20261d => _0x20261d['_id'] === _0x3b13f8['_id'])) {
                    const _0x423ae7 = [
                        ..._0x61f34f,
                        _0x3b13f8
                    ];
                    chatCache[_0x167f9d(0x280)](currentChatUserId, _0x423ae7);
                    const _0x2e4a23 = await Promise[_0x167f9d(0x1c0)](_0x423ae7[_0x167f9d(0x283)](_0x409c76 => encryptMessage(JSON[_0x167f9d(0x267)](_0x409c76))));
                    localStorage[_0x167f9d(0x1b9)](_0x167f9d(0x271) + currentChatUserId, JSON[_0x167f9d(0x267)](_0x2e4a23));
                }
            }
        });
        const _0x1203ea = new Audio(_0x40e1ca(0x192));
        function _0x18709d() {
            const _0x3f6b8e = _0x40e1ca;
            _0x1203ea[_0x3f6b8e(0x260)] = 0x0, _0x1203ea[_0x3f6b8e(0x1a4)]()[_0x3f6b8e(0x185)](_0x6cca43 => console['error']('Error\x20playing\x20sound:', _0x6cca43));
        }
        let _0xc79836, _0x16ec4d = !![];
        const _0x2c667c = document['getElementById'](_0x40e1ca(0x222));
        messageInput['addEventListener'](_0x40e1ca(0x24c), () => {
            const _0x2de193 = _0x40e1ca;
            currentChatUserId && senderUserId !== currentChatUserId && (_0x16ec4d && socket && (socket['emit'](_0x2de193(0x194), {
                'senderId': senderUserId,
                'receiverId': currentChatUserId
            }), _0x16ec4d = ![], setTimeout(() => {
                _0x16ec4d = !![];
            }, 0x5dc)), clearTimeout(_0xc79836));
        }), socket && socket['on']('typing', ({senderId: _0x5f18ea}) => {
            const _0x1c7678 = _0x40e1ca;
            _0x5f18ea !== senderUserId && currentChatUserId === _0x5f18ea && (updateStatus(_0x1c7678(0x1e6)), _0x2c667c[_0x1c7678(0x270)][_0x1c7678(0x1ce)] !== _0x1c7678(0x1a7) && (_0x2c667c[_0x1c7678(0x270)]['display'] = _0x1c7678(0x1a7), _0x2c667c[_0x1c7678(0x22b)] = _0x1c7678(0x256)), clearTimeout(_0xc79836), _0xc79836 = setTimeout(() => {
                const _0x2d4d36 = _0x1c7678;
                updateStatus(_0x2d4d36(0x1cc)), _0x2c667c[_0x2d4d36(0x270)]['display'] = _0x2d4d36(0x1c6);
            }, 0xbb8));
        }), document[_0x40e1ca(0x234)](_0x40e1ca(0x1e4), () => {
            const _0x552cd4 = _0x40e1ca;
            socket && (document[_0x552cd4(0x1f3)] ? socket[_0x552cd4(0x27c)](_0x552cd4(0x1ef), { 'senderUserId': senderUserId }) : (senderId = senderUserId, receiverId = currentChatUserId, socket[_0x552cd4(0x27c)](_0x552cd4(0x182), {
                'senderId': senderId,
                'receiverId': receiverId
            }), socket[_0x552cd4(0x27c)]('userOnline', { 'senderUserId': senderUserId })));
        }), window[_0x40e1ca(0x234)](_0x40e1ca(0x187), () => {
            const _0x57d023 = _0x40e1ca;
            socket && socket[_0x57d023(0x27c)]('userOffline', { 'senderUserId': senderUserId });
        }), socket['on'](_0x40e1ca(0x19d), ({senderUserId: _0x11a5c0}) => {
            const _0x2208f0 = _0x40e1ca;
            userId = _0x11a5c0;
            const _0x45adf2 = document[_0x2208f0(0x1be)](_0x2208f0(0x277) + userId + '\x27]');
            _0x45adf2 ? (_0x45adf2['classList']['remove']('offline', _0x2208f0(0x1f9), 'online'), _0x45adf2[_0x2208f0(0x263)][_0x2208f0(0x1e1)]('online')) : '🤯🤯🤯', userElement2 && currentChatUserId === _0x11a5c0 && (userElement2[_0x2208f0(0x263)][_0x2208f0(0x1f1)](_0x2208f0(0x253), _0x2208f0(0x1f9), _0x2208f0(0x20e)), userElement2[_0x2208f0(0x263)][_0x2208f0(0x1e1)](_0x2208f0(0x20e)), updateStatus(_0x2208f0(0x1cc)));
        }), socket['on'](_0x40e1ca(0x180), ({senderUserId: _0x488a5a}) => {
            const _0x12d96e = _0x40e1ca;
            updateStatus(_0x12d96e(0x1d7)), userId = _0x488a5a;
            const _0x66ed21 = document[_0x12d96e(0x1be)](_0x12d96e(0x277) + userId + '\x27]');
            _0x66ed21 && (_0x66ed21[_0x12d96e(0x263)][_0x12d96e(0x1f1)](_0x12d96e(0x253), _0x12d96e(0x1f9), _0x12d96e(0x20e)), _0x66ed21[_0x12d96e(0x263)][_0x12d96e(0x1e1)](_0x12d96e(0x253))), userElement2 && currentChatUserId === _0x488a5a && (userElement2[_0x12d96e(0x263)][_0x12d96e(0x1f1)](_0x12d96e(0x253), _0x12d96e(0x1f9), _0x12d96e(0x20e)), userElement2['classList'][_0x12d96e(0x1e1)](_0x12d96e(0x253)), checkUserAvailability(currentChatUserId));
        }), socket['on'](_0x40e1ca(0x1ef), ({senderUserId: _0x51a074}) => {
            const _0x34672a = _0x40e1ca;
            userId = _0x51a074;
            const _0x342fde = document['querySelector'](_0x34672a(0x277) + userId + '\x27]');
            _0x342fde && (_0x342fde[_0x34672a(0x263)]['remove'](_0x34672a(0x253), 'busy', _0x34672a(0x20e)), _0x342fde[_0x34672a(0x263)][_0x34672a(0x1e1)](_0x34672a(0x1f9))), userElement2 && currentChatUserId === _0x51a074 && (userElement2['classList'][_0x34672a(0x1f1)]('offline', _0x34672a(0x1f9), _0x34672a(0x20e)), userElement2[_0x34672a(0x263)]['add'](_0x34672a(0x1f9)), updateStatus(_0x34672a(0x1ae)));
        }), socket['on'](_0x40e1ca(0x245), _0xf8b53 => {
            const _0x571627 = _0x40e1ca, {
                    chatId: _0x5e3182,
                    readerId: _0x2d43c9
                } = _0xf8b53;
            currentChatUserId === _0x2d43c9 && senderUserId === _0x5e3182 && (console[_0x571627(0x262)]('User\x20' + _0x2d43c9 + '\x20read\x20messages\x20in\x20chat\x20' + _0x5e3182), lol());
        });
    } else
        console['log']('socket:', socket), console['log'](_0x40e1ca(0x237));
    socket['on'](_0x40e1ca(0x196), _0x9f7ae0 => {
        const _0xcd893c = _0x40e1ca;
        console['log'](_0xcd893c(0x240), _0x9f7ae0), document[_0xcd893c(0x296)](_0xcd893c(0x210))[_0xcd893c(0x224)] = _0xcd893c(0x19e), document[_0xcd893c(0x296)](_0xcd893c(0x210))[_0xcd893c(0x263)][_0xcd893c(0x1f1)](_0xcd893c(0x23a), _0xcd893c(0x1d8)), document['getElementById'](_0xcd893c(0x210))['classList']['add'](_0xcd893c(0x1d8));
    }), socket['on'](_0x40e1ca(0x27f), _0x36f0ed => {
        const _0x5477b1 = _0x40e1ca;
        console[_0x5477b1(0x294)](_0x5477b1(0x257), _0x36f0ed), document[_0x5477b1(0x296)]('socket-status')[_0x5477b1(0x224)] = '⚠️\x20Connection\x20Failed', document[_0x5477b1(0x296)](_0x5477b1(0x210))[_0x5477b1(0x263)]['remove']('con', 'dis'), document[_0x5477b1(0x296)]('socket-status')[_0x5477b1(0x263)][_0x5477b1(0x1e1)](_0x5477b1(0x1d8));
    }), socket['on'](_0x40e1ca(0x2a6), _0x36f7e8 => {
        const _0x79882 = _0x40e1ca;
        console['log']('🛜\x20Reconnected\x20to\x20server,\x20attempt\x20#' + _0x36f7e8), document['getElementById'](_0x79882(0x210))[_0x79882(0x224)] = _0x79882(0x24e) + _0x36f7e8 + ')', document[_0x79882(0x296)]('socket-status')[_0x79882(0x263)][_0x79882(0x1f1)](_0x79882(0x23a), _0x79882(0x1d8)), document[_0x79882(0x296)](_0x79882(0x210))[_0x79882(0x263)][_0x79882(0x1e1)](_0x79882(0x23a));
    }), socket['on']('reconnect_error', _0x538d87 => {
        const _0x14a75d = _0x40e1ca;
        console[_0x14a75d(0x294)]('⚠️\x20Reconnection\x20failed:', _0x538d87), document[_0x14a75d(0x296)](_0x14a75d(0x210))[_0x14a75d(0x224)] = _0x14a75d(0x2a3), document[_0x14a75d(0x296)]('socket-status')['classList'][_0x14a75d(0x1f1)](_0x14a75d(0x23a), 'dis'), document[_0x14a75d(0x296)](_0x14a75d(0x210))[_0x14a75d(0x263)][_0x14a75d(0x1e1)](_0x14a75d(0x1d8));
    });
}
async function toggleBlockUser() {
    const _0x5ba98e = _0x275095;
    if (!currentChatUserId) {
        showPopupMessage2(_0x5ba98e(0x21d));
        return;
    }
    const _0x493ea5 = blockButton['dataset'][_0x5ba98e(0x1e5)] === _0x5ba98e(0x1a9), _0x45f88c = _0x493ea5 ? _0x5ba98e(0x286) : 'block-user';
    if (!confirm(_0x5ba98e(0x264) + _0x45f88c + '\x20' + currentChatUsername + '?'))
        return;
    try {
        const _0x10b7b9 = {
                'blockUserId': currentChatUserId,
                'unblockUserId': currentChatUserId
            }, _0x3bfc54 = await apiRequest(_0x5ba98e(0x1a2) + _0x45f88c, {
                'method': 'POST',
                'headers': {
                    'Content-Type': _0x5ba98e(0x25a),
                    'Authorization': _0x5ba98e(0x1c3) + localStorage[_0x5ba98e(0x291)]('accessToken')
                },
                'body': JSON['stringify'](_0x10b7b9)
            }), _0x3540d0 = await _0x3bfc54[_0x5ba98e(0x236)]();
        _0x3bfc54['ok'] ? (blockButton[_0x5ba98e(0x224)] = _0x493ea5 ? _0x5ba98e(0x28f) : _0x5ba98e(0x204), blockButton[_0x5ba98e(0x1da)][_0x5ba98e(0x1e5)] = !_0x493ea5, socket[_0x5ba98e(0x27c)](_0x5ba98e(0x299), { 'currentChatUserId': currentChatUserId }), showPopupMessage(currentChatUsername + _0x5ba98e(0x273) + (_0x493ea5 ? _0x5ba98e(0x243) : _0x5ba98e(0x1e5)) + '.'), _0x493ea5 && (recipientUserId = currentChatUserId, socket ? socket['emit'](_0x5ba98e(0x25f), { 'recipientUserId': recipientUserId }) : console[_0x5ba98e(0x294)]('Join\x20emit\x20failed\x20to\x20socket\x20with\x20user:', recipientUserId))) : alert(_0x3540d0[_0x5ba98e(0x294)] || _0x5ba98e(0x1b7));
    } catch (_0x869606) {
        console[_0x5ba98e(0x294)](_0x5ba98e(0x220), _0x869606['message']);
    }
}
async function markMessagesssssAsRead(_0x1dc310, _0x17322c) {
    const _0x45de07 = _0x275095;
    try {
        const _0x32dc88 = await apiRequest(_0x45de07(0x1ca), {
                'method': _0x45de07(0x20f),
                'headers': {
                    'Content-Type': _0x45de07(0x25a),
                    'Authorization': _0x45de07(0x1c3) + localStorage[_0x45de07(0x291)](_0x45de07(0x1e7))
                },
                'body': JSON[_0x45de07(0x267)]({
                    'senderId': senderUserId,
                    'receiverId': currentChatUserId
                })
            }), _0x425c00 = await _0x32dc88[_0x45de07(0x236)]();
        _0x32dc88['ok'] ? (console[_0x45de07(0x262)](_0x45de07(0x2aa), _0x425c00[_0x45de07(0x274)]), io['to'](_0x1dc310)[_0x45de07(0x27c)](_0x45de07(0x245), {
            'readerId': readerId,
            'chatId': chatId
        })) : console['error'](_0x45de07(0x26c), _0x425c00[_0x45de07(0x294)]);
    } catch (_0x51b0eb) {
        console[_0x45de07(0x294)](_0x45de07(0x17f), _0x51b0eb);
    }
}
async function updateBlockButton() {
    const _0x38617f = _0x275095;
    if (!currentChatUserId) {
        showPopupMessage(_0x38617f(0x21d));
        return;
    }
    try {
        const _0x4395e0 = await apiRequest(_0x38617f(0x218) + currentChatUserId, {
            'method': 'GET',
            'headers': { 'Authorization': _0x38617f(0x1c3) + localStorage[_0x38617f(0x291)]('accessToken') }
        });
        if (!_0x4395e0['ok'])
            throw new Error(_0x38617f(0x1aa) + _0x4395e0[_0x38617f(0x290)]);
        const _0xc495d0 = await _0x4395e0[_0x38617f(0x236)]();
        if (typeof _0xc495d0[_0x38617f(0x29d)] === _0x38617f(0x28a))
            throw new Error(_0x38617f(0x2a8));
        blockButton[_0x38617f(0x224)] = _0xc495d0['isBlocked'] ? 'Unblock' : _0x38617f(0x28f), blockButton['dataset'][_0x38617f(0x1e5)] = _0xc495d0['isBlocked'][_0x38617f(0x278)]();
    } catch (_0x516661) {
        console[_0x38617f(0x294)](_0x38617f(0x1f6), _0x516661), blockButton[_0x38617f(0x270)][_0x38617f(0x1ce)] = _0x38617f(0x1c6);
    }
}
function toggleDropdown() {
    const _0x1c8339 = _0x275095, _0x408cb0 = document[_0x1c8339(0x296)](_0x1c8339(0x2ac));
    _0x408cb0[_0x1c8339(0x263)][_0x1c8339(0x29b)](_0x1c8339(0x223)) ? (_0x408cb0['classList'][_0x1c8339(0x1f1)](_0x1c8339(0x223)), setTimeout(() => _0x408cb0[_0x1c8339(0x270)][_0x1c8339(0x1ce)] = _0x1c8339(0x1c6), 0xc8)) : (_0x408cb0['style'][_0x1c8339(0x1ce)] = _0x1c8339(0x184), setTimeout(() => _0x408cb0[_0x1c8339(0x263)][_0x1c8339(0x1e1)](_0x1c8339(0x223)), 0xa));
}
document[_0x275095(0x234)](_0x275095(0x21a), function (_0x12eed8) {
    const _0x1c6085 = _0x275095, _0x10978f = document[_0x1c6085(0x296)](_0x1c6085(0x2ac)), _0x21fe0c = document[_0x1c6085(0x296)](_0x1c6085(0x2a0));
    !_0x21fe0c['contains'](_0x12eed8['target']) && !_0x10978f[_0x1c6085(0x29b)](_0x12eed8[_0x1c6085(0x197)]) && (_0x10978f['classList'][_0x1c6085(0x1f1)]('show'), setTimeout(() => _0x10978f['style'][_0x1c6085(0x1ce)] = _0x1c6085(0x1c6), 0xc8));
});
async function checkUserAvailability(_0x439466) {
    const _0x31f239 = _0x275095;
    try {
        const _0x5eb521 = await apiRequest(_0x31f239(0x202) + _0x439466, {
            'method': _0x31f239(0x249),
            'headers': { 'Authorization': _0x31f239(0x1c3) + localStorage['getItem'](_0x31f239(0x1e7)) }
        });
        if (!_0x5eb521['ok'])
            throw new Error('User\x20not\x20found\x20or\x20server\x20error');
        const _0x3a3c01 = await _0x5eb521[_0x31f239(0x236)]();
        _0x3a3c01[_0x31f239(0x190)] ? (updateStatus('Online'), chatUserElement[_0x31f239(0x263)]['add'](_0x31f239(0x20e)), chatUserElement[_0x31f239(0x263)][_0x31f239(0x1f1)](_0x31f239(0x253))) : (chatUserElement['classList']['add'](_0x31f239(0x253)), chatUserElement[_0x31f239(0x263)][_0x31f239(0x1f1)](_0x31f239(0x20e)));
        if (lastActiveElement) {
            if (chatUserElement['classList'][_0x31f239(0x29b)](_0x31f239(0x253))) {
                const _0xce6f46 = new Date(_0x3a3c01[_0x31f239(0x18f)]), _0x39b3e6 = new Date(), _0x545546 = _0xce6f46[_0x31f239(0x191)](_0x31f239(0x1f7), {
                        'hour': _0x31f239(0x23e),
                        'minute': _0x31f239(0x23e),
                        'hour12': !![]
                    }), _0x361e6a = new Intl[(_0x31f239(0x2a7))]([], {
                        'year': 'numeric',
                        'month': _0x31f239(0x23e),
                        'day': _0x31f239(0x23e)
                    }), _0x1ab6c4 = _0xce6f46['toDateString']() === _0x39b3e6[_0x31f239(0x1e9)](), _0x18def2 = _0xce6f46[_0x31f239(0x21b)]() === _0x39b3e6[_0x31f239(0x21b)]() - 0x1 && _0xce6f46[_0x31f239(0x2a4)]() === _0x39b3e6[_0x31f239(0x2a4)]() && _0xce6f46['getFullYear']() === _0x39b3e6['getFullYear']();
                let _0xbbf09b;
                if (_0x1ab6c4)
                    _0xbbf09b = _0x31f239(0x281) + _0x545546;
                else
                    _0x18def2 ? _0xbbf09b = _0x31f239(0x2a9) + _0x545546 : _0xbbf09b = _0x31f239(0x281) + _0x361e6a['format'](_0xce6f46) + '\x20' + _0x545546;
                lastActiveElement[_0x31f239(0x224)] = _0xbbf09b;
            }
        }
    } catch (_0x1fbdab) {
        console['error'](_0x31f239(0x209), _0x1fbdab);
    }
}
function updateStatus(_0x4104ee) {
    const _0x4c2684 = _0x275095;
    lastActiveElement[_0x4c2684(0x270)][_0x4c2684(0x213)] = _0x4c2684(0x221), lastActiveElement[_0x4c2684(0x270)]['opacity'] = '0', setTimeout(() => {
        const _0x38563f = _0x4c2684;
        if (_0x4104ee === _0x38563f(0x1cc))
            lastActiveElement[_0x38563f(0x224)] = _0x38563f(0x1cc), lastActiveElement[_0x38563f(0x270)][_0x38563f(0x1d6)] = _0x38563f(0x2b0), lastActiveElement[_0x38563f(0x270)]['fontWeight'] = _0x38563f(0x1fb);
        else {
            if (_0x4104ee === _0x38563f(0x1ae))
                lastActiveElement[_0x38563f(0x224)] = 'User\x20is\x20Busy', lastActiveElement[_0x38563f(0x270)]['color'] = _0x38563f(0x24a), lastActiveElement[_0x38563f(0x270)][_0x38563f(0x1ba)] = 'normal';
            else {
                if (_0x4104ee === _0x38563f(0x1d7))
                    lastActiveElement['textContent'] = _0x38563f(0x1d7), lastActiveElement['style'][_0x38563f(0x1d6)] = _0x38563f(0x20d), lastActiveElement[_0x38563f(0x270)][_0x38563f(0x1ba)] = _0x38563f(0x287);
                else
                    _0x4104ee === _0x38563f(0x1e6) && (lastActiveElement[_0x38563f(0x224)] = 'User\x20is\x20Typing\x20.\x20.\x20.', lastActiveElement[_0x38563f(0x270)][_0x38563f(0x1d6)] = _0x38563f(0x1ac), lastActiveElement[_0x38563f(0x270)][_0x38563f(0x1ba)] = _0x38563f(0x287));
            }
        }
        lastActiveElement[_0x38563f(0x270)][_0x38563f(0x255)] = '1';
    }, 0x12c);
}
function lol() {
    const _0x39ba62 = _0x275095;
    document[_0x39ba62(0x1a0)]('.message.self\x20.read-receipt')[_0x39ba62(0x289)](_0x18b3cb => {
        _0x18b3cb['textContent'] === '✔' && (_0x18b3cb['textContent'] = '✔✔');
    });
}
function setViewportHeight() {
    const _0x25c513 = _0x275095;
    document['documentElement'][_0x25c513(0x270)][_0x25c513(0x18d)](_0x25c513(0x186), window[_0x25c513(0x25b)] * 0.01 + 'px');
}
window['addEventListener'](_0x275095(0x26b), setViewportHeight), setViewportHeight();
function showChatPanel() {
    const _0x5bb92a = _0x275095;
    document[_0x5bb92a(0x1be)](_0x5bb92a(0x258))[_0x5bb92a(0x263)]['add'](_0x5bb92a(0x268));
}
function showUserListPanel() {
    const _0x4c2e36 = _0x275095;
    document[_0x4c2e36(0x1be)](_0x4c2e36(0x258))[_0x4c2e36(0x263)][_0x4c2e36(0x1f1)](_0x4c2e36(0x268));
}
document[_0x275095(0x1be)]('#chat-list')['addEventListener'](_0x275095(0x21a), _0x10a42c => {
    window['innerWidth'] <= 0x300 && showChatPanel();
}), document[_0x275095(0x1be)](_0x275095(0x205))['addEventListener']('click', _0x25d59e => {
    const _0x79ec4 = _0x275095;
    window[_0x79ec4(0x227)] <= 0x300 && showUserListPanel();
});
const savedImage = localStorage[_0x275095(0x291)](_0x275095(0x1f2));
document[_0x275095(0x296)](_0x275095(0x259))[_0x275095(0x269)] = savedImage || _0x275095(0x226);
function _0x5ee1() {
    const _0x420915 = [
        '8j+uTpcFN6lWN5+GieXVywrLzcbdAgf0DgvKifvZzxjZig1HDgnOAw5Nihf1zxj5',
        'y2HHDc11C2vY',
        'qMvHCMvYia',
        'pha+u2vHCMnOihf1zxj5igXLBMD0AcbTDxn0igjLid49idm8l3a+',
        'mZuXsfPRz0H0',
        'BM9Uzq',
        'Dg9Nz2XL',
        '4PYfienOyxqGAxmGywXYzwfKEsb1Ccb0BYbKyxrLihDPDgGG',
        're9nq29UDgvUDeXVywrLza',
        'l2fWAs9JAgf0CY9TyxjRlxjLywq',
        'y291BNrKB3DU',
        't25SAw5L',
        'x2LK',
        'zgLZCgXHEq',
        'odzNwuXeuMG',
        'B25JBgLJAW',
        'l2fWAs9JAgf0CY9ZyxzLlwnOyxr0zwqTDxnLCG',
        'yMfJA2DYB3vUzeLTywDL',
        'rxjYB3iGBg9HzgLUzYbJAgf0igXPC3q6',
        'mZC5otnkzvLnuwS',
        'DgLTzxn0yw1W',
        'y29SB3i',
        't2zMBgLUzq',
        'zgLZ',
        'C29Tzq',
        'zgf0yxnLDa',
        'Dg9mB3DLCKnHC2u',
        'Aw1Hz2uTChjLDMLLDY1JB250ywLUzxi',
        'CMvHzc1YzwnLAxb0',
        'sM9PBMvKihjVB206ia',
        'u2vZC2LVBIbfEhbPCMvK',
        'zgvJB2rL',
        'ywrK',
        'l2fWAs9JAgf0CY9JAgf0DgvKlxvZzxjZ',
        'y3jLyxrLrwXLBwvUDa',
        'DMLZAwjPBgL0EwnOyw5Nzq',
        'yMXVy2TLza',
        'vhLWAw5N',
        'ywnJzxnZvg9Rzw4',
        'DxnLCKLK',
        'Dg9eyxrLu3rYAw5N',
        'zw5JB2rL',
        'rMfPBgvKihrVigrLBgv0zsbJAgf0igHPC3rVCNK6',
        '8j+BNcbdB25Uzwn0zwq',
        'mtq3nZjizgvvt20',
        'BwvZC2fNzq',
        'DxnLCKj1C3K',
        '4PQG77Ipie5VignOyxqGC2vSzwn0zwqGDg8GCMvMCMvZAc4',
        'CMvTB3zL',
        'DxnLCLbYB2zPBgvqAwm',
        'AgLKzgvU',
        'C3bSAxq',
        'ue9tva',
        'rxjYB3iGy2HLy2TPBMCGyMXVy2SGC3rHDhvZoG',
        'zw4Tvvm',
        '8j+uHcbszwzYzxnOAw5NignOyxqGD2L0Aca',
        'yNvZEq',
        'rMfPBgvKihrVigrLy3j5ChqGy2HHDcbMB3iG',
        'yM9Sza',
        'rgvJCNLWDgLVBIbMywLSzwq6',
        'x2jSyw5R',
        'DMfSDwu',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idCWChG7ihjPz2H0oIaXmhb4oYbIywnRz3jVDw5KoIaJmda3yMzMoYbJB2XVCJOGD2HPDgu7ihbHzgrPBMC6idHWEdSGyM9YzgvYlxjHzgL1CZOGnhb4oYb6lwLUzgv4oIaXmdaWoW',
        'rNvUy3rPB24GDw5HDMfPBgfIBguHie1LC3nHz2uGBM90igrLBgv0zwqGAxrZigP1C3qGysbKzw1VlG',
        'Bg9NB3v0qNrU',
        'l2fWAs9JAgf0CY9HDMfPBgfIAwXPDhKV',
        'pgGXpLnLC3nPB24GrxHWAxjLzcWGuMvMCMvZAcb0AguGCgfNzs48l2GXpGOjcqKjcqKjcqKjcqKjpgLTzYbZDhLSzt0IAgvPz2H0oJuWChG7ihDPzhrOoJuWChG7iIbZCMm9iI9UAwHVBMDVl2LTzY9Py29UlNbUzYiGlZ4j',
        'vw5IBg9JAW',
        'lMjHy2STyNrU',
        'nJGYmZjdBNfHy0O',
        '4PYfienOyxqGq2fJAguGtg9HzgvKifn1y2nLC3nMDwXSEs4',
        'mtu3otHJEvzuseO',
        'rxjYB3iGy2HLy2TPBMCGDxnLCIbHDMfPBgfIAwXPDhK6',
        'yNv0Dg9U',
        'CgfYC2u',
        'yMfJA2DYB3vUzfnPEMu',
        'CMvK',
        'B25SAw5L',
        'uefuq0G',
        'C29JA2v0lxn0yxr1CW',
        'pha+rxjYB3iGBg9HzgLUzYbTzxnZywDLCY4GugXLyxnLihrYEsbHz2fPBIbSyxrLCI48l3a+',
        'ls1IBhvYlxzHBhvL',
        'DhjHBNnPDgLVBG',
        'zxHWB3j0s2v5',
        'C2vHCMnOlxvZzxjZ',
        'AgfZ',
        'yM9KEq',
        'l2fWAs9JAgf0CY9IBg9JAY1ZDgf0DxmV',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLoG',
        'y2XPy2S',
        'z2v0rgf0zq',
        'D2fSBhbHCgvYtw9KywW',
        'rxjYB3i6ie5VihvZzxiGC2vSzwn0zwqGDg8GyMXVy2SU',
        'B25SB2fK',
        'quvtluDdtq',
        'rxjYB3iGyMXVy2TPBMCGDxnLCJO',
        'B3bHy2L0EsaWlJnZigvHC2uTAw4TB3v0',
        'DhLWAw5NlwLUzgLJyxrVCG',
        'C2HVDW',
        'Dgv4DenVBNrLBNq',
        'ufvu',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'Aw5UzxjxAwr0Aa',
        'lMnOyxqTBwvZC2fNzxm',
        'rxjYB3iGDxbKyxrPBMCGC2vYDMvYoG',
        'mJe5nwrNCKPLrG',
        'Aw5Uzxjive1m',
        'rxjYB3i6ia',
        'y3nZvgv4Da',
        'zMLSDgvY',
        'l2fWAs91CgXVywq',
        'mZe3nZq2mwv1qKn1rW',
        'Aw1Hz2uTAw5WDxq',
        'yMX1CI12ywX1zq',
        'l2fWAs9JAgf0CY91C2vYCZ91C2vYBMfTzt0',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'rgvJCNLWDgLVBIbMywLSzwq',
        'ANnVBG',
        '8j+uTcbtB2nRzxqGDw5KzwzPBMvKoIbmAwTLBhKGzhvLihrVihnVy2TLDcbPBML0AwfSAxnHDgLVBIbHC3LUy2HYB25VDxm',
        'yMX1CI1ZBgLKzxiTy29UDgfPBMvY',
        'CMvTB3zLsxrLBq',
        'y29U',
        'C2vUzc1IDxr0B24',
        'D2fYBG',
        'Aw1Hz2uTBg9HzgvY',
        'mI1KAwDPDa',
        'yMXVy2STyNv0Dg9U',
        '4PQG77IpifnVy2TLDcbKAxnJB25Uzwn0zwq6',
        'zw1VAMKTCgLJA2vY',
        'C3bHBG',
        'Dw5IBg9JA2vK',
        'DhjPBq',
        'BwvZC2fNzxnszwfK',
        '8j+uTcbtB2nRzxqGrxjYB3i6',
        'C3rHCNrZv2L0Aa',
        'zMXVB3i',
        'r0vu',
        'EwvSBg93',
        'mti1mKfQuuDZyW',
        'Aw5WDxq',
        'B3bLBG',
        '8j+BNcbszwnVBM5Ly3rLzcaOqxr0zw1WDca',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5oG',
        'zMLSzvvYBa',
        'B25WB3bZDgf0zq',
        'BgvUz3rO',
        'B2zMBgLUzq',
        '8j+tQsbozxCGBwvZC2fNzxmGBg9HzgvKihn1y2nLC3nMDwXSEs4',
        'B3bHy2L0Eq',
        'cGKGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNr5CgLUzY1KB3rZiJ4kcsaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpJWVC3bHBJ48C3bHBJ48l3nWyw4+phnWyw4+pc9ZCgfUpGOjicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcsaGicaGicaGicaGicaGica',
        '4PQG77IpienVBM5Ly3rPB24GzMfPBgvKoG',
        'lMnOyxqTy29UDgfPBMvY',
        'BxLHDMf0yxi',
        'yxbWBgLJyxrPB24VANnVBG',
        'Aw5UzxjizwLNAhq',
        'sw1Hz2uGDxbSB2fKigzHAwXLzce',
        'C2vUzgvY',
        'vxnLCIbjrcbVCIbvC2vYBMfTzsbPCYbTAxnZAw5NlIbtA2LWCgLUzY4',
        'AM9PBG',
        'y3vYCMvUDfrPBwu',
        'B3rOzxi',
        'Bg9N',
        'y2XHC3nmAxn0',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVia',
        'zg9JDw1LBNrfBgvTzw50',
        'BNvTzxjPyW',
        'C3rYAw5NAwz5',
        'C2HVDY1JAgf0',
        'C3jJ',
        'u2vUDcbjBwfNzq',
        'CMvZAxPL',
        'rMfPBgvKihrVig1HCMSGBwvZC2fNzxmGyxmGCMvHzdO',
        'Aw1Hz2u',
        'C2nYB2XSvg9W',
        'ChvZAfn0yxrL',
        'C3r5Bgu',
        'y2HHDf8',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVignSzwfYihrOzsbJAgf0ignHy2HLigzVCIa',
        'igHHCYbIzwvUia',
        'DxbKyxrLze1LC3nHz2vZ',
        'C2HVCNq',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEtWVCd4',
        'w2rHDgeTDxnLCI1Pzd0N',
        'Dg9tDhjPBMC',
        'l2fWAs9JAgf0CY9OAxn0B3j5lW',
        'C2vZC2LVBI1LEhbPCMvK',
        'zgvSzxrL',
        'zw1PDa',
        'y2HHDfDHBgXWyxbLCG',
        'zw5JCNLWDgLVBKTLEq',
        'y29UBMvJDf9LCNjVCG',
        'C2v0',
        'tgfZDcbtzwvUoIa',
        'z2vUzxjHDgvlzxK',
        'BwfW',
        'pgrPDIbJBgfZCZ0Iy2HHDc1TzxnZywDLCYi+pc9KAxy+',
        'C3vIDgXL',
        'Dw5IBg9JAY11C2vY',
        'BM9YBwfS',
        'C2vUze1LC3nHz2u',
        'zM9YrwfJAa',
        'Dw5KzwzPBMvK',
        'AxnszwfK',
        'rxjYB3iGBg9HzgLUzYbJAgf0ig1LC3nHz2vZoG',
        'BgLNAhq',
        'CMf3',
        'qMXVy2S',
        'C3rHDhvZ',
        'z2v0sxrLBq',
        'rxjYB3iGzMv0y2HPBMCGzNjVBsbZzxj2zxi6',
        'C2vSzG',
        'zxjYB3i',
        'Bg9JyxrPB24',
        'z2v0rwXLBwvUDej5swq',
        'BMf0AxzL',
        'BwvZC2fNzs1PBNb1Da',
        'BgvHDMvsB29T',
        'ywX0',
        'y29UDgfPBNm',
        'y292zxi',
        'AxncBg9JA2vK',
        '4PQHifvZAw5NienHy2HLzcbdAgf0igzVCIa',
        'D2fSBhbHCgvYlwj0BG',
        'Bw9Yzs1IDg4',
        '8j+BNcbtB2nRzxqGy29UBMvJDgvKihrVihrOzsbZzxj2zxiGD2L0AcbjrdO',
        'C2vZC2LVBI1Hy3rPDMu',
        '4PQG77IpifjLy29UBMvJDgLVBIbgywLSzwq',
        'z2v0tw9UDgG',
        'zgL2',
        'CMvJB25Uzwn0',
        'rgf0zvrPBwvgB3jTyxq',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCG',
        'tgfZDcbtzwvUoIbzzxn0zxjKyxKSia',
        'twvZC2fNzxmGBwfYA2vKigfZihjLywq6',
        'AhjLzG',
        'zhjVCgrVD24TBwvUDq',
        'y2HHDc13Aw5KB3C',
        'C3rYAw5N',
        'BM93',
        'z3jLzw4',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEs48l3a+',
        'rxjYB3iGBwfYA2LUzYbTzxnZywDLCYbHCYbYzwfKoG',
        'DxnLCK9MzMXPBMu',
        'rxjYB3i6iezPBguGC2L6zsbLEgnLzwrLzcbVCIb0B28GBwfUEsbYzxf1zxn0CW',
        'BwfYA0fZuMvHza',
        'ugLJA2vY',
        'yMXVy2S',
        'y2f0y2G',
        'ls12Aa',
        'yMvMB3jLDw5SB2fK',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AguGzw50AxjLignOyxqGAgLZDg9YEt8GvgHPCYbHy3rPB24Gy2fUBM90igjLihvUzg9Uzs4',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5',
        'tM8GDg9Rzw4GzM91BMq',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLigzVCIa',
        'z2v0uMfUzg9TvMfSDwvZ',
        'C2v0uhjVCgvYDhK',
        'q2HHDcbJywnOzsbJBgvHCMvKigzVCIb1C2vYia',
        'BgfZDefJDgL2zq',
        'AxnpBMXPBMu',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'l25PAg9Uz28VBwvKAweVBM90AwzPy2f0Aw9UlM1WmW',
        'A2v5zg93BG',
        'DhLWAw5N',
        'y2XVC2uTyMX1CI1ZBgLKzxi',
        'zgLZy29UBMvJDa',
        'DgfYz2v0',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZig1LC3nHz2u/',
        'CMvJzwL2zxi',
        'rxjYB3iGCMvMCMvZAgLUzYbJAgf0oG',
        'A2v5',
        'Aw5JBhvKzxm',
        'DxnLCK9UBgLUzq',
        '4PQG77IpierPC2nVBM5Ly3rLza',
        'lMnOyxqTD2LUzg93',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'y2HHDejSDxi',
        'l2fWAs9JAgf0CY8',
        'C2nYB2XSsgvPz2H0',
        'CgXHEq',
        'zgvJCNLWDa',
        'nZa2mZGXmZLYsxn5ugG',
        'zMXLEa',
        'zw5JCNLWDa',
        'Dhj1zq',
        'sfruucbLCNjVCIeGu3rHDhvZoIa',
        'Dgv4Da',
        'i0reodzgrG',
        'rxjYB3iGzgvSzxrPBMCGy2HHDcbOAxn0B3j5oG',
        'qNvZEq',
        'DxnLCM5HBwu',
        'zNjVBq',
        'yxbWzw5Kq2HPBgq',
        'zxHW',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'mti0mti1ntbvzKzkugS',
        'BgfUz3vHz2u',
        'z2v0',
        'rxjYB3iGyMXVy2TPBMCGDxnLCI4',
        'y2HHDhrLzfvZzxjZ',
        'C2v0sxrLBq',
        'zM9UDfDLAwDODa',
        'Aw1N',
        'y2vUDgvY',
        'CMvHzefZrgf0yvvsta',
        'CxvLCNLtzwXLy3rVCG',
        'Aw1Hz2vvCMW',
        'ywXS'
    ];
    _0x5ee1 = function () {
        return _0x420915;
    };
    return _0x5ee1();
}
function showNotification(_0x43fe44) {
    const _0x5f34d8 = _0x275095, _0x4c5331 = document['createElement'](_0x5f34d8(0x2a5));
    _0x4c5331[_0x5f34d8(0x224)] = _0x43fe44, _0x4c5331[_0x5f34d8(0x270)][_0x5f34d8(0x22d)] = _0x5f34d8(0x1ff), document[_0x5f34d8(0x217)][_0x5f34d8(0x1b1)](_0x4c5331), setTimeout(() => _0x4c5331[_0x5f34d8(0x1f1)](), 0xbb8);
}
async function generateKey() {
    const _0x4654bb = _0x275095;
    if (sessionStorage[_0x4654bb(0x291)](_0x4654bb(0x27e)))
        return;
    const _0x8a3a4c = await crypto[_0x4654bb(0x285)][_0x4654bb(0x282)]({
            'name': _0x4654bb(0x21f),
            'length': 0x100
        }, !![], [
            _0x4654bb(0x1a8),
            'decrypt'
        ]), _0xd4c39c = new Uint8Array(await crypto[_0x4654bb(0x285)][_0x4654bb(0x214)](_0x4654bb(0x28e), _0x8a3a4c));
    sessionStorage['setItem'](_0x4654bb(0x27e), JSON[_0x4654bb(0x267)](Array[_0x4654bb(0x1b0)](_0xd4c39c)));
}
generateKey();
async function getKey() {
    const _0x3fc610 = _0x275095, _0x3918fb = JSON[_0x3fc610(0x20b)](sessionStorage[_0x3fc610(0x291)](_0x3fc610(0x27e))), _0x5eca12 = new Uint8Array(_0x3918fb);
    return await crypto[_0x3fc610(0x285)]['importKey']('raw', _0x5eca12, { 'name': _0x3fc610(0x21f) }, !![], [
        _0x3fc610(0x1a8),
        _0x3fc610(0x1a5)
    ]);
}
async function encryptMessage(_0xaad4c7) {
    const _0x2518e5 = _0x275095, _0x44d007 = await getKey(), _0x28d265 = crypto[_0x2518e5(0x18c)](new Uint8Array(0xc)), _0x559e70 = new TextEncoder()[_0x2518e5(0x1ea)](_0xaad4c7), _0x1ec04c = await crypto[_0x2518e5(0x285)][_0x2518e5(0x1a8)]({
            'name': _0x2518e5(0x21f),
            'iv': _0x28d265
        }, _0x44d007, _0x559e70);
    return JSON[_0x2518e5(0x267)]({
        'iv': Array[_0x2518e5(0x1b0)](_0x28d265),
        'data': Array['from'](new Uint8Array(_0x1ec04c))
    });
}
async function decryptMessage(_0x27106f) {
    const _0x172ee4 = _0x275095;
    try {
        const _0x279eb1 = await getKey(), _0x4f770b = JSON[_0x172ee4(0x20b)](_0x27106f), _0x2e7d12 = new Uint8Array(_0x4f770b['iv']), _0x1861f5 = new Uint8Array(_0x4f770b['data']), _0x5deac6 = await crypto[_0x172ee4(0x285)]['decrypt']({
                'name': _0x172ee4(0x21f),
                'iv': _0x2e7d12
            }, _0x279eb1, _0x1861f5);
        return new TextDecoder()[_0x172ee4(0x1e0)](_0x5deac6);
    } catch (_0x93f960) {
        return console[_0x172ee4(0x294)](_0x172ee4(0x1fc), _0x93f960), null;
    }
}
async function loadChatCache() {
    const _0x5b402b = _0x275095;
    showNotification('🔑\x20Loading\x20Encrypted\x20Chat\x20Cache...');
    let _0x137f34 = ![];
    for (let _0x9d6dc7 = 0x0; _0x9d6dc7 < localStorage[_0x5b402b(0x252)]; _0x9d6dc7++) {
        const _0x28b3b2 = localStorage['key'](_0x9d6dc7);
        if (_0x28b3b2[_0x5b402b(0x247)](_0x5b402b(0x271))) {
            const _0x3a7f37 = _0x28b3b2[_0x5b402b(0x1f4)]('_')[0x1], _0x48d412 = localStorage[_0x5b402b(0x291)](_0x28b3b2);
            if (_0x48d412)
                try {
                    const _0x57b2e6 = await Promise[_0x5b402b(0x1c0)](JSON[_0x5b402b(0x20b)](_0x48d412)[_0x5b402b(0x283)](async _0x44237b => {
                        const _0x3762a6 = _0x5b402b, _0x2be36b = await decryptMessage(_0x44237b);
                        if (_0x2be36b === null)
                            throw new Error(_0x3762a6(0x235));
                        return JSON['parse'](_0x2be36b);
                    }));
                    chatCache[_0x5b402b(0x280)](_0x3a7f37, _0x57b2e6);
                } catch (_0x3f8e81) {
                    console[_0x5b402b(0x294)](_0x5b402b(0x1fa) + _0x3a7f37 + ':', _0x3f8e81), localStorage[_0x5b402b(0x239)](_0x28b3b2), console[_0x5b402b(0x23c)]('Removed\x20corrupted\x20chat\x20cache\x20for\x20user\x20' + _0x3a7f37), _0x137f34 = !![];
                }
        }
    }
    _0x137f34 ? showNotification('⚠️\x20Some\x20chats\x20failed\x20to\x20load\x20due\x20to\x20decryption\x20errors.') : showNotification(_0x5b402b(0x207));
}
function _0x4117(_0xe48637, _0x4a6790) {
    const _0x5ee125 = _0x5ee1();
    return _0x4117 = function (_0x411797, _0x580ed5) {
        _0x411797 = _0x411797 - 0x17e;
        let _0x3cdd34 = _0x5ee125[_0x411797];
        if (_0x4117['FoljiN'] === undefined) {
            var _0x2ef694 = function (_0x1f03fb) {
                const _0x5cf1f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x152194 = '', _0x1dbce2 = '';
                for (let _0x5840cb = 0x0, _0x1dc83e, _0x45b075, _0x5970ac = 0x0; _0x45b075 = _0x1f03fb['charAt'](_0x5970ac++); ~_0x45b075 && (_0x1dc83e = _0x5840cb % 0x4 ? _0x1dc83e * 0x40 + _0x45b075 : _0x45b075, _0x5840cb++ % 0x4) ? _0x152194 += String['fromCharCode'](0xff & _0x1dc83e >> (-0x2 * _0x5840cb & 0x6)) : 0x0) {
                    _0x45b075 = _0x5cf1f['indexOf'](_0x45b075);
                }
                for (let _0x5d2f06 = 0x0, _0xc66795 = _0x152194['length']; _0x5d2f06 < _0xc66795; _0x5d2f06++) {
                    _0x1dbce2 += '%' + ('00' + _0x152194['charCodeAt'](_0x5d2f06)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x1dbce2);
            };
            _0x4117['RtLjAM'] = _0x2ef694, _0xe48637 = arguments, _0x4117['FoljiN'] = !![];
        }
        const _0x6aea0 = _0x5ee125[0x0], _0x17ebb4 = _0x411797 + _0x6aea0, _0x3e1a02 = _0xe48637[_0x17ebb4];
        return !_0x3e1a02 ? (_0x3cdd34 = _0x4117['RtLjAM'](_0x3cdd34), _0xe48637[_0x17ebb4] = _0x3cdd34) : _0x3cdd34 = _0x3e1a02, _0x3cdd34;
    }, _0x4117(_0xe48637, _0x4a6790);
}
window[_0x275095(0x234)]('load', loadChatCache), document[_0x275095(0x234)]('DOMContentLoaded', () => {
    const _0x35f937 = _0x275095, _0x2a3378 = document['getElementById']('emoji-button'), _0x5362c3 = document[_0x35f937(0x296)](_0x35f937(0x298)), _0x505b98 = document[_0x35f937(0x296)](_0x35f937(0x241)), _0x147363 = new EmojiMart[(_0x35f937(0x183))]({
            'onEmojiSelect': _0x20421b => {
                const _0x154dc1 = _0x35f937;
                _0x5362c3[_0x154dc1(0x1fe)] += _0x20421b[_0x154dc1(0x297)];
            },
            'theme': _0x35f937(0x28d)
        });
    _0x505b98['appendChild'](_0x147363), _0x2a3378['addEventListener'](_0x35f937(0x21a), () => {
        const _0x40b664 = _0x35f937;
        _0x505b98[_0x40b664(0x263)][_0x40b664(0x1c7)](_0x40b664(0x1f3));
    }), document['addEventListener'](_0x35f937(0x21a), _0x5ddcd9 => {
        const _0x1cc929 = _0x35f937;
        !_0x505b98[_0x1cc929(0x29b)](_0x5ddcd9[_0x1cc929(0x197)]) && _0x5ddcd9['target'] !== _0x2a3378 && _0x505b98[_0x1cc929(0x263)][_0x1cc929(0x1e1)](_0x1cc929(0x1f3));
    });
}), document[_0x275095(0x296)](_0x275095(0x29f))[_0x275095(0x1d0)] = function () {
    const _0x54b674 = _0x275095;
    document['getElementById'](_0x54b674(0x21c))[_0x54b674(0x270)][_0x54b674(0x1ce)] = _0x54b674(0x184);
};
function closeModal() {
    const _0x1ebdda = _0x275095;
    document['getElementById'](_0x1ebdda(0x21c))[_0x1ebdda(0x270)][_0x1ebdda(0x1ce)] = 'none';
}
function setChatBackground(_0x2e3e6c) {
    const _0x4044a6 = _0x275095, _0x4474a5 = document[_0x4044a6(0x1be)]('.chat-window');
    _0x4474a5[_0x4044a6(0x270)]['background'] = _0x2e3e6c, _0x4474a5['style'][_0x4044a6(0x20c)] = 'cover', _0x4474a5['style']['backgroundPosition'] = _0x4044a6(0x1bc), localStorage[_0x4044a6(0x1b9)]('chatWallpaper', _0x2e3e6c), closeModal();
}
function resetChatBackground() {
    const _0x1e822c = _0x275095;
    document[_0x1e822c(0x1be)](_0x1e822c(0x19f))['style']['background'] = '', localStorage[_0x1e822c(0x239)](_0x1e822c(0x27d)), closeModal();
}
window[_0x275095(0x21e)] = function () {
    const _0x25ecd8 = _0x275095;
    let _0x4b0897 = localStorage['getItem']('chatWallpaper');
    if (_0x4b0897) {
        let _0x3d6a01 = document[_0x25ecd8(0x1be)](_0x25ecd8(0x19f));
        _0x3d6a01[_0x25ecd8(0x270)][_0x25ecd8(0x1d2)] = _0x4b0897, _0x3d6a01[_0x25ecd8(0x270)][_0x25ecd8(0x20c)] = _0x25ecd8(0x29c), _0x3d6a01['style']['backgroundPosition'] = _0x25ecd8(0x1bc);
    }
}, document[_0x275095(0x234)](_0x275095(0x1c9), function () {
    const _0x1baff1 = _0x275095, _0x24157a = document[_0x1baff1(0x296)]('blur-btn'), _0x5b038a = document[_0x1baff1(0x296)](_0x1baff1(0x238)), _0x164c4a = document[_0x1baff1(0x296)]('blur-slider'), _0x4f0800 = document[_0x1baff1(0x296)](_0x1baff1(0x232)), _0x362175 = document[_0x1baff1(0x296)](_0x1baff1(0x195));
    let _0x1d9640 = localStorage[_0x1baff1(0x291)](_0x1baff1(0x1a1)) || 0x5;
    document[_0x1baff1(0x265)]['style']['setProperty']('--blur-value', _0x1d9640 + 'px'), _0x164c4a[_0x1baff1(0x1fe)] = _0x1d9640, _0x4f0800['textContent'] = _0x1d9640, _0x24157a[_0x1baff1(0x234)](_0x1baff1(0x21a), function () {
        const _0x4832a3 = _0x1baff1;
        _0x5b038a[_0x4832a3(0x270)]['display'] = 'block';
    }), _0x164c4a[_0x1baff1(0x234)](_0x1baff1(0x24c), function () {
        const _0x29caf8 = _0x1baff1;
        document[_0x29caf8(0x265)][_0x29caf8(0x270)][_0x29caf8(0x18d)](_0x29caf8(0x212), this[_0x29caf8(0x1fe)] + 'px'), _0x4f0800[_0x29caf8(0x224)] = this[_0x29caf8(0x1fe)], localStorage[_0x29caf8(0x1b9)](_0x29caf8(0x1a1), this['value']);
    }), _0x362175[_0x1baff1(0x234)]('click', function () {
        const _0x50c1c2 = _0x1baff1;
        _0x5b038a[_0x50c1c2(0x270)][_0x50c1c2(0x1ce)] = _0x50c1c2(0x1c6);
    });
});
function clearChatCacheCnf(_0x16e289) {
    const _0x1b2805 = _0x275095;
    if (!confirm(_0x1b2805(0x272) + currentChatUsername + '?'))
        return;
    clearChatCache(_0x16e289);
}
function clearChatCache(_0x111f3c) {
    const _0x4c584c = _0x275095;
    chatCache[_0x4c584c(0x216)](_0x111f3c) && chatCache[_0x4c584c(0x27b)](_0x111f3c);
    const _0x296dc0 = _0x4c584c(0x271) + _0x111f3c;
    localStorage[_0x4c584c(0x291)](_0x296dc0) && localStorage[_0x4c584c(0x239)](_0x296dc0);
    const _0x5b9fd0 = document[_0x4c584c(0x296)](_0x4c584c(0x2ad));
    _0x5b9fd0[_0x4c584c(0x22b)] = '', showPopupMessage(_0x4c584c(0x18e) + currentChatUsername);
}
async function deleteChatHistory(_0x5f23d2) {
    const _0x8b613e = _0x275095;
    if (!_0x5f23d2) {
        showPopupMessage2('Chat\x20user\x20ID\x20is\x20undefined.\x20Cannot\x20delete\x20chat\x20history.');
        return;
    }
    const _0x31501d = confirm(_0x8b613e(0x188));
    if (!_0x31501d)
        return;
    try {
        const _0x24dffa = await apiRequest('/api/chats/delete/' + senderUserId + '/' + _0x5f23d2, {
                'method': _0x8b613e(0x225),
                'headers': {
                    'Content-Type': _0x8b613e(0x25a),
                    'Authorization': _0x8b613e(0x1c3) + localStorage[_0x8b613e(0x291)]('accessToken')
                }
            }), _0x12c757 = await _0x24dffa[_0x8b613e(0x236)]();
        if (_0x24dffa['ok']) {
            console['log'](_0x8b613e(0x24f), _0x12c757), showPopupMessage2(_0x8b613e(0x189), 0xbb8, _0x8b613e(0x2b0));
            let _0xe49b34 = JSON[_0x8b613e(0x20b)](localStorage[_0x8b613e(0x291)](_0x8b613e(0x1b8))) || [];
            _0xe49b34 = _0xe49b34[_0x8b613e(0x22e)](_0x3245af => _0x3245af['userId'] !== _0x5f23d2), localStorage['setItem'](_0x8b613e(0x1b8), JSON['stringify'](_0xe49b34)), clearChatCache(currentChatUserId);
            const _0x36b30d = document[_0x8b613e(0x296)](_0x8b613e(0x2ad));
            _0x36b30d['innerHTML'] = '', loadChatList();
        } else
            console['error'](_0x8b613e(0x1eb), _0x12c757[_0x8b613e(0x294)]), alert(_0x8b613e(0x22c) + _0x12c757[_0x8b613e(0x294)]);
    } catch (_0x5269f0) {
        console[_0x8b613e(0x294)](_0x8b613e(0x1ad), _0x5269f0), alert('Failed\x20to\x20delete\x20chat\x20history.\x20Please\x20try\x20again.');
    }
}
intializeSocket(), socket['on'](_0x275095(0x294), _0x5aae57 => {
    const _0x5310bd = _0x275095;
    console[_0x5310bd(0x294)](_0x5310bd(0x246), _0x5aae57);
});