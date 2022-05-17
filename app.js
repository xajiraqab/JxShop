var express = require('express');
var app = express();
const cors = require('cors')
var JDaxi = require("./JDaxi");
const path = require('path');
const fs = require("fs")

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./jshop/images'))
app.use(express.static('./jshop'))

const productsPerPage = 15

let _catchProducts = null
let _catchCategoryes = null



const syncData = () => {
   //კატეგორიების ჩამოტვირთვა
   JDaxi.getListCategories((data) => {

      if (data === "unknown error" || data.status === "ERROR") {
         data = tempStore.categories
      }
      _catchCategoryes = data.category_list
   })

   //პროდუქტების ჩამოტვირთვა
   JDaxi.getListProducts((data) => {

      if (data === "unknown error" || data.status === "error" || !data.product_list)
         data = tempStore.products

      _catchProducts = data.product_list
   })
}
syncData()


const tempStore = {

   products: { "product_list": [{ "BrandName": "", "CategoryUid": 44, "Price": 1.5, "ProductCode": "0740807545075", "ProductName": "კოკა კოლა 0,5ლ", "Stock": 33, "Uid": 9, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 4, "Price": 1.5, "ProductCode": "7236246707165", "ProductName": "კოკა კოლა ზერო 0,5ლ", "Stock": 26, "Uid": 10, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "", }, { "BrandName": "", "CategoryUid": 45, "Price": 1.5, "ProductCode": "9708811939090", "ProductName": "ფანტა 0,5ლ", "Stock": 39, "Uid": 11, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 45, "Price": 1.5, "ProductCode": "7084286649620", "ProductName": "ფანტა ტროპიკი 0,5ლ", "Stock": 36, "Uid": 12, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 5, "Price": 6.5, "ProductCode": "9213458767987", "ProductName": "სიგარეტი ვინსტორნი კლასიკი", "Stock": 34, "Uid": 13, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 5, "Price": 6.5, "ProductCode": "3369807032537", "ProductName": "სიგარეტი ვინსტორნი ბლუ", "Stock": 17, "Uid": 14, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 5, "Price": 6.5, "ProductCode": "5306901697642", "ProductName": "სიგარეტი კენტი კლასიკი", "Stock": 7, "Uid": 15, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "", }, { "BrandName": "", "CategoryUid": 5, "Price": 6.5, "ProductCode": "0734018131714", "ProductName": "სიგარეტი კენტი ბლუ", "Stock": 34, "Uid": 16, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 6, "Price": 5.5, "ProductCode": "2001", "ProductName": "ორცხობილა იუბილენოე 5კგ", "Stock": 3.3, "Uid": 17, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 6, "Price": 7.5, "ProductCode": "2002", "ProductName": "კარამელი როშენის", "Stock": 2, "Uid": 18, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 6, "Price": 13, "ProductCode": "2003", "ProductName": "შოკოლადი როშენის", "Stock": 5, "Uid": 19, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 7, "Price": 2.7, "ProductCode": "1029135242788", "ProductName": "შოკოლადი ალპენ გოლდი თხილის 150გრ", "Stock": 10, "Uid": 20, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 7, "Price": 2.7, "ProductCode": "3130056243742", "ProductName": "შოკოლადი ალპენ გოლდი ნუშის 150გრ", "Stock": 10, "Uid": 21, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 7, "Price": 2.7, "ProductCode": "0096684792195", "ProductName": "შოკოლადი ალპენ გოლდი რძიანი 150გრ", "Stock": 9, "Uid": 22, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 8, "Price": 10, "ProductCode": "5588470949777", "ProductName": "სარეცხი ფხვნილი სავექსი ფერადი 9კგ", "Stock": 20, "Uid": 23, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 8, "Price": 3.5, "ProductCode": "0146602962091", "ProductName": "სარეცხი ფხვნილი სავექსი თეთრი 9კგ", "Stock": 30, "Uid": 24, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 6, "Price": 2.5, "ProductCode": "2004", "ProductName": "შაქარი", "Stock": 40, "Uid": 25, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 6, "Price": 5, "ProductCode": "2005", "ProductName": "ფქვილი", "Stock": 50, "Uid": 26, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 27, "Price": 1.5, "ProductCode": "7885262729295", "ProductName": "ჩიფსი ლეისი ყველით 150გრ", "Stock": 47, "Uid": 28, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 27, "Price": 1.5, "ProductCode": "7851762468958", "ProductName": "ჩიფსი ლეისი ბეკონის 150 გრ", "Stock": 41, "Uid": 29, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 27, "Price": 1.5, "ProductCode": "3690814363032", "ProductName": "ჩიფსი ლეისი პიცის 150 გრ", "Stock": 45, "Uid": 30, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 2, "Price": 5, "ProductCode": "1212", "ProductName": "ყავა ამერიკანო", "Stock": 70, "Uid": 31, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 2, "Price": 20, "ProductCode": "4715654732318", "ProductName": "ყავა ასაწონი", "Stock": 80, "Uid": 32, "UnitName": "კგ", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'MS Shell Dlg 2'; font-size:8.25pt;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }, { "BrandName": "", "CategoryUid": 2, "Price": 1.3, "ProductCode": "7678011848626", "ProductName": "დაჭრილი პური", "Stock": 11, "Uid": 38, "UnitName": "ცალი", "WebDescription": " &lt;p style=\"-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;\"&gt;&lt;br /&gt;&lt;/p&gt;", "WebSeo": "" }], "status": "OK" },
   categories: { "category_list": [{ "CategoryName": "(...)", "ParentUid": -1, "Uid": 1 }, { "CategoryName": "(სხვადასხვა)", "ParentUid": 1, "Uid": 2 }, { "CategoryName": "ცივი სასმელები", "ParentUid": 1, "Uid": 4 }, { "CategoryName": "ფანტები", "ParentUid": 4, "Uid": 45 }, { "CategoryName": "კოკაკოლები", "ParentUid": 4, "Uid": 44 }, { "CategoryName": "სიგარეტები", "ParentUid": 1, "Uid": 5 }, { "CategoryName": "ასაწონი", "ParentUid": 1, "Uid": 6 }, { "CategoryName": "ჩიფსები", "ParentUid": 1, "Uid": 27 }, { "CategoryName": "ტკბილეული", "ParentUid": 1, "Uid": 7 }, { "CategoryName": "ქიმია", "ParentUid": 1, "Uid": 8 }], "status": "OK" },

}


