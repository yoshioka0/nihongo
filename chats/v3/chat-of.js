const _0x118374 = _0x286b;
(function (_0x4839eb, _0x2c5589) {
    const _0x3aa8d9 = _0x286b, _0x243671 = _0x4839eb();
    while (!![]) {
        try {
            const _0x115793 = -parseInt(_0x3aa8d9(0x1d1)) / 0x1 * (parseInt(_0x3aa8d9(0x21b)) / 0x2) + parseInt(_0x3aa8d9(0x11e)) / 0x3 * (parseInt(_0x3aa8d9(0xcd)) / 0x4) + parseInt(_0x3aa8d9(0x177)) / 0x5 * (parseInt(_0x3aa8d9(0x170)) / 0x6) + -parseInt(_0x3aa8d9(0x172)) / 0x7 + -parseInt(_0x3aa8d9(0x216)) / 0x8 * (-parseInt(_0x3aa8d9(0xef)) / 0x9) + -parseInt(_0x3aa8d9(0x1e2)) / 0xa * (-parseInt(_0x3aa8d9(0x214)) / 0xb) + -parseInt(_0x3aa8d9(0x11b)) / 0xc;
            if (_0x115793 === _0x2c5589)
                break;
            else
                _0x243671['push'](_0x243671['shift']());
        } catch (_0x118488) {
            _0x243671['push'](_0x243671['shift']());
        }
    }
}(_0x217e, 0x584a0), history[_0x118374(0x1f0)](null, null, location[_0x118374(0x14d)]), window[_0x118374(0x1a8)] = function () {
    const _0x54dd3c = _0x118374;
    history[_0x54dd3c(0x1f0)](null, null, location['href']);
});
let currentRoomId = null, currentRoomName = null, tokenexpired;
const token = getJWTToken();
if (token) {
    const decodedToken = JSON['parse'](atob(token[_0x118374(0x16f)]('.')[0x1])), expiryTime = decodedToken[_0x118374(0x1c7)] * 0x3e8;
    startCountdown(expiryTime);
} else
    console[_0x118374(0xf7)](_0x118374(0x1cf));
