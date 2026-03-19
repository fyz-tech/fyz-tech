import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
FaReact,
FaNodeJs,
FaHtml5,
FaCss3Alt,
FaJs,
FaWhatsapp,
FaFacebook,
FaInstagram,

} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
SiTensorflow,
SiPython,
SiDjango,
SiFlutter,
SiPhp,
SiWordpress
} from "react-icons/si";

export default function Home() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [subscribed,setSubscribed] = useState(false);

const [formData,setFormData] = useState({
name:"",
email:"",
phone:"",
company:"",
message:""
});





const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

try{
const res = await fetch("http://localhost:5000/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(formData)
});

const data = await res.json();

alert(data.message);

setFormData({
name:"",
email:"",
phone:"",
company:"",
message:""
});

}catch(err){
console.log(err);
alert("Error submitting form");
}
};

const handleSubscribe = async ()=>{
if(!email){
alert("Enter email");
return;
}

try{
const res = await fetch("http://localhost:5000/api/subscribe",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({email})
});

const data = await res.json();

alert(data.message);
setSubscribed(true);

setTimeout(()=>setSubscribed(false),3000);

setEmail("");

}catch(err){
console.log(err);
alert("Subscription failed");
}
};
return (
<div>

{/* ===== SEO SCHEMA ===== */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "https://schema.org",
"@graph": [

{
"@type": "Organization",
"name": "Fyz Tech",
"url": "https://fyztech.com",
"logo": "https://fyztech.com/logo.png"
},

{
"@type": "LocalBusiness",
"name": "Fyz Tech",
"telephone": "+91 9500415942",
"address": {
"@type": "PostalAddress",
"addressLocality": "Nagercoil",
"addressRegion": "Tamil Nadu",
"addressCountry": "IN"
}
},

{
"@type": "Service",
"serviceType": "Web Development"
},

{
"@type": "Service",
"serviceType": "AI ML Development"
},

{
"@type": "Service",
"serviceType": "Digital Marketing"
}

]
})
}}
/>

{/* MAIN SECTION */}
<section className="bg-black text-white overflow-hidden overflow-x-hidden">


{/* HERO */}

<div className="min-h-screen flex items-center px-6 md:px-20">

<div className="grid md:grid-cols-2 gap-12 items-center">

<div>

<h1 className="text-5xl md:text-5xl font-bold mb-6
bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400
bg-clip-text text-transparent">

Fyz Tech – Future Ready Digital Solutions 🚀

</h1>

<p className="text-gray-300 mb-6">
We help businesses grow using AI automation,
web development and modern digital marketing strategies.
</p>

<div className="flex flex-col md:flex-row gap-5">

<button
onClick={()=>navigate("/services")}
className="bg-purple-600 px-6 py-3 rounded-xl">
Explore Services
</button>

<button
onClick={()=>navigate("/contact")}
className="border border-purple-400 px-6 py-3 rounded-xl">
Start Project
</button>

</div>

</div>


{/* STATS */}

<div className="grid grid-cols-2 gap-6">

{[
["100+","Projects"],
["22+","Clients"],
["4+","Countries"],
["5+","Team"]
].map((item,i)=>(
<div key={i} className="bg-gray-900 p-6 rounded-2xl text-center">
<h2 className="text-3xl font-bold text-purple-400">{item[0]}</h2>
<p className="text-gray-400">{item[1]}</p>
</div>
))}

</div>

</div>

</div>


{/* TECHNOLOGIES */}

<div className="py-20 px-6 md:px-20 border-t border-gray-800">

<h2 className="text-3xl text-center font-bold text-purple-400 mb-12">
Technologies We Use
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 gap-16 items-center">

<div className="overflow-hidden w-full">

<motion.div
className="flex gap-14 items-center"
animate={{ x: ["0%", "-50%"] }}
transition={{ ease: "linear", duration: 20, repeat: Infinity }}
whileHover={{ animationPlayState: "paused" }}
>