const dir = "jshop/images"

const hasImage = uid => {
   try {
      if (fs.existsSync(dir + `/${uid}.jpg`)) {
         return true
      }
   } catch (err) {
      console.error(err)
      return false
   }
}

let listCheckedUids = []
const isChild = (parent_uid, child_uid) => {

   if (parent_uid === child_uid) {
      return true
   }

   listCheckedUids.push(parent_uid)

   const length = _catchCategoryes.length
   for (let i = 0; i < length; i++) {

      if (listCheckedUids.includes(_catchCategoryes[i].Uid) || _catchCategoryes[i].ParentUid !== parent_uid)
         continue;

      if (isChild(_catchCategoryes[i].Uid, child_uid))
         return true
   }

   return false
}


app.get('/api/search/:filter', (req, res) => {
   res.send(_catchProducts.filter(p => p.ProductName.includes(req.params.filter)).slice(0, 4).map(product => {

      if (hasImage(product.Uid)) {
         product.mainImage = `${product.Uid}.jpg`
      }
      return product
   }))
})

app.get('/api/products/:page/:categoryUid', (req, res) => {

   const categoryUid = parseInt(req.params.categoryUid) || 1
   const page = parseInt(req.params.page ? req.params.page : 1)
   const first = (page - 1) * productsPerPage
   const last = first + productsPerPage


   const sendProducts = (list) => {

      listCheckedUids = []
      list = list.filter(p => {
         listCheckedUids = []
         return isChild(categoryUid, p.CategoryUid)
      })

      const length = list.length

      let listProducts = list.slice(first, last)

      listProducts.map(product => {

         if (hasImage(product.Uid)) {
            product.mainImage = `${product.Uid}.jpg`
         }
         return product
      })

      res.send({ listProducts, page, total: parseInt(length / productsPerPage) + 1 * (length % productsPerPage > 0) })
   }


   if (_catchProducts) {
      sendProducts(_catchProducts)
      return
   }

   JDaxi.getListProducts((data) => {

      if (data === "unknown error" || data.status === "error" || !data.product_list)
         data = tempStore.products

      _catchProducts = data.product_list
      sendProducts(_catchProducts)
   })
})


function updateProductImages() {
   JDaxi.getListProductImages({}, (data) => {

      if (data.status === "ERROR") return

      //ყველა ფოტოს წაშლა
      const dir = "jshop/images"
      try {
         fs.rmdirSync(dir, {
            recursive: true
         });

         // console.log(`${dir} is deleted!`);
      } catch (err) {
         // console.error(err, `Error while deleting ${dir}.`);
      }
      fs.mkdirSync(dir)





      //ფოტოების გადმოწერა და შენახვა
      data = data.product_image_list
      if (!data) return

      data.forEach(product => {

         product.product_images.forEach(image => {

            const name = image.FileName
            const data = image.Image
            const isMain = image.IsMain

            if (!data.length || !isMain) return


            //ფოტოს შენახვა
            fs.writeFile(`${dir}/${product.ProductUid}.jpg`, data, 'base64', function (err) {
               // console.log(err ? error : "success");
            });
         })

      })


   })
}

updateProductImages()


app.get('/api/updateProductImages', (req, res) => {
   updateProductImages()
   res.send("succeeded 👉👉")
})


app.post('/api/createSellInvoice', (req, res) => {

   let order = req.body

   // let date = (new Date()).toJSON()
   // order.header.OrderDate = date.substring(0, date.length - 5) + "Z"
   order.header.OrderN = "#order of jax#"

   JDaxi.createSellInvoice(order, (data) => {

      if (data === "unknown error" || data.error_message === "Invalid Auth Info") {
         res.send({ status: "OK" })
         return
      }
      res.send(data)
   })
})


app.get('/api/categories/:categoryUid', (req, res) => {

   let categoryUid = parseInt(req.params.categoryUid) || 1


   if (_catchCategoryes) {

      const category = _catchCategoryes.find(c => c.Uid === categoryUid)

      if (category && _catchCategoryes.find(c => c.ParentUid === categoryUid) === undefined)
         categoryUid = category.ParentUid

      res.send(_catchCategoryes.filter(c => c.ParentUid === categoryUid))
      return
   }

   JDaxi.getListCategories((data) => {

      if (data === "unknown error" || data.status === "ERROR") {
         console.log(data)
         data = tempStore.categories
      }
      _catchCategoryes = data.category_list
      res.send(data.category_list.filter(c => c.ParentUid === categoryUid))
   })
})


app.use((req, res) => {

   res.sendFile(path.join(__dirname, 'jshop', 'app.html'));
})



app.listen(process.env.PORT || 5000, function () {
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});