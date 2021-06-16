const URL_Token = 'https://trackapi.thailandpost.co.th/post/api/v1/authenticate/token'
const URL_Items = 'https://trackapi.thailandpost.co.th/post/api/v1/track'
const My_Token = 'R&YJOLB%TwQiDRU9DQReVzY:Q6E#CRShNaO^DoI.A;MNIvOyT3U3BAWlO#YIHJG?OSZ*OWN~RBG?LRVSIHJ$BFD6G:O*BXJ0GDXR'
var Token = ''

describe('TrackThailandPost-Request', () => {
    it('Got Token', () => {
        cy.request({
            method: 'post',
            url: URL_Token,
            headers: {
                'Authorization' : `Token ${My_Token}`,
                'Content-Type' : 'application/json'
            }
        }).then( (response) => {
            cy.log(response.body)
            Token = response.body.token
        })
    })
    it('Get item', () => {
        cy.request({
            method: 'post',
            url: URL_Items,
            headers: {
                'Authorization' : `Token ${Token}`,
                'Content-Type' : 'application/json'
            },
            body: {
                "status": "all",
                "language": "TH",
                "barcode": [
                    "EG468732680TH"
               ]
             }
        }).then( (response) => {
            cy.log(response.body.response)
            cy.log(response.body.response.items)
        })
    })
})