{[
{icon:<FaReact size={30} className="text-[#61DAFB]"/>,name:"React"},
{icon:<FaNodeJs size={30} className="text-[#3C873A]"/>,name:"Node JS"},
{icon:<FaHtml5 size={30} className="text-[#E34F26]"/>,name:"HTML"},
{icon:<FaCss3Alt size={30} className="text-[#1572B6]"/>,name:"CSS"},
{icon:<FaJs size={30} className="text-[#F7DF1E]"/>,name:"JavaScript"},
{icon:<SiTensorflow size={30} className="text-[#FF6F00]"/>,name:"AI"},
{icon:<SiPython size={30} className="text-yellow-500"/>,name:"Python"},
{icon:<SiDjango size={30} className="text-green-700"/>,name:"Django"},
{icon:<SiFlutter size={30} className="text-blue-500"/>,name:"Flutter"},
{icon:<SiPhp size={30} className="text-indigo-500"/>,name:"PHP"},
{icon:<SiWordpress size={30} className="text-blue-700"/>,name:"WordPress"},

/* duplicate for infinite loop */

{icon:<FaReact size={30} className="text-[#61DAFB]"/>,name:"React"},
{icon:<FaNodeJs size={30} className="text-[#3C873A]"/>,name:"Node JS"},
{icon:<FaHtml5 size={30} className="text-[#E34F26]"/>,name:"HTML"},
{icon:<FaCss3Alt size={30} className="text-[#1572B6]"/>,name:"CSS"},
{icon:<FaJs size={30} className="text-[#F7DF1E]"/>,name:"JavaScript"},
{icon:<SiTensorflow size={30} className="text-[#FF6F00]"/>,name:"AI"},
{icon:<SiPython size={30} className="text-yellow-500"/>,name:"Python"},
{icon:<SiDjango size={30} className="text-green-700"/>,name:"Django"},
{icon:<SiFlutter size={30} className="text-blue-500"/>,name:"Flutter"},
{icon:<SiPhp size={30} className="text-indigo-500"/>,name:"PHP"},
{icon:<SiWordpress size={30} className="text-blue-700"/>,name:"WordPress"}

].map((tech,i)=>(
<div
key={i}
className="flex items-center gap-3 bg-gray-900 px-6 py-3 rounded-xl shadow-lg">

{tech.icon}

<span className="text-gray-200 text-sm font-medium">
{tech.name}
</span>

</div>
))}

</motion.div>


</div>

<div>

<img
src="https://images.unsplash.com/photo-1677442135136-760c813028c0"
alt="AI Technology"
className="overflow-x-hidden rounded-2xl shadow-2xl"
/>

</div>

</div>

</div>


{/* FUTURE READY */}

<div className="py-24 px-6 md:px-20 bg-white text-black">

<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 gap-16">

<div>

<h2 className="text-4xl font-bold mb-4">
Building Future-Ready Platforms with Perfection
</h2>

<p className="text-gray-600 mb-10">
We build scalable platforms using modern technologies.
</p>

<div className="grid grid-cols-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiTensorflow size={30} className="text-orange-500 mx-auto"/> AI
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiPython size={30} className="text-yellow-500 mx-auto"/> Python
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiDjango size={30} className="text-green-700 mx-auto"/> Django
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<FaReact size={30} className="text-cyan-500 mx-auto"/> React
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiFlutter size={30} className="text-blue-500 mx-auto"/> Flutter
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiPhp size={30} className="text-indigo-500 mx-auto"/> PHP
</div>

<div className="bg-gray-100 p-4 rounded-xl text-center">
<SiWordpress size={30} className="text-blue-700 mx-auto"/> WordPress
</div>

</div>

</div>


{/* CONTACT FORM */}

<div className="bg-gradient-to-r from-cyan-200 to-blue-200 p-10 rounded-2xl">

<h3 className="text-2xl font-bold mb-6 text-center">
Here For You
</h3>

<form onSubmit={handleSubmit} className="grid grid-cols-2 grid-cols-1 md:grid-cols-2 gap-4">

<input name="name" value={formData.name} onChange={handleChange} placeholder="Name*" className="w-full p-3 rounded-lg"/>

<input name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="w-full p-3 rounded-lg"/>

<input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone*" className="w-full p-3 rounded-lg"/>

<input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-full p-3 rounded-lg"/>

<textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project" className="col-span-2 p-3 rounded-lg"/>

<button type="submit" className="col-span-2 bg-blue-600 text-white py-3 rounded-xl">
Submit
</button>

</form>

</div>

</div>

</div>




{/* ===== WHY FYZ TECH (SEO FAQ) ===== */}

<div className="py-24 px-6 md:px-20 bg-gray-950">

<h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
Why Fyz Tech?
</h2>

<div className="max-w-4xl mx-auto space-y-6">

