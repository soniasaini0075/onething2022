export const addPageMetas = (title, desc, keywords) => {
    // console.log("Meta Desc", desc);
    document.title = title != null && title != undefined ? title : "";
    document.getElementsByTagName("Meta")[0].content = desc != null && desc != undefined ? desc : "";
    document.getElementsByTagName("Meta")[1].content = keywords != null && keywords != undefined ? keywords : "";
    // console.log("Meta Description", document.getElementsByTagName("Meta")[0].content);
}
export const convertToWebPURL=(originalURL) =>{
 return originalURL
//    if(originalURL.includes("/webp-express")){
  
      
//       return originalURL
   
//    }
//    else{

//     var webpURL=''   
//    if(originalURL.includes(".png")){
//      webpURL = originalURL.replace('/uploads/', '/webp-express/webp-images/uploads/').replace(/\.\w+$/, '.png.webp').replace('.api','.dashboard'); 
//     }
//    if(originalURL.includes(".jpg")){
//     webpURL = originalURL.replace('/uploads/', '/webp-express/webp-images/uploads/').replace(/\.\w+$/, '.jpg.webp').replace('.api','.dashboard'); 
//    }
//    if(originalURL.includes(".jpeg")){
//     webpURL = originalURL.replace('/uploads/', '/webp-express/webp-images/uploads/').replace(/\.\w+$/, '.jpeg.webp').replace('.api','.dashboard'); 
//    }
//    if(originalURL.includes(".mp4")){
//     const match = originalURL.match(/\/(\d{4})\/(\d{2})\//);
   
// if (match) {
//     const year = parseInt(match[1], 10);
//     const month = parseInt(match[2], 10);

//     // Check if the date is less than October 2023 (year=2023, month<=10)
//     if (year < 2023 || (year === 2023 && month < 10)) {
//       // Replace the year and month with "2023/10"
//       webpURL= originalURL.replace(/\/\d{4}\/\d{2}\//, '/2023/10/').replace('.mp4','.webm');
//     }
//     else{

//         webpURL=originalURL.replace('.mp4','.webm')
//     }
//   }}
  
   
  // return webpURL;
// }

}