function startCountdown(_0x1517d2) {
    const _0x36c317 = _0x118374, _0x21fc4a = document[_0x36c317(0x153)](_0x36c317(0xd4)), _0x4dd2e0 = setInterval(() => {
            const _0x4a5c7b = _0x36c317, _0x1721ba = Date[_0x4a5c7b(0x1db)](), _0x5745f2 = _0x1517d2 - _0x1721ba;
            if (_0x5745f2 <= 0x0)
                clearInterval(_0x4dd2e0), _0x21fc4a['textContent'] = _0x4a5c7b(0x105), _0x21fc4a[_0x4a5c7b(0x1d2)][_0x4a5c7b(0x194)](_0x4a5c7b(0xdc)), _0x21fc4a['classList'][_0x4a5c7b(0x114)](_0x4a5c7b(0x19e)), showPopupMessage('Session\x20Expired'), tokenexpired = !![];
            else {
                const _0x302a09 = Math[_0x4a5c7b(0x1dc)](_0x5745f2 / 0xea60), _0x45a376 = Math[_0x4a5c7b(0x1dc)](_0x5745f2 % 0xea60 / 0x3e8);
                _0x21fc4a['textContent'] = '⏰\x20' + _0x302a09 + ':' + (_0x45a376 < 0xa ? '0' : '') + _0x45a376, _0x21fc4a[_0x4a5c7b(0x1d2)][_0x4a5c7b(0x194)](_0x4a5c7b(0x19e)), _0x21fc4a['classList'][_0x4a5c7b(0x114)](_0x4a5c7b(0xdc));
            }
        }, 0x3e8);
}
const accessToken = localStorage[_0x118374(0xee)](_0x118374(0x10b)), socket = io(SOCKET_URL, { 'auth': { 'token': localStorage[_0x118374(0xee)]('accessToken') } });
socket['on'](_0x118374(0x118), () => {
    const _0x1d2716 = _0x118374;
    console[_0x1d2716(0xf7)](_0x1d2716(0x1f7), socket['id']), document[_0x1d2716(0x153)](_0x1d2716(0x1b7))['textContent'] = '🛜\x20Connected', document['getElementById'](_0x1d2716(0x1b7))[_0x1d2716(0x1d2)][_0x1d2716(0x194)](_0x1d2716(0x15a), _0x1d2716(0x1d4)), document[_0x1d2716(0x153)](_0x1d2716(0x1b7))[_0x1d2716(0x1d2)][_0x1d2716(0x114)](_0x1d2716(0x15a)), currentRoomId && currentRoomName && (showPopupMessage2(_0x1d2716(0x15e), 0x7d0, _0x1d2716(0x1c8)), joinRoom(currentRoomId, currentRoomName));
});
function _0x286b(_0x100bd9, _0xdc0c02) {
    const _0x217e10 = _0x217e();
    return _0x286b = function (_0x286b1f, _0x452b3e) {
        _0x286b1f = _0x286b1f - 0xc8;
        let _0x4baa13 = _0x217e10[_0x286b1f];
        if (_0x286b['pVHCnF'] === undefined) {
            var _0x31ef11 = function (_0x1517d2) {
                const _0x21fc4a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x4dd2e0 = '', _0x1721ba = '';
                for (let _0x5745f2 = 0x0, _0x302a09, _0x45a376, _0x1db8f3 = 0x0; _0x45a376 = _0x1517d2['charAt'](_0x1db8f3++); ~_0x45a376 && (_0x302a09 = _0x5745f2 % 0x4 ? _0x302a09 * 0x40 + _0x45a376 : _0x45a376, _0x5745f2++ % 0x4) ? _0x4dd2e0 += String['fromCharCode'](0xff & _0x302a09 >> (-0x2 * _0x5745f2 & 0x6)) : 0x0) {
                    _0x45a376 = _0x21fc4a['indexOf'](_0x45a376);
                }
                for (let _0x5dfc06 = 0x0, _0x57d995 = _0x4dd2e0['length']; _0x5dfc06 < _0x57d995; _0x5dfc06++) {
                    _0x1721ba += '%' + ('00' + _0x4dd2e0['charCodeAt'](_0x5dfc06)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x1721ba);
            };
            _0x286b['dHlYPX'] = _0x31ef11, _0x100bd9 = arguments, _0x286b['pVHCnF'] = !![];
        }
        const _0x3568d6 = _0x217e10[0x0], _0x364fb9 = _0x286b1f + _0x3568d6, _0x503442 = _0x100bd9[_0x364fb9];
        return !_0x503442 ? (_0x4baa13 = _0x286b['dHlYPX'](_0x4baa13), _0x100bd9[_0x364fb9] = _0x4baa13) : _0x4baa13 = _0x503442, _0x4baa13;
    }, _0x286b(_0x100bd9, _0xdc0c02);
}
const searchUser = document[_0x118374(0x153)](_0x118374(0x16e)), chatList = document[_0x118374(0x153)](_0x118374(0xe6)), chatWindow = document[_0x118374(0x153)](_0x118374(0x1a4)), messageInput = document['getElementById'](_0x118374(0x1da)), sendButton = document[_0x118374(0x153)]('send-button'), logoutButton = document[_0x118374(0x153)](_0x118374(0x203)), blockButton = document[_0x118374(0x153)]('block-button'), chatUserElement = document[_0x118374(0x153)]('chat-user'), lastActiveElement = document[_0x118374(0x153)](_0x118374(0xd8)), userElement2 = chatUserElement, loader = document[_0x118374(0x153)](_0x118374(0x120)), decoded = decodeJWT(accessToken), senderUserId = decoded['userId'], senderUsername = decoded[_0x118374(0x136)];
document[_0x118374(0x153)](_0x118374(0xca))[_0x118374(0x156)] = senderUsername;
async function fetchAPI(_0x1db8f3, _0x5dfc06 = _0x118374(0xe1), _0x57d995 = null) {
    const _0x5b16d9 = _0x118374, _0x51a8ef = {
            'Content-Type': _0x5b16d9(0x13c),
            'Authorization': _0x5b16d9(0x1bd) + accessToken
        }, _0x38db1a = {
            'method': _0x5dfc06,
            'headers': _0x51a8ef
        };
    if (_0x57d995)
        _0x38db1a[_0x5b16d9(0x1ce)] = JSON[_0x5b16d9(0x13b)](_0x57d995);
    const _0x427d43 = await apiRequest('' + _0x1db8f3, _0x38db1a);
    if (!_0x427d43['ok'])
        throw new Error(await _0x427d43[_0x5b16d9(0x1f5)]());
    return _0x427d43[_0x5b16d9(0x15b)]();
}
const url = new URL(self[_0x118374(0x10c)][_0x118374(0x14d)]), queryParam = url[_0x118374(0x12a)][_0x118374(0xe3)](_0x118374(0x136));
let query = null;
queryParam && (query = queryParam, searchUser['value'] = query, loadChatList(query));
function _0x217e() {
    const _0x375aae = [
        'ywnJzxnZvg9Rzw4',
        'Bg9JyxrPB24',
        'zgLZCgXHEq',
        '4PQG77IpienVBM5Ly3rPB24GzMfPBgvKoG',
        'zgvSzxrLlwj1DhrVBG',
        'mI1KAwDPDa',
        'zw4Tvvm',
        'x2LK',
        'AxnpBMXPBMu',
        'ywrK',
        'y29UBMvJDf9LCNjVCG',
        'y3nZvgv4Da',
        'CMvHzc1YzwnLAxb0',
        'y29UBMvJDa',
        'l2fWAs9JAgf0CY9JAgf0DgvKlxvZzxjZ',
        'rMfPBgvKihrVigrLBgv0zsbJAgf0igHPC3rVCNK6',
        'mtm4ndy0ntjOwMLvEKG',
        'CMvHzefZrgf0yvvsta',
        'DgLTzxn0yw1W',
        'ndCYotHqtwv1rve',
        'Dg9tDhjPBMC',
        'Aw1Hz2uTBg9HzgvY',
        'l25PAg9Uz28VAw1Nl3vZzxiUCg5N',
        'BgfUz3vHz2u',
        '4PQG77IpifjLy29UBMvJDgLVBIbMywLSzwq6',
        'rgf0zvrPBwvgB3jTyxq',
        'rxjYB3i',
        '8j+uKsbmB2fKAw5NievUy3j5ChrLzcbdAgf0ienHy2HLlI4U',
        'vxbSB2fKAw5NigLTywDLlI4U',
        'lMnOyxqTy29UDgfPBMvY',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5oG',
        'C2vHCMnOugfYyw1Z',
        'Bw9Yzs1IDg4',
        'zw5JB2rL',
        '4PQG77IpifnVy2TLDcbKAxnJB25Uzwn0zwq6',
        'C2nYB2XSvg9W',
        'C2vUze1LC3nHz2u',
        'BxLHDMf0yxi',
        'DhjPBq',
        'D2fSBhbHCgvYlwj0BG',
        '8j+uTpcFN6lWN5+GieXVywrLzcbdAgf0DgvKifvZzxjZig1HDgnOAw5Nihf1zxj5',
        'zMLSzvvYBa',
        'ihjLywqGBwvZC2fNzxmGAw4Gy2HHDca',
        'DxnLCM5HBwu',
        'C29JA2v0oG',
        'rxjYB3iGyMXVy2TPBMCGDxnLCJO',
        'B2zMBgLUzq',
        'yMfJA2DYB3vUzfnPEMu',
        'C3rYAw5NAwz5',
        'yxbWBgLJyxrPB24VANnVBG',
        'DxnLCK9UBgLUzq',
        'zg9JDw1LBNrfBgvTzw50',
        'z2v0rNvSBfLLyxi',
        'CgfYC2u',
        'A2v5zg93BG',
        'DMLZAwjPBgL0EwnOyw5Nzq',
        'C3rYAw5N',
        'BwfW',
        'y2HHDfDHBgXWyxbLCG',
        'Aw5WDxq',
        'ufvu',
        'u2vUDcbjBwfNzq',
        'C3r5Bgu',
        'pha+tM8GBwvZC2fNzxmGEwv0lJWVCd4',
        'zM9UDfDLAwDODa',
        'uefuq0G',
        'AhjLzG',
        'Dg9Nz2XL',
        'DhLWAw5N',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVia',
        'y2HHDejSDxi',
        'Aw1Hz2uTChjLDMLLDY1JB250ywLUzxi',
        'z2v0rwXLBwvUDej5swq',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLoG',
        'ugLJA2vY',
        'Dgv4DenVBNrLBNq',
        't2zMBgLUzq',
        'DxnLCKj1C3K',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEtWVCd4',
        'y29U',
        'ANnVBG',
        'Dg9mB2nHBgvuAw1Lu3rYAw5N',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCG',
        '8j+FOIbszwnVBM5Ly3rLza',
        'rxjYB3iGzMv0y2HPBMCGzNjVBsbZzxj2zxi6',
        'rw50zxi',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AguGzw50AxjLignOyxqGAgLZDg9YEt8GvgHPCYbHy3rPB24Gy2fUBM90igjLihvUzg9Uzs4',
        'yxbWzw5K',
        'y29UDgfPBNm',
        'z2v0rgf0zq',
        'l2fWAs9JAgf0CY8',
        'BwvZC2fNzq',
        'qNvZEq',
        'C2v0uhjVCgvYDhK',
        'pha+rxjYB3iGBg9HzgLUzYbTzxnZywDLCY4GugXLyxnLihrYEsbHz2fPBIbSyxrLCI48l3a+',
        'BMv3twvZC2fNzq',
        'lMjHy2STyNrU',
        'y2HHDf8',
        'AgLKzgvU',
        'C2vHCMnOlxvZzxjZ',
        'C3bSAxq',
        'mJr4yxfowee',
        'C29Tzq',
        'mti4nZeXmxLvt2zsBG',
        'DxnLCLbYB2zPBgvqAwm',
        'CMvJB25Uzwn0x2vYCM9Y',
        'u29JA2v0ignVBM5Ly3rPB24GzMfPBgvKlcb0CNKGywDHAw4GBgf0zxiU',
        'Aw1WB3j0s2v5',
        'nZm2mZG1A1fvAvf6',
        'w2rHDgeTDxnLCI1Pzd0N',
        'l2fWAs9JAgf0CY9OAxn0B3j5lW',
        'zMXLEa',
        'Aw1Hz2uTChjLDMLLDW',
        're9nq29UDgvUDeXVywrLza',
        'twvZC2fNzxmGBwfYA2vKigfZihjLywq6',
        'C3jJ',
        'B3bHy2L0EsaWlJnZigvHC2uTAw4TB3v0',
        '8j+tQsbozxCGBwvZC2fNzsbMCM9Tia',
        'l2fWAs9JAgf0CY9ZyxzLlwnOyxr0zwqTDxnLCG',
        'Dw5YzwfKlwnVBNrHAw5LCG',
        'zw1PDa',
        'Aw5JBhvKzxm',
        'BgfZDefJDgL2zq',
        'ywXS',
        'BwfYA0fZuMvHza',
        'BM9YBwfS',
        'lM1LC3nHz2uUC2vSzIaUCMvHzc1YzwnLAxb0',
        'sw1Hz2uGDxbSB2fKigzHAwXLzce',
        'DhjHBNnSyxrLwsGXmhb4kq',
        'cGKGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNr5CgLUzY1KB3rZiJ4kcsaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpJWVC3bHBJ48C3bHBJ48l3nWyw4+phnWyw4+pc9ZCgfUpGOjicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcsaGicaGicaGicaGicaGica',
        'z2v0tw9UDgG',
        '4PYfienOyxqGq2fJAguGtg9HzgvKifn1y2nLC3nMDwXSEs4',
        'AgfZ',
        '4PQG77IpierPC2nVBM5Ly3rLza',
        'zw1VAMKTyNv0Dg9U',
        'rxjYB3iGBwfYA2LUzYbTzxnZywDLCYbHCYbYzwfKoG',
        'yMX1CI12ywX1zq',
        'CMvTB3zL',
        'ue9tva',
        'C2vUzgvY',
        '4PQG77IpiezHAwXLzcb0BYbYzwzYzxnOignOyxqU',
        'C3vIDgXL',
        'CMvZAxPL',
        'twvZC2fNzsbUB3qGCMvSyxrLzcb0BYbJDxjYzw50ihDPBMrVDYWGAwDUB3jLza',
        'y2HHDc11C2vY',
        'igHHCYbIzwvUia',
        'uMvTB3zLzcbJB3jYDxb0zwqGy2HHDcbJywnOzsbMB3iGDxnLCIa',
        'C2vZC2LVBI1LEhbPCMvK',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVigrLBgv0zsb0AgLZig1LC3nHz2u/',
        'Bg9Hza',
        'C2v0sxrLBq',
        'CMf3',
        'Dw5KzwzPBMvK',
        'y2HHDc13Aw5KB3C',
        'C2HVDW',
        'ls1IBhvYlxzHBhvL',
        'C29YDa',
        'B25WB3bZDgf0zq',
        'y2fUy2vSlxbYzxzPzxC',
        'q2HHDcbOAxn0B3j5igrLBgv0zwqGC3vJy2vZC2z1BgX5',
        'AM9PBG',
        'vw5IBg9JAW',
        'DMfSDwu',
        '8j+uTcbtB2nRzxqGrxjYB3i6',
        'pgGXpLnLC3nPB24GrxHWAxjLzcWGuMvMCMvZAcb0AguGCgfNzs48l2GXpGOjcqKjcqKjcqKjcqK8Aw1Nihn0EwXLpsjOzwLNAhq6mJaWChG7ihDPzhrOoJiWmhb4oYbWB3nPDgLVBJPHyNnVBhv0ztSGDg9WoJuWjtSGBgvMDdO1mcu7ihrYyw5ZzM9YBtP0CMfUC2XHDguOltuWjsWGltuWjsK7iIbZCMm9iI9UAwHVBMDVl2LTzY9Py29UlNbUzYiGlZ4j',
        'rNvUy3rPB24GDw5HDMfPBgfIBguHie1LC3nHz2uGBM90igrLBgv0zwqGAxrZigP1C3qGysbKzw1VlG',
        'l2fWAs9JAgf0CY9HDMfPBgfIAwXPDhKV',
        'DhjHBNnPDgLVBG',
        'B3bHy2L0Eq',
        'Aw5Uzxjive1m',
        'rxjYB3i6iezPBguGC2L6zsbLEgnLzwrLzcbVCIb0B28GBwfUEsbYzxf1zxn0CW',
        'lMnOyxqTBwvZC2fNzxm',
        'C29JA2v0lxn0yxr1CW',
        't25SAw5L',
        'C2v0',
        'sM9PBIbLBwL0igzHAwXLzcb0BYbZB2nRzxqGD2L0Acb1C2vYoG',
        'CMvK',
        'Aw1Hz2uTAw5WDxq',
        'qMvHCMvYia',
        'BgvUz3rO',
        'yMXVy2S',
        'rxjYB3iGy2HLy2TPBMCGDxnLCIbHDMfPBgfIAwXPDhK6',
        '8j+KR/cFPk/WN6sV',
        'rxjYB3iGyMXVy2TPBMCGDxnLCI4',
        'l2fWAs9JAgf0CY91C2vYCZ91C2vYBMfTzt0',
        'Dg9eyxrLu3rYAw5N',
        'pha+tM8GDxnLCNmGzM91BMqGBwf0y2HPBMCGEw91CIbXDwvYEs48l3a+',
        '8j+uHcbdAgvJA2LUzYbMB3iGBwLZC2LUzYbTzxnZywDLCYaUlI4',
        'zxHW',
        'z3jLzw4',
        'w2rHDgeTBwvZC2fNzs1Pzd0I',
        'q2HHDcbJywnOzsbJBgvHCMvKigzVCIb1C2vYia',
        'zNjVBq',
        'zM9YrwfJAa',
        'ls12Aa',
        'yM9KEq',
        'tM8GDg9Rzw4GzM91BMq',
        'BMf0AxzL',
        'mJmZsgDzAM51',
        'y2XHC3nmAxn0',
        'l2fWAs9JAgf0CY9KzwXLDguV',
        'zgLZ',
        'igHHCYbIzwvUigrLBgv0zwqGyNKGDgHLig90AgvYihvZzxiU',
        'CMvJzwL2zxi',
        'Dg9mB3DLCKnHC2u',
        'y29SB3i',
        'rxjYB3iGC2vUzgLUzYbTzxnZywDLiq',
        'BwvZC2fNzs1PBNb1Da',
        'BM93',
        'zMXVB3i',
        'DgfYz2v0',
        'sw52ywXPzcbYzxnWB25ZzsbMCM9TihnLCNzLCI4',
        'zgL2',
        'rMfPBgvKihrVigrLy3j5ChqGy2HHDcbMB3iG',
        '4PQG77IpienVBM5Ly3rPB24GrMfPBgvK',
        'mtm1mgjzvun3EG',
        'yNv0Dg9U',
        'D2fYBG',
        'vxnLCIa',
        'BgLNAhq',
        'D2fSBhbHCgvYtw9KywW',
        'y2vUDgvY',
        'CxvLCNLtzwXLy3rVCG',
        'zgf0yq',
        '8j+tQsbmB2fKzwqG',
        'rxjYB3iGDxbKyxrPBMCGC2vYDMvYoG',
        'yxbWzw5Kq2HPBgq',
        'zw5JCNLWDa',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVignSzwfYihrOzsbJAgf0ignHy2HLigzVCIa',
        'ChvZAfn0yxrL',
        'yMX1CI1ZBgLKzxiTy29UDgfPBMvY',
        'CMvZDwX0',
        'rxjYB3iGDxbKyxrPBMCGBwvZC2fNzsbJywnOztO',
        'Aw5UzxjxAwr0Aa',
        'Dgv4Da',
        'yMX1CI1IDg4',
        '8j+BNcbtB2nRzxqGy29UBMvJDgvKihrVihrOzsbZzxj2zxiGD2L0AcbjrdO',
        'z2vUzxjHDgvlzxK',
        'quvtluDdtq',
        'ica8C3zNignSyxnZpsjHBMLTywWIihzPzxDcB3G9iJaGmcaXmdaWideWmdaIpJWVC3zNpGK',
        'rxjYB3i6ie5VihvZzxiGC2vSzwn0zwqGDg8GyMXVy2SU',
        'sfruucbLCNjVCIeGu3rHDhvZoIa',
        'rgvJCNLWDgLVBIbMywLSzwq6',
        'BwvZC2fNzxnszwfK',
        'C2nYB2XSsgvPz2H0',
        'l2fWAs9JAgf0CY9IBg9JAY1ZDgf0DxmV',
        'y292zxi',
        'ChvZAa',
        'Bg9NB3v0qNrU',
        'C2vUzgvYtMfTzq',
        'y2HHDhrLzfvZzxjZ',
        'zMLSDgvY',
        'DhLWzq',
        'Bwf0y2HLCW',
        'rxjYB3i6',
        'ievYCM9YihvWzgf0Aw5Nig1LC3nHz2uGy2fJAgu6ia',
        'B25JBgLJAW',
        'u2vZC2LVBIbfEhbPCMvK',
        'DxnLCI1PDgvT',
        'y3jLyxrLrwXLBwvUDa',
        'l2fWAs9JAgf0CY9TyxjRlxjLywq',
        'rgvJCNLWDgLVBIbMywLSzwq',
        'zhjVCgrVD24TBwvUDq',
        'vxnLCIbPCYbcDxn5',
        'B25SB2fK',
        'mZG1ntvcy1bQB3a',
        'Aw1Hz2vvCMW',
        'mtiWy3jRtwrZ',
        'AxncBg9JA2vK',
        'DhLWAw5NlwLUzgLJyxrVCG',
        'vxnLCIbjrcbVCIbvC2vYBMfTzsbPCYbTAxnZAw5NlIbtA2LWCgLUzY4',
        'z2v0uMfUzg9TvMfSDwvZ',
        'ndaYnhbsBwzYBW',
        'zM9YBwf0',
        'lMnOyxqTD2LUzg93',
        'zgvJCNLWDa',
        'zgf0yxnLDa',
        'C2HVCNq',
        'Dw5IBg9JA2vK',
        '8j+uTcbtB2nRzxqGDw5KzwzPBMvKoIbmAwTLBhKGzhvLihrVihnVy2TLDcbPBML0AwfSAxnHDgLVBIbHC3LUy2HYB25VDxm',
        'y2HHDeHPC3rVCNLezwXLDgvK',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idCWChG7igXLzNq6ideWChG7igjHy2TNCM91BMq6icmWmdDIzMy7ignVBg9YoIb3AgL0ztSGCgfKzgLUzZOGohb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7ihOTAw5KzxG6ideWmda7',
        '8j+sRca',
        'BM9Uzq',
        'A2v5',
        'AxnszwfK',
        'BxLvC2vYBMfTzq',
        'yMXVy2STDxnLCG',
        'pgHYignSyxnZpsj1BNjLywqTzgL2AwrLCIi+phnWyw4Gy2XHC3m9iNvUCMvHzc10zxH0iJ5vBNjLywqGtwvZC2fNzxm8l3nWyw4+',
        'mtC2swPMr2jn',
        'C3bHBG',
        'DxbKyxrLze1LC3nHz2vZ',
        'yMvMB3jLDw5SB2fK',
        'yMXVy2TLza',
        'zgvJB2rL',
        'Dw5IBg9JAY11C2vY',
        'y291BNrKB3DU',
        'yNvZEq',
        'B3jPz2LUywXuzxH0',
        'zgLZy29UBMvJDa',
        'C3rHDhvZ',
        'pgrPDIbJBgfZCZ0Iy2HHDc1TzxnZywDLCYi+pc9KAxy+',
        'i2nOyxqTBgLZDa',
        'DhjHBNnMB3jT',
        'C2vZC2LVBI1Hy3rPDMu',
        'rxjYB3iGzgvSzxrPBMCGy2HHDcbOAxn0B3j5oG',
        'C2HVDY1JAgf0',
        'y2XPy2S',
        'C3rHCNrZv2L0Aa',
        'r0vu',
        'vhLWAw5N',
        'z2v0',
        'Dg9mB2nHBgveyxrLu3rYAw5N',
        'q2HHDcbOAxn0B3j5ihDPDgGG',
        'y2HHDc1SAxn0',
        'zxjYB3i',
        '8j+BNcbszwnVBM5Ly3rLzcaOqxr0zw1WDca',
        'zw5JCNLWDgLVBKTLEq',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'x2jSyw5R',
        'idXKAxyGy2XHC3m9iMXVywrLCI1JB250ywLUzxiIpIa8zgL2ignSyxnZpsjSB2fKzxiIpJWVzgL2pIa8C3bHBJ5mB2fKAw5NienOyxrZlI4Upc9ZCgfUpIa8l2rPDJ4j',
        'yMfJA2DYB3vUza',
        'z2v0sxrLBq',
        'mJq3mZeXteHcwu1s',
        'BgvHDMvsB29T',
        'EwvSBg93',
        '4PQG77IpifjLy29UBMvJDgLVBIbgywLSzwq',
        'pgKGy2XHC3m9iMzHlxnVBgLKigzHlxrYyxnOiJ48l2K+',
        'l25PAg9Uz28VBwvKAweVCg9WlM1WmW',
        'y2HHDc1PBwfNzq',
        'zgvSzxrL',
        'Bg9N',
        '4PQG77Ipie5VignOyxqGC2vSzwn0zwqGDg8GCMvMCMvZAc4',
        'B3bLBG',
        'yM9Sza',
        'ywX0',
        'CMvJB25Uzwn0',
        'B25SAw5L',
        'DxnLCKLK',
        'y2HHDerLBgv0zwq',
        'rxjYB3i6ia',
        'y2XPzw50sgvPz2H0',
        'yMfJA2DYB3vUzfbVC2L0Aw9U',
        'zxHWB3j0s2v5',
        'DxnLCK9MzMXPBMu',
        'u2vZC2LVBIbLEhbPCMvK',
        'Aw1Hz2u',
        'BNvTzxjPyW',
        'C2vSzG',
        'qMXVy2S',
        'CMvTB3zLsxrLBq'
    ];
    _0x217e = function () {
        return _0x375aae;
    };
    return _0x217e();
}
let debounceTimeout;
function searchUsers() {
    const _0x300058 = _0x118374, _0x17df78 = document['getElementById'](_0x300058(0x16e))[_0x300058(0x1ad)][_0x300058(0x131)]();
    clearTimeout(debounceTimeout), debounceTimeout = setTimeout(() => {
        loadChatList(_0x17df78);
    }, 0x1f4);
}
let currentChatUserId = null;
async function loadChatList(_0x3398f8 = '') {
    const _0x4ca339 = _0x118374;
    try {
        chatList['innerHTML'] = '';
        const _0x15a66f = JSON[_0x4ca339(0x140)](localStorage[_0x4ca339(0xee)]('chattedUsers')) || [], _0x593184 = document[_0x4ca339(0x20e)]('hr'), _0x3e06a6 = document[_0x4ca339(0x20e)]('hr'), _0x33282c = new Set(_0x15a66f[_0x4ca339(0x144)](_0x33ff1f => _0x33ff1f['userId']));
        let _0x3402c2 = [], _0x1965c5 = new Set();
        console[_0x4ca339(0xf7)](_0x4ca339(0x133)), _0x15a66f[_0x4ca339(0x1cc)](({
            username: _0x19dd0e,
            userId: _0x29a576
        }) => {
            const _0xe41658 = _0x4ca339;
            if (_0x19dd0e['toLowerCase']()[_0xe41658(0x184)](_0x3398f8[_0xe41658(0x1d7)]())) {
                const _0x7d490 = createUserItem(_0x19dd0e, _0x29a576);
                chatList[_0xe41658(0x1ed)](_0x7d490), _0x1965c5[_0xe41658(0x114)](_0x29a576);
            }
        }), chatList[_0x4ca339(0x1ed)](_0x593184);
        if (_0x3398f8) {
            if (_0x3398f8[_0x4ca339(0x1be)] < 0x3) {
                chatList[_0x4ca339(0x1b4)] = '<p>Search\x20query\x20length\x20must\x20be\x20>=\x203</p>';
                return;
            }
            const _0x94b72f = await fetchAPI(_0x4ca339(0x1c3) + _0x3398f8);
            _0x94b72f['length'] === 0x0 && (chatList['innerHTML'] = _0x4ca339(0x1c5)), _0x3402c2 = _0x94b72f[_0x4ca339(0x206)](_0x3e8f4a => !_0x33282c[_0x4ca339(0x18f)](_0x3e8f4a[_0x4ca339(0x112)])), _0x3402c2['forEach'](_0x4f29c8 => {
                const _0x1f9f83 = _0x4ca339, _0xd47db3 = createUserItem(_0x4f29c8[_0x1f9f83(0x136)], _0x4f29c8['_id']);
                chatList[_0x1f9f83(0x1ed)](_0xd47db3);
            }), _0x3402c2['length'] > 0x0 && chatList[_0x4ca339(0x1ed)](_0x3e06a6);
        }
        !_0x3398f8 && _0x15a66f[_0x4ca339(0x1cc)](({
            username: _0x165c84,
            userId: _0x495eb6
        }) => {
            const _0x151557 = _0x4ca339;
            if (!_0x1965c5['has'](_0x495eb6)) {
                const _0x71575f = createUserItem(_0x165c84, _0x495eb6);
                chatList[_0x151557(0x1ed)](_0x71575f);
            }
        });
    } catch (_0x1fbf4c) {
        chatList['innerHTML'] = _0x4ca339(0x159), console[_0x4ca339(0xe7)]('Error\x20loading\x20chat\x20list:', _0x1fbf4c[_0x4ca339(0x166)]);
    }
}
function createUserItem(_0x1e75a4, _0x266f48) {
    const _0x1bacd2 = _0x118374, _0x16308e = document[_0x1bacd2(0x20e)](_0x1bacd2(0x1df));
    return _0x16308e[_0x1bacd2(0x156)] = _0x1e75a4, _0x16308e[_0x1bacd2(0x1d2)][_0x1bacd2(0x114)](_0x1bacd2(0x20d)), _0x16308e[_0x1bacd2(0x21f)][_0x1bacd2(0xfe)] = _0x266f48, _0x16308e[_0x1bacd2(0xea)](_0x1bacd2(0xdf), () => openChat(_0x266f48, _0x1e75a4)), _0x16308e;
}
function joinRoom(_0x55caf0, _0xf00261) {
    const _0x298a84 = _0x118374;
    currentRoomId && socket[_0x298a84(0x183)](_0x298a84(0xf0), { 'currentChatUserId': currentRoomId }), currentRoomId = _0x55caf0, currentRoomName = _0xf00261, socket[_0x298a84(0x183)](_0x298a84(0x1ab), { 'recipientUserId': _0x55caf0 });
}
const chatCache = new Map();
chatWindow['innerHTML'] = _0x118374(0x1fa);
async function openChat(_0x448f81, _0x1e55ef) {
    const _0x33e8ad = _0x118374;
    console[_0x33e8ad(0xf7)](_0x448f81, _0x1e55ef), currentChatUserId = _0x448f81, currentChatUsername = _0x1e55ef, searchUser[_0x33e8ad(0x1ad)] = null, saveUser(currentChatUserId, currentChatUsername), loadChatList(), document[_0x33e8ad(0x153)](_0x33e8ad(0x19b))['textContent'] = _0x33e8ad(0x225) + _0x1e55ef;
    if (tokenexpired) {
        showPopupMessage(_0x33e8ad(0x20c)), chatWindow['innerHTML'] = _0x33e8ad(0x1af);
        return;
    }
    chatWindow[_0x33e8ad(0x1b4)] = _0x33e8ad(0xec), joinRoom(_0x448f81, _0x1e55ef);
    if (chatCache[_0x33e8ad(0x18f)](_0x448f81))
        renderMessages(chatCache['get'](_0x448f81));
    else
        try {
            let _0x13c5ef = [];
            const _0x315673 = localStorage[_0x33e8ad(0xee)](_0x33e8ad(0x16c) + _0x448f81);
            if (_0x315673)
                _0x13c5ef = await Promise[_0x33e8ad(0x186)](JSON[_0x33e8ad(0x140)](_0x315673)['map'](async _0x218e2e => JSON[_0x33e8ad(0x140)](await decryptMessage(_0x218e2e))));
            else {
                _0x13c5ef = await fetchAPI(_0x33e8ad(0x179) + senderUserId + '/' + _0x448f81);
                const _0x31be8d = await Promise[_0x33e8ad(0x186)](_0x13c5ef[_0x33e8ad(0x144)](_0x33a121 => encryptMessage(JSON[_0x33e8ad(0x13b)](_0x33a121))));
                localStorage[_0x33e8ad(0x1a1)](_0x33e8ad(0x16c) + _0x448f81, JSON[_0x33e8ad(0x13b)](_0x31be8d));
            }
            chatCache[_0x33e8ad(0x1b9)](_0x448f81, _0x13c5ef), renderMessages(_0x13c5ef);
        } catch (_0x7aeb1b) {
            console[_0x33e8ad(0xe7)]('Error\x20loading\x20chat\x20messages:', _0x7aeb1b[_0x33e8ad(0x166)]), chatMessagesContainer['innerHTML'] = _0x33e8ad(0x169);
        }
    checkUserAvailability(currentChatUserId), socket[_0x33e8ad(0x183)]('markAsRead', {
        'senderId': senderUserId,
        'receiverId': currentChatUserId
    }), updateBlockButton();
}
async function renderMessages(_0x2bf043) {
    const _0x8ce96a = _0x118374;
    chatWindow[_0x8ce96a(0x1b4)] = _0x8ce96a(0xd9);
    const _0x4f3543 = chatWindow[_0x8ce96a(0x1e9)](_0x8ce96a(0x1b6));
    _0x4f3543[_0x8ce96a(0x1b4)] = _0x2bf043[_0x8ce96a(0x1be)] ? '' : _0x8ce96a(0x14a);
    for (const _0x216094 of _0x2bf043) {
        const _0x488593 = _0x216094[_0x8ce96a(0x196)][_0x8ce96a(0x112)] === senderUserId;
        displayMessage(_0x216094, _0x488593);
    }
    refreshChat();
}
async function saveUser(_0x145f00, _0x121003) {
    const _0x58c6e6 = _0x118374;
    if (!_0x145f00 || !_0x121003) {
        console[_0x58c6e6(0x1e4)](_0x58c6e6(0x219));
        return;
    }
    let _0x576da5 = JSON[_0x58c6e6(0x140)](localStorage[_0x58c6e6(0xee)]('chattedUsers')) || [];
    !_0x576da5[_0x58c6e6(0x171)](_0x5b1050 => _0x5b1050[_0x58c6e6(0xfe)] === _0x145f00) && (_0x576da5[_0x58c6e6(0x202)]({
        'userId': _0x145f00,
        'username': _0x121003
    }), localStorage['setItem'](_0x58c6e6(0x205), JSON[_0x58c6e6(0x13b)](_0x576da5)));
    try {
        const _0x57703d = await apiRequest(_0x58c6e6(0x181), {
                'method': 'POST',
                'headers': {
                    'Content-Type': _0x58c6e6(0x13c),
                    'Authorization': _0x58c6e6(0x1bd) + localStorage[_0x58c6e6(0xee)](_0x58c6e6(0x10b))
                },
                'body': JSON[_0x58c6e6(0x13b)]({ 'currentChatUserId': _0x145f00 })
            }), _0x5a1cd7 = await _0x57703d[_0x58c6e6(0x15b)]();
        console[_0x58c6e6(0xf7)](_0x5a1cd7['message']);
    } catch (_0x17a947) {
        console[_0x58c6e6(0xe7)](_0x58c6e6(0x1ec), _0x17a947), showPopupMessage(_0x17a947);
    }
}
async function getChattedUsers() {
    const _0x7da3b1 = _0x118374;
    let _0x2ae643 = JSON[_0x7da3b1(0x140)](localStorage[_0x7da3b1(0xee)](_0x7da3b1(0x205)));
    if (!_0x2ae643 || _0x2ae643[_0x7da3b1(0x1be)] === 0x0)
        try {
            const _0x24c92d = await apiRequest(_0x7da3b1(0x119), {
                    'method': _0x7da3b1(0xe1),
                    'headers': { 'Authorization': _0x7da3b1(0x1bd) + localStorage[_0x7da3b1(0xee)](_0x7da3b1(0x10b)) }
                }), _0x2f0ae3 = await _0x24c92d[_0x7da3b1(0x15b)]();
            _0x2f0ae3[_0x7da3b1(0x205)] && (_0x2ae643 = _0x2f0ae3['chattedUsers']['map'](_0x26e4fb => ({
                'userId': _0x26e4fb[_0x7da3b1(0x112)],
                'username': _0x26e4fb['username']
            })), localStorage[_0x7da3b1(0x1a1)](_0x7da3b1(0x205), JSON[_0x7da3b1(0x13b)](_0x2ae643)), loadChatList());
        } catch (_0x35e9bb) {
            console['error'](_0x7da3b1(0x15f), _0x35e9bb);
        }
    else
        loadChatList();
}
document[_0x118374(0xea)](_0x118374(0x17c), getChattedUsers);
async function appendMessages(_0x55d82f) {
    const _0x123931 = _0x118374, _0xf46af2 = document[_0x123931(0x20e)](_0x123931(0x1df));
    _0xf46af2['innerHTML'] = _0x123931(0xcc), _0xf46af2['classList']['add'](_0x123931(0x182)), chatWindow['appendChild'](_0xf46af2);
    for (const _0x2eba76 of _0x55d82f) {
        if (typeof _0x2eba76[_0x123931(0x196)] === _0x123931(0x143))
            _0x2eba76[_0x123931(0x196)] = { '_id': _0x2eba76[_0x123931(0x196)] };
        if (typeof _0x2eba76[_0x123931(0x1d6)] === _0x123931(0x143))
            _0x2eba76['receiver'] = { '_id': _0x2eba76['receiver'] };
        const _0x4abd9d = _0x2eba76['sender'][_0x123931(0x112)] === senderUserId;
        displayMessage(_0x2eba76, _0x4abd9d);
    }
    chatWindow['scrollHeight'] - chatWindow['scrollTop'] <= chatWindow[_0x123931(0x101)] + 0x32 && (chatWindow[_0x123931(0x12e)] = chatWindow[_0x123931(0x1ff)]);
}
async function refreshChat() {
    const _0x2c693e = _0x118374;
    if (!currentChatUserId) {
        showAlert(_0x2c693e(0xf8));
        return;
    }
    showNotification(_0x2c693e(0x1c6));
    try {
        const _0xef7f52 = await fetchAPI('/api/chats/history/' + senderUserId + '/' + currentChatUserId);
        if (!Array['isArray'](_0xef7f52))
            throw new Error(_0x2c693e(0x1de));
        const _0x5f337b = chatCache[_0x2c693e(0xe3)](currentChatUserId) || [], _0x2dc1e7 = _0xef7f52[_0x2c693e(0x206)](_0xf222ee => !_0x5f337b[_0x2c693e(0x171)](_0x44222b => _0x44222b[_0x2c693e(0x112)] === _0xf222ee[_0x2c693e(0x112)])), _0x49ccb9 = _0x2dc1e7[_0x2c693e(0x206)](_0x5c7f62 => !document[_0x2c693e(0x1e9)](_0x2c693e(0x1c9) + _0x5c7f62['_id'] + '\x22]'));
        if (_0x49ccb9[_0x2c693e(0x1be)] === 0x0) {
            showNotification('✅\x20Chat\x20is\x20up\x20to\x20date\x20with\x20' + currentChatUsername);
            return;
        }
        const _0x2e6703 = [
            ..._0x5f337b,
            ..._0x49ccb9
        ][_0x2c693e(0x1a7)]((_0x3bcf52, _0x13b55f) => new Date(_0x3bcf52[_0x2c693e(0x11d)]) - new Date(_0x13b55f[_0x2c693e(0x11d)]));
        chatCache[_0x2c693e(0x1b9)](currentChatUserId, _0x2e6703);
        const _0xc87a6a = await Promise[_0x2c693e(0x186)](_0x2e6703[_0x2c693e(0x144)](_0x14ed4d => encryptMessage(JSON[_0x2c693e(0x13b)](_0x14ed4d))));
        localStorage[_0x2c693e(0x1a1)](_0x2c693e(0x16c) + currentChatUserId, JSON[_0x2c693e(0x13b)](_0xc87a6a)), appendMessages(_0x49ccb9), showNotification(_0x2c693e(0x1eb) + _0x49ccb9[_0x2c693e(0x1be)] + '\x20missing\x20messages.');
    } catch (_0x35f731) {
        console[_0x2c693e(0xe7)]('❌\x20Error\x20refreshing\x20chat:', _0x35f731), showNotification(_0x2c693e(0x197));
    }
}
function displayMessage(_0x3676a2, _0x364e34) {
    const _0x59a954 = _0x118374, _0x5ebe1f = document[_0x59a954(0x20e)](_0x59a954(0x1df));
    _0x5ebe1f['classList'][_0x59a954(0x114)](_0x59a954(0x166), _0x364e34 ? _0x59a954(0x108) : 'other'), _0x5ebe1f[_0x59a954(0x21f)][_0x59a954(0xd6)] = _0x3676a2[_0x59a954(0x166)], _0x5ebe1f[_0x59a954(0x21f)][_0x59a954(0x122)] = detectLanguage(_0x3676a2[_0x59a954(0x166)]);
    const _0x40b2d0 = document['createElement'](_0x59a954(0x1e3));
    _0x40b2d0[_0x59a954(0x1d2)][_0x59a954(0x114)](_0x59a954(0x10f)), _0x40b2d0[_0x59a954(0x1b4)] = _0x59a954(0xf3), _0x40b2d0['onclick'] = () => confirmDelete(_0x5ebe1f);
    const _0x206453 = new Date(_0x3676a2[_0x59a954(0x11d)])[_0x59a954(0xe4)]([], {
            'year': _0x59a954(0x107),
            'month': _0x59a954(0x220),
            'day': 'numeric'
        }), _0x4ebf7a = new Date(_0x3676a2[_0x59a954(0x11d)])[_0x59a954(0x15c)]([], {
            'hour': _0x59a954(0x110),
            'minute': '2-digit',
            'second': _0x59a954(0x110)
        }), _0x18703d = _0x206453 + ',\x20' + _0x4ebf7a, _0x22561e = document[_0x59a954(0x20e)]('span');
    _0x22561e[_0x59a954(0x1d2)][_0x59a954(0x114)](_0x59a954(0x11d)), _0x22561e['textContent'] = _0x18703d;
    const _0x35e80a = document[_0x59a954(0x20e)](_0x59a954(0xce));
    _0x35e80a[_0x59a954(0x1d2)]['add'](_0x59a954(0x117));
    _0x364e34 && (_0x35e80a[_0x59a954(0x156)] = _0x3676a2[_0x59a954(0xc9)] ? '✔✔' : '✔');
    if (_0x3676a2[_0x59a954(0x207)] === _0x59a954(0x106)) {
        const _0x83b7ce = document[_0x59a954(0x20e)]('img');
        _0x83b7ce['src'] = _0x3676a2[_0x59a954(0x134)], _0x83b7ce[_0x59a954(0x1d2)]['add'](_0x59a954(0xf5)), _0x83b7ce[_0x59a954(0xfb)] = _0x59a954(0x148), _0x83b7ce['onclick'] = () => window[_0x59a954(0xf9)](_0x3676a2['fileUrl'], _0x59a954(0xeb)), _0x5ebe1f[_0x59a954(0x1ed)](_0x83b7ce);
    } else {
        const _0x8003ca = document[_0x59a954(0x20e)]('p');
        _0x8003ca[_0x59a954(0x156)] = _0x3676a2[_0x59a954(0x166)], _0x5ebe1f[_0x59a954(0x1ed)](_0x8003ca);
    }
    _0x5ebe1f[_0x59a954(0x1ed)](_0x40b2d0), _0x5ebe1f['appendChild'](_0x22561e), _0x5ebe1f['appendChild'](_0x35e80a), chatWindow[_0x59a954(0x1ed)](_0x5ebe1f), chatWindow[_0x59a954(0x12e)] = chatWindow[_0x59a954(0x1ff)], updateMessages();
}
function confirmDelete(_0x2e4abc) {
    const _0x1799dd = _0x118374;
    confirm(_0x1799dd(0x19f)) && (_0x2e4abc[_0x1799dd(0x194)](), showPopupMessage2(_0x1799dd(0x1b0)));
}
function intializeSocket() {
    const _0x42063b = _0x118374;
    if (socket) {
        sendButton[_0x42063b(0xea)]('click', _0x5ec4fc), messageInput['addEventListener'](_0x42063b(0x141), _0x44b70e => {
            const _0x5a0b7c = _0x42063b;
            if (_0x44b70e[_0x5a0b7c(0xc8)] === _0x5a0b7c(0x160))
                _0x5ec4fc();
        });
        const _0x1c6ddc = document[_0x42063b(0x153)]('image-button'), _0x2a7fb3 = document[_0x42063b(0x153)](_0x42063b(0x1bc)), _0x148935 = document[_0x42063b(0x153)](_0x42063b(0x152)), _0x5f3c89 = document[_0x42063b(0x153)](_0x42063b(0x17b)), _0x5b02f7 = document[_0x42063b(0x153)](_0x42063b(0x1a9));
        let _0x60cc0e = null;
        _0x1c6ddc[_0x42063b(0xea)]('click', () => {
            const _0x23b9a2 = _0x42063b;
            _0x2a7fb3[_0x23b9a2(0xdf)]();
        }), _0x5b02f7[_0x42063b(0xea)](_0x42063b(0xdf), () => {
            const _0x50c9f2 = _0x42063b;
            _0x60cc0e = null, _0x148935[_0x50c9f2(0x149)][_0x50c9f2(0x10d)] = _0x50c9f2(0x226), _0x2a7fb3[_0x50c9f2(0x1ad)] = '';
        }), _0x2a7fb3[_0x42063b(0xea)]('change', _0x5b19c5 => {
            const _0x5a7067 = _0x42063b, _0xb49760 = _0x5b19c5[_0x5a7067(0x1dd)]['files'][0x0];
            if (_0xb49760) {
                _0x60cc0e = _0xb49760;
                const _0x40ac97 = new FileReader();
                _0x40ac97[_0x5a7067(0x213)] = _0x3eb638 => {
                    const _0x414ca0 = _0x5a7067;
                    _0x5f3c89[_0x414ca0(0x17e)] = _0x3eb638[_0x414ca0(0x1dd)][_0x414ca0(0x1f2)], _0x148935[_0x414ca0(0x149)]['display'] = _0x414ca0(0x1bf);
                }, _0x40ac97[_0x5a7067(0x11c)](_0xb49760);
            }
        });
        async function _0x5ec4fc() {
            const _0x126626 = _0x42063b;
            if (!currentChatUserId)
                return;
            if (tokenexpired) {
                showPopupMessage(_0x126626(0x20c)), chatWindow[_0x126626(0x1b4)] = _0x126626(0x1af);
                return;
            }
            let _0x3b4cf4 = null;
            const _0x2fb5ff = messageInput[_0x126626(0x1ad)][_0x126626(0x131)]();
            if (_0x2fb5ff) {
                const _0x22b1ca = {
                    'senderUsername': senderUsername,
                    'receiver': currentChatUserId,
                    'message': _0x2fb5ff,
                    'type': _0x126626(0x1f5)
                };
                try {
                    socket[_0x126626(0x183)](_0x126626(0x12f), _0x22b1ca, _0x7807bd => {
                        const _0x1a36f9 = _0x126626;
                        messageInput['value'] = '', _0x7807bd?.[_0x1a36f9(0xe7)] && showAlert(_0x1a36f9(0x1d9), _0x7807bd[_0x1a36f9(0xe7)]);
                    });
                } catch (_0x125941) {
                    console['error'](_0x126626(0x154), _0x125941[_0x126626(0x166)]);
                }
            }
            if (_0x60cc0e) {
                showNotification(_0x126626(0x127)), loader[_0x126626(0x149)]['display'] = _0x126626(0x1bf);
                try {
                    const _0x5732e3 = new FormData();
                    _0x5732e3[_0x126626(0x162)]('image', _0x60cc0e);
                    const _0xd221e3 = await apiRequest('/api/upload', {
                            'method': _0x126626(0x195),
                            'headers': { 'Authorization': _0x126626(0x1bd) + localStorage[_0x126626(0xee)](_0x126626(0x10b)) },
                            'body': _0x5732e3
                        }), _0x50291d = await _0xd221e3[_0x126626(0x15b)]();
                    if (!_0x50291d[_0x126626(0x215)]) {
                        showNotification(_0x126626(0x18a)), loader[_0x126626(0x149)][_0x126626(0x10d)] = _0x126626(0x226), showPopupMessage(_0x50291d[_0x126626(0x166)] || 'Access\x20denied.');
                        return;
                    }
                    _0x50291d?.['error'] && (loader[_0x126626(0x149)][_0x126626(0x10d)] = 'none', showAlert(_0x126626(0x209), _0x50291d[_0x126626(0xe7)]));
                    _0x3b4cf4 = _0x50291d[_0x126626(0x215)];
                    const _0x1ec109 = {
                        'senderUsername': senderUsername,
                        'receiver': currentChatUserId,
                        'message': '[Image]',
                        'type': _0x126626(0x106),
                        'fileUrl': _0x3b4cf4
                    };
                    socket[_0x126626(0x183)](_0x126626(0x12f), _0x1ec109, _0x5be7af => {
                        const _0x1bc84f = _0x126626;
                        _0x5be7af?.['error'] && showAlert(_0x1bc84f(0x125), _0x5be7af[_0x1bc84f(0xe7)]);
                    }), _0x60cc0e = null, loader[_0x126626(0x149)][_0x126626(0x10d)] = 'none', _0x148935[_0x126626(0x149)]['display'] = _0x126626(0x226), _0x2a7fb3['value'] = '';
                } catch (_0x19371f) {
                    loader['style'][_0x126626(0x10d)] = _0x126626(0x226), showNotification(_0x126626(0x1b5)), console['error']('Error\x20uploading\x20image:', _0x19371f['message']);
                }
            }
        }
        socket['on']('receiveMessage', async _0x4b8039 => {
            const _0x3658e0 = _0x42063b;
            if (!_0x4b8039 || !_0x4b8039[_0x3658e0(0x196)] || !_0x4b8039[_0x3658e0(0x1d6)])
                return;
            _0x53593d(_0x4b8039), _0x4b8039[_0x3658e0(0x196)] === currentChatUserId || _0x4b8039[_0x3658e0(0x1d6)] === currentChatUserId ? (_0x11028a['style'][_0x3658e0(0x10d)] = _0x3658e0(0x226), displayMessage(_0x4b8039, _0x4b8039[_0x3658e0(0x196)] === senderUserId), _0x4b8039[_0x3658e0(0x196)] !== senderUserId && playAudio('/nihongo/media/notification.mp3')) : console[_0x3658e0(0xf7)](_0x3658e0(0x19a));
        }), socket['on']('newMessageNotification', _0x1b9753 => {
            const _0x5d5e7c = _0x42063b;
            showNotification2(_0x5d5e7c(0x180) + _0x1b9753[_0x5d5e7c(0x204)] + ':\x20' + _0x1b9753[_0x5d5e7c(0x16a)][_0x5d5e7c(0x166)], 0x1b58), playAudio(_0x5d5e7c(0xf4)), _0x53593d(_0x1b9753[_0x5d5e7c(0x16a)]);
        });
        async function _0x53593d(_0x4114d1) {
            const _0x4f46e9 = _0x42063b;
            try {
                const _0xacaae6 = {
                        ..._0x4114d1,
                        'sender': { '_id': _0x4114d1[_0x4f46e9(0x196)] },
                        'receiver': { '_id': _0x4114d1['receiver'] }
                    }, _0x3a34a7 = _0x4114d1[_0x4f46e9(0x196)] === senderUserId ? _0x4114d1[_0x4f46e9(0x1d6)] : _0x4114d1[_0x4f46e9(0x196)], _0x477f95 = chatCache['get'](_0x3a34a7) || [];
                if (_0xacaae6[_0x4f46e9(0x112)] && !_0x477f95['some'](_0x493075 => _0x493075[_0x4f46e9(0x112)] === _0xacaae6[_0x4f46e9(0x112)])) {
                    const _0x5e922e = [
                        ..._0x477f95,
                        _0xacaae6
                    ];
                    chatCache[_0x4f46e9(0x1b9)](_0x3a34a7, _0x5e922e);
                    const _0x39a9e7 = await Promise[_0x4f46e9(0x186)](_0x5e922e[_0x4f46e9(0x144)](_0x3b8ab5 => encryptMessage(JSON[_0x4f46e9(0x13b)](_0x3b8ab5))));
                    localStorage['setItem'](_0x4f46e9(0x16c) + _0x3a34a7, JSON[_0x4f46e9(0x13b)](_0x39a9e7));
                }
            } catch (_0x563802) {
                showAlert(_0x4f46e9(0x20a), _0x563802[_0x4f46e9(0x166)]), console[_0x4f46e9(0xe7)](_0x4f46e9(0x1f3), _0x563802);
            }
        }
        let _0x2833bc, _0x1beef1 = !![];
        const _0x11028a = document[_0x42063b(0x153)](_0x42063b(0x218));
        messageInput[_0x42063b(0xea)](_0x42063b(0x146), () => {
            const _0x5d0114 = _0x42063b;
            currentChatUserId && senderUserId !== currentChatUserId && (_0x1beef1 && socket && (socket[_0x5d0114(0x183)](_0x5d0114(0x14f), {
                'senderId': senderUserId,
                'receiverId': currentChatUserId
            }), _0x1beef1 = ![], setTimeout(() => {
                _0x1beef1 = !![];
            }, 0x5dc)), clearTimeout(_0x2833bc));
        }), socket && socket['on']('typing', ({senderId: _0x2148f5}) => {
            const _0x5821a6 = _0x42063b;
            _0x2148f5 !== senderUserId && currentChatUserId === _0x2148f5 && (updateStatus(_0x5821a6(0xe2)), _0x11028a[_0x5821a6(0x149)][_0x5821a6(0x10d)] !== _0x5821a6(0x17a) && (_0x11028a[_0x5821a6(0x149)][_0x5821a6(0x10d)] = _0x5821a6(0x17a), _0x11028a[_0x5821a6(0x1b4)] = _0x5821a6(0x18c)), clearTimeout(_0x2833bc), _0x2833bc = setTimeout(() => {
                const _0x3cdbe1 = _0x5821a6;
                updateStatus(_0x3cdbe1(0x1b8)), _0x11028a[_0x3cdbe1(0x149)][_0x3cdbe1(0x10d)] = _0x3cdbe1(0x226);
            }, 0xbb8));
        }), document['addEventListener'](_0x42063b(0x142), () => {
            const _0x57a675 = _0x42063b;
            socket && (document[_0x57a675(0x16d)] ? socket[_0x57a675(0x183)](_0x57a675(0x158), { 'senderUserId': senderUserId }) : (senderId = senderUserId, receiverId = currentChatUserId, socket['emit'](_0x57a675(0x187), {
                'senderId': senderId,
                'receiverId': receiverId
            }), socket[_0x57a675(0x183)](_0x57a675(0x13d), { 'senderUserId': senderUserId })));
        }), window['addEventListener'](_0x42063b(0xd0), () => {
            const _0x37fe48 = _0x42063b;
            socket && socket[_0x37fe48(0x183)](_0x37fe48(0x104), { 'senderUserId': senderUserId });
        }), socket['on']('userOnline', ({senderUserId: _0x2bb1ce}) => {
            const _0x4b2a43 = _0x42063b;
            userId = _0x2bb1ce;
            const _0x1875ac = document[_0x4b2a43(0x1e9)](_0x4b2a43(0x178) + userId + '\x27]');
            _0x1875ac ? (_0x1875ac['classList'][_0x4b2a43(0x194)](_0x4b2a43(0x139), _0x4b2a43(0xd5), _0x4b2a43(0xfd)), _0x1875ac[_0x4b2a43(0x1d2)][_0x4b2a43(0x114)](_0x4b2a43(0xfd))) : _0x4b2a43(0x1c1), userElement2 && currentChatUserId === _0x2bb1ce && (userElement2[_0x4b2a43(0x1d2)][_0x4b2a43(0x194)](_0x4b2a43(0x139), _0x4b2a43(0xd5), _0x4b2a43(0xfd)), userElement2[_0x4b2a43(0x1d2)][_0x4b2a43(0x114)](_0x4b2a43(0xfd)), updateStatus(_0x4b2a43(0x1b8)));
        }), socket['on']('userOffline', ({senderUserId: _0x154a8d}) => {
            const _0x45fb4a = _0x42063b;
            updateStatus(_0x45fb4a(0x157)), userId = _0x154a8d;
            const _0x382862 = document[_0x45fb4a(0x1e9)]('[data-user-id=\x27' + userId + '\x27]');
            _0x382862 && (_0x382862['classList']['remove'](_0x45fb4a(0x139), _0x45fb4a(0xd5), _0x45fb4a(0xfd)), _0x382862[_0x45fb4a(0x1d2)]['add']('offline')), userElement2 && currentChatUserId === _0x154a8d && (userElement2[_0x45fb4a(0x1d2)][_0x45fb4a(0x194)]('offline', _0x45fb4a(0xd5), 'online'), userElement2['classList'][_0x45fb4a(0x114)]('offline'), checkUserAvailability(currentChatUserId));
        }), socket['on']('userBusy', ({senderUserId: _0x1ee6ed}) => {
            const _0x451ca9 = _0x42063b;
            userId = _0x1ee6ed;
            const _0x49aa5f = document[_0x451ca9(0x1e9)](_0x451ca9(0x178) + userId + '\x27]');
            _0x49aa5f && (_0x49aa5f[_0x451ca9(0x1d2)][_0x451ca9(0x194)](_0x451ca9(0x139), _0x451ca9(0xd5), _0x451ca9(0xfd)), _0x49aa5f[_0x451ca9(0x1d2)][_0x451ca9(0x114)](_0x451ca9(0xd5))), userElement2 && currentChatUserId === _0x1ee6ed && (userElement2[_0x451ca9(0x1d2)][_0x451ca9(0x194)](_0x451ca9(0x139), _0x451ca9(0xd5), _0x451ca9(0xfd)), userElement2['classList'][_0x451ca9(0x114)](_0x451ca9(0xd5)), updateStatus(_0x451ca9(0x167)));
        }), socket['on'](_0x42063b(0x1fe), _0x38f11d => {
            const _0x10a090 = _0x42063b, {
                    chatId: _0x2c2d74,
                    readerId: _0x4630c2
                } = _0x38f11d;
            currentChatUserId === _0x4630c2 && senderUserId === _0x2c2d74 && (console['log'](_0x10a090(0x1e5) + _0x4630c2 + _0x10a090(0x135) + _0x2c2d74), lol());
        });
    } else
        console['log'](_0x42063b(0x137), socket), console[_0x42063b(0xf7)](_0x42063b(0x222));
    socket['on'](_0x42063b(0xd7), _0x362d58 => {
        const _0x5edcb9 = _0x42063b;
        console[_0x5edcb9(0xf7)](_0x5edcb9(0x12d), _0x362d58), document[_0x5edcb9(0x153)](_0x5edcb9(0x1b7))[_0x5edcb9(0x156)] = _0x5edcb9(0x190), document['getElementById'](_0x5edcb9(0x1b7))[_0x5edcb9(0x1d2)]['remove']('con', 'dis'), document[_0x5edcb9(0x153)](_0x5edcb9(0x1b7))[_0x5edcb9(0x1d2)]['add']('dis');
    }), socket['on'](_0x42063b(0x115), _0x34b4cb => {
        const _0x42436d = _0x42063b;
        console[_0x42436d(0xe7)](_0x42436d(0x10e), _0x34b4cb), document[_0x42436d(0x153)](_0x42436d(0x1b7))[_0x42436d(0x156)] = _0x42436d(0x1e1), document[_0x42436d(0x153)](_0x42436d(0x1b7))['classList'][_0x42436d(0x194)]('con', _0x42436d(0x1d4)), document[_0x42436d(0x153)](_0x42436d(0x1b7))[_0x42436d(0x1d2)][_0x42436d(0x114)](_0x42436d(0x1d4));
    }), socket['on'](_0x42063b(0xfc), _0x3e12ed => {
        const _0x32a3cc = _0x42063b;
        console[_0x32a3cc(0xf7)]('🛜\x20Reconnected\x20to\x20server,\x20attempt\x20#' + _0x3e12ed), document[_0x32a3cc(0x153)](_0x32a3cc(0x1b7))[_0x32a3cc(0x156)] = _0x32a3cc(0xe8) + _0x3e12ed + ')', document[_0x32a3cc(0x153)](_0x32a3cc(0x1b7))[_0x32a3cc(0x1d2)]['remove'](_0x32a3cc(0x15a), _0x32a3cc(0x1d4)), document[_0x32a3cc(0x153)]('socket-status')[_0x32a3cc(0x1d2)][_0x32a3cc(0x114)](_0x32a3cc(0x15a));
    }), socket['on'](_0x42063b(0x174), _0xb67048 => {
        const _0x5defe0 = _0x42063b;
        console[_0x5defe0(0xe7)](_0x5defe0(0x123), _0xb67048), document['getElementById']('socket-status')[_0x5defe0(0x156)] = _0x5defe0(0xf2), document[_0x5defe0(0x153)]('socket-status')[_0x5defe0(0x1d2)][_0x5defe0(0x194)](_0x5defe0(0x15a), _0x5defe0(0x1d4)), document[_0x5defe0(0x153)]('socket-status')[_0x5defe0(0x1d2)]['add'](_0x5defe0(0x1d4));
    });
}
async function toggleBlockUser() {
    const _0x35829a = _0x118374;
    if (!currentChatUserId) {
        showPopupMessage2(_0x35829a(0x1fb));
        return;
    }
    const _0x378091 = blockButton[_0x35829a(0x21f)][_0x35829a(0xd1)] === 'true', _0x49d907 = _0x378091 ? _0x35829a(0xd3) : _0x35829a(0xcb);
    if (!confirm(_0x35829a(0x150) + _0x49d907 + '\x20' + currentChatUsername + '?'))
        return;
    try {
        const _0x4f729e = {
                'blockUserId': currentChatUserId,
                'unblockUserId': currentChatUserId
            }, _0x5b712f = await apiRequest(_0x35829a(0x165) + _0x49d907, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer\x20' + localStorage[_0x35829a(0xee)](_0x35829a(0x10b))
                },
                'body': JSON[_0x35829a(0x13b)](_0x4f729e)
            }), _0x23c427 = await _0x5b712f['json']();
        _0x5b712f['ok'] ? (blockButton[_0x35829a(0x156)] = _0x378091 ? 'Block' : _0x35829a(0x1ac), blockButton[_0x35829a(0x21f)][_0x35829a(0xd1)] = !_0x378091, socket['emit'](_0x35829a(0xf0), { 'currentChatUserId': currentChatUserId }), showPopupMessage(currentChatUsername + _0x35829a(0x19c) + (_0x378091 ? _0x35829a(0x221) : _0x35829a(0xd1)) + '.'), _0x378091 && (recipientUserId = currentChatUserId, socket ? socket[_0x35829a(0x183)](_0x35829a(0x1ab), { 'recipientUserId': recipientUserId }) : console['error'](_0x35829a(0x1ba), recipientUserId))) : showAlert(_0x35829a(0x125), _0x23c427['error'] || _0x35829a(0x1c2));
    } catch (_0x26e2e5) {
        console[_0x35829a(0xe7)](_0x35829a(0x138), _0x26e2e5[_0x35829a(0x166)]);
    }
}
async function markMessagesssssAsRead(_0x5dee9e, _0x4abd3f) {
    const _0x4c22ff = _0x118374;
    try {
        const _0x637db7 = await apiRequest(_0x4c22ff(0x20f), {
                'method': _0x4c22ff(0x14c),
                'headers': {
                    'Content-Type': _0x4c22ff(0x13c),
                    'Authorization': _0x4c22ff(0x1bd) + localStorage[_0x4c22ff(0xee)](_0x4c22ff(0x10b))
                },
                'body': JSON['stringify']({
                    'senderId': senderUserId,
                    'receiverId': currentChatUserId
                })
            }), _0x49385b = await _0x637db7[_0x4c22ff(0x15b)]();
        _0x637db7['ok'] ? (console['log'](_0x4c22ff(0x17d), _0x49385b[_0x4c22ff(0xcf)]), io['to'](_0x5dee9e)[_0x4c22ff(0x183)]('messagesRead', {
            'readerId': readerId,
            'chatId': chatId
        })) : console[_0x4c22ff(0xe7)]('Failed\x20to\x20mark\x20messages\x20as\x20read:', _0x49385b[_0x4c22ff(0xe7)]);
    } catch (_0xab6edc) {
        console[_0x4c22ff(0xe7)](_0x4c22ff(0x192), _0xab6edc);
    }
}
async function updateBlockButton() {
    const _0x570a3e = _0x118374;
    if (!currentChatUserId) {
        showPopupMessage(_0x570a3e(0x1fb));
        return;
    }
    try {
        const _0x1e0a34 = await apiRequest(_0x570a3e(0x200) + currentChatUserId, {
            'method': _0x570a3e(0xe1),
            'headers': { 'Authorization': 'Bearer\x20' + localStorage[_0x570a3e(0xee)](_0x570a3e(0x10b)) }
        });
        if (!_0x1e0a34['ok'])
            throw new Error(_0x570a3e(0x1fc) + _0x1e0a34['status']);
        const _0x3573cb = await _0x1e0a34[_0x570a3e(0x15b)]();
        if (typeof _0x3573cb[_0x570a3e(0x217)] === _0x570a3e(0x1a3))
            throw new Error(_0x570a3e(0x15d));
        blockButton['textContent'] = _0x3573cb[_0x570a3e(0x217)] ? _0x570a3e(0x1ac) : _0x570a3e(0x109), blockButton['dataset']['blocked'] = _0x3573cb[_0x570a3e(0x217)][_0x570a3e(0x11f)]();
    } catch (_0x107e4b) {
        console[_0x570a3e(0xe7)]('Error\x20checking\x20block\x20status:', _0x107e4b), blockButton[_0x570a3e(0x149)][_0x570a3e(0x10d)] = _0x570a3e(0x226);
    }
}
function toggleDropdown() {
    const _0x11a0c2 = _0x118374, _0x4a949e = document[_0x11a0c2(0x153)](_0x11a0c2(0x211));
    _0x4a949e['classList'][_0x11a0c2(0x163)](_0x11a0c2(0x1a5)) ? (_0x4a949e['classList'][_0x11a0c2(0x194)](_0x11a0c2(0x1a5)), setTimeout(() => _0x4a949e[_0x11a0c2(0x149)][_0x11a0c2(0x10d)] = 'none', 0xc8)) : (_0x4a949e[_0x11a0c2(0x149)][_0x11a0c2(0x10d)] = _0x11a0c2(0x1bf), setTimeout(() => _0x4a949e['classList'][_0x11a0c2(0x114)]('show'), 0xa));
}
document['addEventListener'](_0x118374(0xdf), function (_0x55043d) {
    const _0x1c7714 = _0x118374, _0x3606c1 = document[_0x1c7714(0x153)](_0x1c7714(0x211)), _0x55975b = document[_0x1c7714(0x153)](_0x1c7714(0x12b));
    !_0x55975b[_0x1c7714(0x163)](_0x55043d['target']) && !_0x3606c1[_0x1c7714(0x163)](_0x55043d['target']) && (_0x3606c1[_0x1c7714(0x1d2)][_0x1c7714(0x194)]('show'), setTimeout(() => _0x3606c1['style'][_0x1c7714(0x10d)] = 'none', 0xc8));
}), document['getElementById'](_0x118374(0x211))[_0x118374(0xea)](_0x118374(0xdf), function (_0x4304ff) {
    const _0x6ad479 = _0x118374, _0x88b2f4 = document[_0x6ad479(0x153)](_0x6ad479(0x211));
    _0x4304ff[_0x6ad479(0x1dd)][_0x6ad479(0x208)]('.dropdown-item') && (_0x88b2f4[_0x6ad479(0x1d2)][_0x6ad479(0x194)](_0x6ad479(0x1a5)), setTimeout(() => _0x88b2f4[_0x6ad479(0x149)][_0x6ad479(0x10d)] = _0x6ad479(0x226), 0xc8));
});
async function checkUserAvailability(_0x268148) {
    const _0x4c88cb = _0x118374;
    try {
        const _0x4137d3 = await apiRequest(_0x4c88cb(0x1b1) + _0x268148, {
            'method': _0x4c88cb(0xe1),
            'headers': { 'Authorization': _0x4c88cb(0x1bd) + localStorage['getItem'](_0x4c88cb(0x10b)) }
        });
        if (!_0x4137d3['ok'])
            throw new Error('User\x20not\x20found\x20or\x20server\x20error');
        const _0x254dbb = await _0x4137d3['json']();
        _0x254dbb[_0x4c88cb(0x113)] ? (updateStatus(_0x4c88cb(0x1b8)), chatUserElement[_0x4c88cb(0x1d2)][_0x4c88cb(0x114)]('online'), chatUserElement[_0x4c88cb(0x1d2)][_0x4c88cb(0x194)]('offline')) : (chatUserElement[_0x4c88cb(0x1d2)][_0x4c88cb(0x114)](_0x4c88cb(0x139)), chatUserElement['classList'][_0x4c88cb(0x194)](_0x4c88cb(0xfd)));
        if (lastActiveElement) {
            if (chatUserElement[_0x4c88cb(0x1d2)]['contains'](_0x4c88cb(0x139))) {
                const _0x179a15 = new Date(_0x254dbb[_0x4c88cb(0x185)]), _0x1e283a = new Date(), _0x2368cb = _0x179a15[_0x4c88cb(0x15c)](_0x4c88cb(0x111), {
                        'hour': _0x4c88cb(0x110),
                        'minute': '2-digit',
                        'hour12': !![]
                    }), _0x36c498 = new Intl[(_0x4c88cb(0x124))]([], {
                        'year': 'numeric',
                        'month': _0x4c88cb(0x110),
                        'day': _0x4c88cb(0x110)
                    }), _0x4e4f61 = _0x179a15[_0x4c88cb(0x1c4)]() === _0x1e283a[_0x4c88cb(0x1c4)](), _0x24b050 = _0x179a15[_0x4c88cb(0x164)]() === _0x1e283a[_0x4c88cb(0x164)]() - 0x1 && _0x179a15[_0x4c88cb(0x18d)]() === _0x1e283a[_0x4c88cb(0x18d)]() && _0x179a15['getFullYear']() === _0x1e283a[_0x4c88cb(0x13f)]();
                let _0x268d92;
                if (_0x4e4f61)
                    _0x268d92 = 'Last\x20Seen:\x20' + _0x2368cb;
                else
                    _0x24b050 ? _0x268d92 = 'Last\x20Seen:\x20Yesterday,\x20' + _0x2368cb : _0x268d92 = 'Last\x20Seen:\x20' + _0x36c498[_0x4c88cb(0x21c)](_0x179a15) + '\x20' + _0x2368cb;
                lastActiveElement['textContent'] = _0x268d92;
            }
        }
    } catch (_0x46a9c1) {
        console[_0x4c88cb(0xe7)](_0x4c88cb(0x1c0), _0x46a9c1);
    }
}
function updateStatus(_0x13eed6) {
    const _0x540ada = _0x118374;
    lastActiveElement[_0x540ada(0x149)]['transition'] = _0x540ada(0x17f), lastActiveElement[_0x540ada(0x149)]['opacity'] = '0', setTimeout(() => {
        const _0x426c27 = _0x540ada;
        if (_0x13eed6 === _0x426c27(0x1b8))
            lastActiveElement[_0x426c27(0x156)] = 'Online', lastActiveElement[_0x426c27(0x149)][_0x426c27(0x1d8)] = 'green', lastActiveElement['style'][_0x426c27(0x14b)] = _0x426c27(0xfa);
        else {
            if (_0x13eed6 === _0x426c27(0x167))
                lastActiveElement[_0x426c27(0x156)] = _0x426c27(0x212), lastActiveElement[_0x426c27(0x149)][_0x426c27(0x1d8)] = _0x426c27(0xf1), lastActiveElement[_0x426c27(0x149)][_0x426c27(0x14b)] = _0x426c27(0x188);
            else {
                if (_0x13eed6 === _0x426c27(0x157))
                    lastActiveElement[_0x426c27(0x156)] = _0x426c27(0x157), lastActiveElement[_0x426c27(0x149)][_0x426c27(0x1d8)] = _0x426c27(0x1bb), lastActiveElement[_0x426c27(0x149)][_0x426c27(0x14b)] = _0x426c27(0x188);
                else
                    _0x13eed6 === _0x426c27(0xe2) && (lastActiveElement[_0x426c27(0x156)] = 'User\x20is\x20Typing\x20.\x20.\x20.', lastActiveElement['style'][_0x426c27(0x1d8)] = '#DD86FF', lastActiveElement['style'][_0x426c27(0x14b)] = _0x426c27(0x188));
            }
        }
        lastActiveElement[_0x426c27(0x149)][_0x426c27(0x1b3)] = '1';
    }, 0x12c);
}
function lol() {
    const _0x22bb0f = _0x118374;
    document['querySelectorAll'](_0x22bb0f(0x189))[_0x22bb0f(0x1cc)](_0x221af2 => {
        const _0x28a737 = _0x22bb0f;
        _0x221af2[_0x28a737(0x156)] === '✔' && (_0x221af2[_0x28a737(0x156)] = '✔✔');
    });
}
function setViewportHeight() {
    const _0x468c15 = _0x118374;
    document[_0x468c15(0x13e)][_0x468c15(0x149)][_0x468c15(0x168)](_0x468c15(0x1cd), window['innerHeight'] * 0.01 + 'px');
}
window[_0x118374(0xea)](_0x118374(0x199), setViewportHeight), setViewportHeight();
function showChatPanel() {
    const _0x4e32ac = _0x118374;
    document[_0x4e32ac(0x1e9)](_0x4e32ac(0x128))[_0x4e32ac(0x1d2)]['add'](_0x4e32ac(0xde));
}
function showUserListPanel() {
    const _0x25d3e1 = _0x118374;
    document[_0x25d3e1(0x1e9)]('.chat-container')[_0x25d3e1(0x1d2)]['remove'](_0x25d3e1(0xde));
}
document[_0x118374(0x1e9)](_0x118374(0xda))[_0x118374(0xea)](_0x118374(0xdf), _0x14ba2d => {
    const _0x41f677 = _0x118374;
    window[_0x41f677(0x1f4)] <= 0x300 && showChatPanel();
}), document[_0x118374(0x1e9)](_0x118374(0x16b))[_0x118374(0xea)](_0x118374(0xdf), _0x563468 => {
    const _0x2e3866 = _0x118374;
    window[_0x2e3866(0x1f4)] <= 0x300 && showUserListPanel();
});
const savedImage = localStorage[_0x118374(0xee)](_0x118374(0x173));
document['getElementById'](_0x118374(0x130))[_0x118374(0x17e)] = savedImage || _0x118374(0x121);
function showNotification(_0x4a8793) {
    const _0x2c402e = _0x118374, _0x44050c = document[_0x2c402e(0x20e)](_0x2c402e(0x1df));
    _0x44050c[_0x2c402e(0x156)] = _0x4a8793, _0x44050c[_0x2c402e(0x149)][_0x2c402e(0x116)] = _0x2c402e(0x224), document[_0x2c402e(0x1ce)]['appendChild'](_0x44050c), setTimeout(() => _0x44050c[_0x2c402e(0x194)](), 0xbb8);
}
async function generateKey() {
    const _0x25d7f9 = _0x118374;
    if (sessionStorage['getItem']('encryptionKey'))
        return;
    const _0x55290e = await crypto[_0x25d7f9(0x198)][_0x25d7f9(0x1f8)]({
            'name': _0x25d7f9(0x1f9),
            'length': 0x100
        }, !![], [
            _0x25d7f9(0x1ee),
            'decrypt'
        ]), _0x104410 = new Uint8Array(await crypto[_0x25d7f9(0x198)][_0x25d7f9(0x103)](_0x25d7f9(0x1a2), _0x55290e));
    sessionStorage[_0x25d7f9(0x1a1)](_0x25d7f9(0xe9), JSON[_0x25d7f9(0x13b)](Array['from'](_0x104410)));
}
generateKey();
async function getKey() {
    const _0x559f2c = _0x118374, _0x303cd7 = JSON[_0x559f2c(0x140)](sessionStorage[_0x559f2c(0xee)](_0x559f2c(0xe9))), _0x35c6e8 = new Uint8Array(_0x303cd7);
    return await crypto[_0x559f2c(0x198)][_0x559f2c(0x176)](_0x559f2c(0x1a2), _0x35c6e8, { 'name': _0x559f2c(0x1f9) }, !![], [
        _0x559f2c(0x1ee),
        'decrypt'
    ]);
}
async function encryptMessage(_0x4ff4ab) {
    const _0x58d775 = _0x118374, _0x32620a = await getKey(), _0x6a6f1a = crypto[_0x58d775(0x21a)](new Uint8Array(0xc)), _0x3e5b1e = new TextEncoder()[_0x58d775(0x12c)](_0x4ff4ab), _0x121264 = await crypto[_0x58d775(0x198)]['encrypt']({
            'name': 'AES-GCM',
            'iv': _0x6a6f1a
        }, _0x32620a, _0x3e5b1e);
    return JSON[_0x58d775(0x13b)]({
        'iv': Array[_0x58d775(0x1cb)](_0x6a6f1a),
        'data': Array['from'](new Uint8Array(_0x121264))
    });
}
async function decryptMessage(_0x1f8b5f) {
    const _0x4c334c = _0x118374;
    try {
        const _0x2d4639 = await getKey(), _0x129e3b = JSON[_0x4c334c(0x140)](_0x1f8b5f), _0x389f99 = new Uint8Array(_0x129e3b['iv']), _0x3d0892 = new Uint8Array(_0x129e3b[_0x4c334c(0x1ea)]), _0x194759 = await crypto['subtle'][_0x4c334c(0x21e)]({
                'name': _0x4c334c(0x1f9),
                'iv': _0x389f99
            }, _0x2d4639, _0x3d0892);
        return new TextDecoder()[_0x4c334c(0xd2)](_0x194759);
    } catch (_0x4e6b1b) {
        return console[_0x4c334c(0xe7)](_0x4c334c(0x1fd), _0x4e6b1b), null;
    }
}
async function loadChatCache() {
    const _0xac7ba5 = _0x118374;
    showNotification(_0xac7ba5(0x126));
    let _0x2c6de7 = ![];
    for (let _0x5d9c77 = 0x0; _0x5d9c77 < localStorage[_0xac7ba5(0x1be)]; _0x5d9c77++) {
        const _0x527a80 = localStorage[_0xac7ba5(0xc8)](_0x5d9c77);
        if (_0x527a80[_0xac7ba5(0xe0)](_0xac7ba5(0x16c))) {
            const _0x61f8a9 = _0x527a80['split']('_')[0x1], _0x1693ab = localStorage[_0xac7ba5(0xee)](_0x527a80);
            if (_0x1693ab)
                try {
                    const _0xc5ffc5 = await Promise['all'](JSON['parse'](_0x1693ab)[_0xac7ba5(0x144)](async _0x179a63 => {
                        const _0x4695e1 = _0xac7ba5, _0x268295 = await decryptMessage(_0x179a63);
                        if (_0x268295 === null)
                            throw new Error(_0x4695e1(0x210));
                        return JSON[_0x4695e1(0x140)](_0x268295);
                    }));
                    chatCache[_0xac7ba5(0x1b9)](_0x61f8a9, _0xc5ffc5);
                } catch (_0x514bae) {
                    console[_0xac7ba5(0xe7)](_0xac7ba5(0x1e0) + _0x61f8a9 + ':', _0x514bae), localStorage[_0xac7ba5(0x10a)](_0x527a80), console[_0xac7ba5(0x1e4)](_0xac7ba5(0x19d) + _0x61f8a9), _0x2c6de7 = !![];
                }
        }
    }
    _0x2c6de7 ? showNotification('⚠️\x20Some\x20chats\x20failed\x20to\x20load\x20due\x20to\x20decryption\x20errors.') : showNotification(_0xac7ba5(0x18e));
}
window['addEventListener'](_0x118374(0x1a0), loadChatCache), document[_0x118374(0xea)]('DOMContentLoaded', () => {
    const _0x4a36f7 = _0x118374, _0x22ea17 = document[_0x4a36f7(0x153)](_0x4a36f7(0x191)), _0x44f653 = document[_0x4a36f7(0x153)](_0x4a36f7(0x1da)), _0x5b7845 = document[_0x4a36f7(0x153)]('emoji-picker'), _0xa551a2 = new EmojiMart[(_0x4a36f7(0x155))]({
            'onEmojiSelect': _0x46a04f => {
                const _0x127382 = _0x4a36f7;
                _0x44f653['value'] += _0x46a04f[_0x127382(0x1d0)];
            },
            'theme': _0x4a36f7(0x1e6)
        });
    _0x5b7845[_0x4a36f7(0x1ed)](_0xa551a2), _0x22ea17['addEventListener'](_0x4a36f7(0xdf), () => {
        const _0x489d28 = _0x4a36f7;
        _0x5b7845['classList'][_0x489d28(0x14e)]('hidden');
    }), document[_0x4a36f7(0xea)]('click', _0x3eef5b => {
        const _0x44ec59 = _0x4a36f7;
        !_0x5b7845[_0x44ec59(0x163)](_0x3eef5b[_0x44ec59(0x1dd)]) && _0x3eef5b[_0x44ec59(0x1dd)] !== _0x22ea17 && _0x5b7845[_0x44ec59(0x1d2)][_0x44ec59(0x114)](_0x44ec59(0x16d));
    });
}), document[_0x118374(0x153)](_0x118374(0x132))[_0x118374(0x20b)] = function () {
    const _0x2b51a7 = _0x118374;
    document[_0x2b51a7(0x153)]('wallpaperModal')['style']['display'] = 'block';
};
function closeModal() {
    const _0x3da49c = _0x118374;
    document[_0x3da49c(0x153)](_0x3da49c(0x1e7))[_0x3da49c(0x149)][_0x3da49c(0x10d)] = 'none';
}
function setChatBackground(_0x1d23c6) {
    const _0x25f1e6 = _0x118374, _0x271227 = document[_0x25f1e6(0x1e9)](_0x25f1e6(0x21d));
    _0x271227[_0x25f1e6(0x149)]['background'] = _0x1d23c6, _0x271227[_0x25f1e6(0x149)][_0x25f1e6(0x13a)] = _0x25f1e6(0x201), _0x271227[_0x25f1e6(0x149)][_0x25f1e6(0x102)] = _0x25f1e6(0x1e8), localStorage[_0x25f1e6(0x1a1)]('chatWallpaper', _0x1d23c6), closeModal();
}
function resetChatBackground() {
    const _0x84008d = _0x118374;
    document['querySelector'](_0x84008d(0x21d))[_0x84008d(0x149)][_0x84008d(0xed)] = '', localStorage[_0x84008d(0x10a)](_0x84008d(0x145)), closeModal();
}
window[_0x118374(0x213)] = function () {
    const _0x5b205d = _0x118374;
    let _0x59dcef = localStorage[_0x5b205d(0xee)]('chatWallpaper');
    if (_0x59dcef) {
        let _0x2e8393 = document[_0x5b205d(0x1e9)]('.chat-window');
        _0x2e8393[_0x5b205d(0x149)]['backgroundImage'] = _0x59dcef, _0x2e8393[_0x5b205d(0x149)]['backgroundSize'] = 'cover', _0x2e8393['style']['backgroundPosition'] = 'center';
    }
}, document[_0x118374(0xea)](_0x118374(0x17c), function () {
    const _0x21285d = _0x118374, _0x202255 = document['getElementById'](_0x21285d(0x1f6)), _0x4032c5 = document[_0x21285d(0x153)](_0x21285d(0x1f1)), _0x1510f0 = document[_0x21285d(0x153)]('blur-slider'), _0x3ec30b = document[_0x21285d(0x153)](_0x21285d(0x193)), _0xe8bef8 = document['getElementById']('close-blur-slider');
    let _0x51fef3 = localStorage[_0x21285d(0xee)](_0x21285d(0x151)) || 0x5;
    document['documentElement'][_0x21285d(0x149)][_0x21285d(0x168)](_0x21285d(0x1a6), _0x51fef3 + 'px'), _0x1510f0[_0x21285d(0x1ad)] = _0x51fef3, _0x3ec30b[_0x21285d(0x156)] = _0x51fef3, _0x202255[_0x21285d(0xea)](_0x21285d(0xdf), function () {
        const _0x1f516b = _0x21285d;
        _0x4032c5[_0x1f516b(0x149)][_0x1f516b(0x10d)] = _0x1f516b(0x1bf);
    }), _0x1510f0[_0x21285d(0xea)]('input', function () {
        const _0x2cdf3a = _0x21285d;
        document[_0x2cdf3a(0x13e)][_0x2cdf3a(0x149)]['setProperty'](_0x2cdf3a(0x1a6), this[_0x2cdf3a(0x1ad)] + 'px'), _0x3ec30b['textContent'] = this[_0x2cdf3a(0x1ad)], localStorage[_0x2cdf3a(0x1a1)](_0x2cdf3a(0x151), this[_0x2cdf3a(0x1ad)]);
    }), _0xe8bef8['addEventListener'](_0x21285d(0xdf), function () {
        const _0x261617 = _0x21285d;
        _0x4032c5[_0x261617(0x149)]['display'] = 'none';
    });
});
function clearChatCacheCnf(_0x3c5a85, _0x40bc46) {
    const _0x1a8b57 = _0x118374;
    if (!confirm(_0x1a8b57(0x1ef) + currentChatUsername + '?'))
        return;
    clearChatCache(_0x3c5a85, _0x40bc46);
}
function clearChatCache(_0x22a605, _0x35511e) {
    const _0x50bf96 = _0x118374;
    chatCache[_0x50bf96(0x18f)](_0x22a605) && chatCache[_0x50bf96(0xf6)](_0x22a605);
    const _0x3750e9 = _0x50bf96(0x16c) + _0x22a605;
    localStorage['getItem'](_0x3750e9) && localStorage['removeItem'](_0x3750e9);
    const _0x4a5a56 = document[_0x50bf96(0x153)](_0x50bf96(0x1a4));
    currentChatUsername === _0x35511e && (_0x4a5a56[_0x50bf96(0x149)][_0x50bf96(0x1b2)] = 'opacity\x200.4s\x20ease-out,\x20transform\x200.4s\x20ease-out', _0x4a5a56[_0x50bf96(0x149)][_0x50bf96(0x1b3)] = '0', _0x4a5a56['style'][_0x50bf96(0xdb)] = _0x50bf96(0x18b), setTimeout(() => {
        const _0x44ca64 = _0x50bf96;
        _0x4a5a56[_0x44ca64(0x1b4)] = '', _0x4a5a56[_0x44ca64(0x149)]['opacity'] = '1', _0x4a5a56[_0x44ca64(0x149)][_0x44ca64(0xdb)] = 'translateY(0)';
    }, 0x190)), showPopupMessage(_0x50bf96(0x1ca) + _0x35511e);
}
async function deleteChatHistory(_0x3f9814) {
    const _0x22dbd7 = _0x118374;
    if (!_0x3f9814) {
        showPopupMessage2('Chat\x20user\x20ID\x20is\x20undefined.\x20Cannot\x20delete\x20chat\x20history.');
        return;
    }
    const _0x28b84e = confirm(_0x22dbd7(0x161));
    if (!_0x28b84e)
        return;
    try {
        showPopupMessage2('Deleting\x20Chat\x20History,\x20Please\x20Wait...', 0x2710, 'orange');
        const _0x296ba2 = await apiRequest(_0x22dbd7(0x1d3) + senderUserId + '/' + _0x3f9814, {
                'method': _0x22dbd7(0x147),
                'headers': {
                    'Content-Type': _0x22dbd7(0x13c),
                    'Authorization': _0x22dbd7(0x1bd) + localStorage[_0x22dbd7(0xee)](_0x22dbd7(0x10b))
                }
            }), _0x43faad = await _0x296ba2['json']();
        if (_0x296ba2['ok']) {
            console[_0x22dbd7(0xf7)](_0x22dbd7(0x129), _0x43faad), showPopupMessage2(_0x22dbd7(0x1aa), 0xbb8, _0x22dbd7(0x1c8));
            let _0x409914 = JSON[_0x22dbd7(0x140)](localStorage[_0x22dbd7(0xee)](_0x22dbd7(0x205))) || [];
            _0x409914 = _0x409914[_0x22dbd7(0x206)](_0x2e5823 => _0x2e5823[_0x22dbd7(0xfe)] !== _0x3f9814), localStorage[_0x22dbd7(0x1a1)](_0x22dbd7(0x205), JSON[_0x22dbd7(0x13b)](_0x409914)), clearChatCache(currentChatUserId, currentChatUsername);
            const _0x136cc0 = document['getElementById'](_0x22dbd7(0x1a4));
            loadChatList(), socket[_0x22dbd7(0x183)](_0x22dbd7(0xff), {
                'senderUsername': senderUsername,
                'chatUserId': _0x3f9814
            });
        } else
            console[_0x22dbd7(0xe7)](_0x22dbd7(0x11a), _0x43faad[_0x22dbd7(0xe7)]), alert(_0x22dbd7(0x100) + _0x43faad[_0x22dbd7(0xe7)]);
    } catch (_0x3b5ccd) {
        showPopupMessage2('Failed\x20to\x20delete\x20chat\x20history.\x20Please\x20try\x20again.', 0x1388), console[_0x22dbd7(0xe7)](_0x22dbd7(0xdd), _0x3b5ccd);
    }
}
socket['on'](_0x118374(0x223), ({
    senderUserId: _0x150aa9,
    senderUsername: _0x2d472f
}) => {
    const _0x1bae8c = _0x118374;
    clearChatCache(_0x150aa9, _0x2d472f), console[_0x1bae8c(0xf7)]('Chat\x20history\x20with\x20' + _0x150aa9 + '\x20has\x20been\x20deleted\x20by\x20the\x20other\x20user.'), showPopupMessage2(_0x1bae8c(0xe5) + _0x2d472f + _0x1bae8c(0x1d5), 0x1388);
}), intializeSocket(), socket['on']('error', _0xfd5ee0 => {
    const _0x3d0bec = _0x118374;
    console['error'](_0x3d0bec(0x1ae), _0xfd5ee0), showAlert('Socket\x20Error!', _0xfd5ee0[_0x3d0bec(0x166)] || _0x3d0bec(0x175));
});