<div className="bg-gray-900 p-6 rounded-xl">
<h3 className="text-xl font-semibold">
Why choose Fyz Tech for Web Development?
</h3>
<p className="text-gray-400">
Fyz Tech builds modern websites using React,
Node.js and AI powered technologies.
</p>
</div>

<div className="bg-gray-900 p-6 rounded-xl">
<h3 className="text-xl font-semibold">
Does Fyz Tech provide AI & ML services?
</h3>
<p className="text-gray-400">
Yes, we develop AI automation, chatbots
and intelligent applications.
</p>
</div>

<div className="bg-gray-900 p-6 rounded-xl">
<h3 className="text-xl font-semibold">
Does Fyz Tech offer Digital Marketing?
</h3>
<p className="text-gray-400">
We provide SEO, social media marketing
and online brand growth strategies.
</p>
</div>

<div className="bg-gray-900 p-6 rounded-xl">
<h3 className="text-xl font-semibold">
Do you provide internships?
</h3>
<p className="text-gray-400">
Yes, we offer internships in Web Development,
AI/ML, Digital Marketing and Video Editing.
</p>
</div>

</div>

</div>
<div className="py-24 px-6 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center">

<h3 className="text-3xl font-bold mb-4">
Stay Updated with <span className="text-purple-400">Fyz Tech</span>
</h3>

<p className="text-gray-400 mb-10">
Get updates about AI, Web Development, Digital Marketing
services and internships.
</p>

<div className="flex justify-center gap-4 max-w-xl mx-auto">

<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Enter your email"
className="w-full px-5 py-3 rounded-xl text-black"
/>

<button
onClick={handleSubscribe}
className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-xl">

Subscribe

</button>

</div>

</div>
{subscribed && (

<div className="fixed bottom-10 left-1/2 transform -translate-x-1/2
bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg
flex items-center gap-3 animate-bounce">

<span className="text-2xl">✅</span>

<span>Subscribed Successfully!</span>

</div>

)}
{/* FOOTER */}

<footer className="bg-black px-6 md:px-20 py-16 border-t border-gray-800">

<div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-10">

<div>

<h3 className="text-xl font-bold mb-4">Fyz Tech</h3>

<p className="text-gray-400 text-sm mb-4">
At Fyz Tech we design and develop tailored digital solutions
that solve real business problems.
</p>

{/* 🔥 SOCIAL ICONS */}
<div className="flex gap-4 text-2xl">

<a href="#" className="text-gray-400 hover:text-blue-500">
<FaFacebook/>
</a>

<a href="https://instagram.com/fyz.tech" 
target="_blank"
rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
<FaInstagram/>
</a>

<a href="#" className="text-gray-400 hover:text-blue-400">
<FaXTwitter />
</a>

</div>

</div>

<div>

<h3 className="font-bold mb-4">Services</h3>

<ul className="space-y-2 text-gray-400">
<li>Web Development</li>
<li>Digital Marketing</li>
<li>Video editing & Design</li>
<li>App Development</li>
<li>Robotics & AI</li>
</ul>

</div>

<div>

<h3 className="font-bold mb-4">Quick Links</h3>

<ul className="space-y-2 text-gray-400">
<li onClick={()=>navigate("/WebSolutions")}>WebSolutions</li>
<li onClick={()=>navigate("/Services")}>Services</li>
<li onClick={()=>navigate("/Marketing")}>Marketing</li>
<li onClick={()=>navigate("/Internship")}>Internship</li>
<li onClick={()=>navigate("/Contact")}>Contact</li>
</ul>

</div>

<div>

<h3 className="font-bold mb-4">Get In Touch</h3>

<p className="text-gray-400 text-sm mb-2">
Thozhi code, Nagercoil, Tamil Nadu
</p>

<p className="text-gray-400">info@fyztech.com</p>

<p className="text-gray-400 mt-2">
+91 9488464218
<br/>
+91 9025655128
</p>

{/* 🔥 WORKING HOURS */}
<div className="mt-4 text-gray-400 text-sm">
<p className="font-semibold text-white">Working Hours</p>
<p>Mon - Sat: 9:00 AM - 6:00 PM</p>
<p>Sunday: Closed</p>
</div>

</div>

</div>

<div className="text-center text-gray-500 mt-10">
© 2026 fyz Tech. All Rights Reserved.
</div>

</footer>


{/* WHATSAPP */}

<a
href="https://wa.me/919488464218"
className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white text-2xl">

<FaWhatsapp/>

</a>

</section>
</div>

);

}