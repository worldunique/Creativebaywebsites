
// IMPORTANT: replace this with the final CreativeBay Websites sales WhatsApp number before launch.
const SALES_WHATSAPP="919075111921";
const wa=(msg)=>"https://wa.me/"+SALES_WHATSAPP+"?text="+encodeURIComponent(msg);
document.getElementById("stickyWa").href=wa("Hello CreativeBay Websites, I need a website for my business.");
document.getElementById("quoteForm").addEventListener("submit",function(e){
 e.preventDefault(); const f=new FormData(this);
 const msg=`CreativeBay Websites - New Project Enquiry
Name: ${f.get("name")}
Business: ${f.get("business")}
Business Type: ${f.get("type")}
Website: ${f.get("website")}
Domain: ${f.get("domain")}
Photos: ${f.get("photos")}
SEO: ${f.get("seo")}
Budget: ${f.get("budget")}
Mobile: ${f.get("mobile")}
Details: ${f.get("details")||"-"}`;
 window.open(wa(msg),"_blank");
});
