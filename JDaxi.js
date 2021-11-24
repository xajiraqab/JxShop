const axios = require('axios');
const JDaxi = {
    token: "eyJCdXNpbmVzc1VpZCI6MiwiQ29tcGFueUJ1c2luZXNzSWQiOiIyMDYzMjIxMDIiLCJEYXhpVWlkIjoiQS0zMCIsIkRiTmFtZSI6IkRBWElFTlRFUlBSSVNFLmZkYiIsIkhhc2giOiIyNzI3MEYxMTNERUFFMzAyNzAyOEJBRTUxRTk5QzJCNCIsIlByb2dyYW1UeXBlIjoyMywiVGltZVN0YW1wIjoiMTYtMTEtMjAyMSAxNDoxODo0OSIsIlVzZXJOYW1lIjoiamF4IiwiVXNlclVpZCI6OH0=",
    server: "http://daxi.ge:8304",


    //პროდუქტის კატეგორიების სიის მიღება
    getListProducts: (callback) => {
        JDaxi.post("GetProductList", {need_images: 0}, callback)
    },


    //პროდუქტის კატეგორიების სიის მიღება სურათებთან ერთად
    getListProductsWithImages: (callback) => {

    },


    //პროდუქტების სურათების სიის მიღება
    getListProductImages: (data, callback) => {
        JDaxi.post("GetProductImagesList", data, callback)
    },


    //პროდუქტის კატეგორიების სიის მიღება
    getListCategories: (callback) => {
        JDaxi.post("GetCategoryList", {}, callback)
    },


    //პროდუქტების დასახელების და აღწერის თარგმანის მიღება
    getListProductTranslation: () => {
        
    },


    //შეკვეთის გატარება
    createSellInvoice: (data, callback) => {
        JDaxi.post("CreateSellInvoice", data, callback)
    },


    //პროდუქტზე სურათების მიმაგრება
    saveProductImages: (callback) => {

    },


    //პროდუქტზე სურათების წაშლა
    removeProductImages: (callback) => {

    },


    //პროდუქტის ლინკების შენახვა
    saveProductUrl: (callback) => {

    },








    post: async (action, params, callback) => {

        let request = `
        <?xml version="1.0" encoding="UTF-8"?>
            <SOAP-ENV:Envelope
                xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
                xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                xmlns:ns="urn:DaxiService">
            <SOAP-ENV:Body>
            <ns:WebApi>
                <auth-info>
                    {
                    "Token": "${JDaxi.token}",
                    "PostTimeStamp" : "${(new Date()).toJSON()}"
                    }
                </auth-info>
                <request-json>
                    {
                    "action": "${action}",
                    "params": ${JSON.stringify(params)}
                    }
                </request-json>
            </ns:WebApi>
            </SOAP-ENV:Body>
        </SOAP-ENV:Envelope>`


        try {
            let response = await axios.post(`${JDaxi.server}/index.exe`, request)
            callback(JSON.parse(response.data.substring(response.data.indexOf("<out-json>") + 10, response.data.lastIndexOf("</out-json>"))))
            // if (response.status === "ERROR") {
            //    res.send(response.error_message);
            //    return
            // }
   
           
            // res.send(`<script>console.log(${JSON.stringify(response.product_list)})</script>`);
   
         } catch (error) {
            console.log(error)
            callback("unknown error")
         }

   
    },
}












module.exports = JDaxi


 