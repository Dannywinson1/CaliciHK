'use client';

import { ArrowUpRight, Camera, ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  { number: '01', title: 'Bistro Dining', text: 'Coastal-inspired dishes designed for sharing, conversation, and memorable evenings.', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85' },
  { number: '02', title: 'Wine Experience', text: 'Thoughtfully curated wines from Mediterranean regions, selected to complement every dish.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85' },
  { number: '03', title: 'Artisan Grocer', text: 'Discover premium Mediterranean ingredients and specialty products to bring the experience home.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85' },
];

const dishes = [
  { category: 'Small Plates', name: 'Charred Octopus', desc: 'Smoky paprika, lemon, parsley oil', price: 'HK$168', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=85' },
  { category: 'Main Courses', name: 'Linguine alle Vongole', desc: 'Clams, white wine, garlic, bottarga', price: 'HK$218', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=700&q=85' },
  { category: 'Wine', name: 'Sunlit Coast Selection', desc: 'A bright, mineral-driven Mediterranean white', price: 'HK$128 / glass', image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=700&q=85' },
  { category: 'Grocer', name: 'Estate Olive Oil', desc: 'Cold-pressed, peppery, made for the table', price: 'HK$248', image: 'https://images.unsplash.com/photo-1608571423539-e951a4e8c90c?auto=format&fit=crop&w=700&q=85' },
];

const gallery = [
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85',
];

function Logo() { return <a href="#top" className="logo" aria-label="Calici home">C<span>Λ</span>LICI</a> }
function Button({ children, light = false, href = '#menu' }) { return <a className={`button ${light ? 'light' : ''}`} href={href}>{children}<ArrowUpRight size={15} /></a> }

function Navbar() {
 const [open, setOpen] = useState(false); const links = [['Our Story','#story'],['The Experience','#experience'],['Menu','#menu'],['Journal','#gallery'],['Visit','#visit']];
 return <header className="nav"><Logo/><nav>{links.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</nav><a className="nav-book" href="#visit">Make a reservation <ArrowUpRight size={15}/></a><button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>{open && <div className="mobile-menu">{links.map(([n,h])=><a key={n} href={h} onClick={()=>setOpen(false)}>{n}</a>)}<a href="#visit">Make a reservation</a></div>}</header>
}

export default function Home() {
 const [active, setActive] = useState('All');
 return <main id="top">
  <Navbar/>
  <section className="hero">
   <div className="hero-image"/><div className="hero-overlay"/>
   <div className="hero-copy"><p className="eyebrow">Mediterranean bistro · wine · grocer</p><h1>Escape to the<br/><i>Mediterranean,</i><br/>in the heart of Hong Kong.</h1><p className="hero-text">Coastal flavours, curated wines, and artisanal groceries inspired by Italy, Greece, and Spain.</p><div className="hero-actions"><Button light>Explore the menu</Button><a className="text-link light-link" href="#visit">Find us in Sai Ying Pun <ArrowUpRight size={15}/></a></div></div>
   <div className="hero-bottom"><span>Est. 2024 · Sai Ying Pun</span><span className="scroll">Scroll to wander <ChevronDown size={16}/></span></div>
  </section>
  <section id="story" className="story section"><p className="eyebrow green">Our story</p><div className="story-grid"><div><h2>A table set for<br/><i>la dolce vita.</i></h2></div><div className="story-copy"><p>At Calici, we bring the spirit of the Mediterranean to Hong Kong through carefully crafted dishes, exceptional wines, and hand-selected artisanal products.</p><p>Our table is a little escape: unhurried lunches, long dinners, beautiful bottles, and the simple pleasure of gathering over ingredients with a sense of place.</p><Button>Discover Calici</Button></div></div><div className="story-stats"><span>Italy</span><span>Greece</span><span>Spain</span><span>Hong Kong</span></div></section>
  <section id="experience" className="experience section"><div className="section-head"><div><p className="eyebrow gold">More than a meal</p><h2>Come for the flavours.<br/><i>Stay for the feeling.</i></h2></div><p>From the first pour to the last plate, every Calici moment is considered with warmth and a generous Mediterranean spirit.</p></div><div className="experience-grid">{experiences.map(x=><article className="experience-card" key={x.title}><img src={x.image} alt={x.title}/><div className="card-overlay"/><div className="card-content"><span>{x.number}</span><h3>{x.title}</h3><p>{x.text}</p><ArrowUpRight size={20}/></div></article>)}</div></section>
  <section id="menu" className="menu-section section"><div className="menu-intro"><p className="eyebrow green">From our kitchen & cellar</p><h2>Made for the <i>table.</i></h2><p>Seasonal dishes and bottles chosen to move slowly through an afternoon or linger into the evening.</p></div><div className="menu-tabs">{['All','Small Plates','Main Courses','Wine','Grocer'].map(t=><button key={t} onClick={()=>setActive(t)} className={active===t?'active':''}>{t}</button>)}</div><div className="dish-grid">{dishes.filter(d=>active==='All'||d.category===active).map(d=><article className="dish" key={d.name}><img src={d.image} alt={d.name}/><div className="dish-details"><p className="eyebrow green">{d.category}</p><div><h3>{d.name}</h3><span>{d.price}</span></div><p>{d.desc}</p></div></article>)}</div><div className="center"><Button>View full menu</Button></div></section>
  <section className="quote"><div className="quote-mark">“</div><blockquote>Feels like a Mediterranean escape<br/>hidden in Hong Kong.</blockquote><p>— A Calici guest</p></section>
  <section id="gallery" className="gallery section"><div className="gallery-heading"><div><p className="eyebrow green">A taste of Calici</p><h2>Life at the <i>table.</i></h2></div><a className="text-link" href="https://instagram.com/calicihk" target="_blank"><Camera size={16}/> Follow @calicihk <ArrowUpRight size={15}/></a></div><div className="gallery-grid">{gallery.map((src,i)=><img src={src} alt="Calici atmosphere" key={src} className={`g${i+1}`}/>)}</div></section>
  <section className="testimonials section"><p className="eyebrow gold">The Calici circle</p><div className="testimonial-grid"><div><span className="insta-round"><Camera size={25}/></span><h2>Follow the<br/><i>sunshine.</i></h2><p>Daily plates, cellar discoveries and moments from our little corner of Sai Ying Pun.</p><a className="text-link cream" href="https://instagram.com/calicihk" target="_blank">@calicihk <ArrowUpRight size={15}/></a></div><div className="review"><div className="stars">★★★★★</div><p>“Beautiful atmosphere, thoughtful wines, and amazing food. The kind of place you want to return to before you’ve even left.”</p><span>— M. Lau, Hong Kong</span></div></div></section>
  <section id="visit" className="visit"><div className="visit-image"><img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85" alt="Wine bar interior"/></div><div className="visit-details"><p className="eyebrow gold">Come say ciao</p><h2>Meet us at<br/><i>the table.</i></h2><div className="address"><MapPin size={18}/><p>LG/F Wealth Building<br/>53–65 High Street, Sai Ying Pun<br/>Hong Kong</p></div><div className="address"><Phone size={17}/><a href="tel:+85291604278">+852 9160 4278</a></div><div className="visit-actions"><Button light href="tel:+85291604278">Call now</Button><a className="text-link cream" href="https://maps.google.com/?q=Wealth+Building+53-65+High+Street+Hong+Kong" target="_blank">Get directions <ArrowUpRight size={15}/></a></div></div></section>
  <footer><Logo/><p>© 2026 Calici Hong Kong. A Mediterranean escape in the heart of Hong Kong.</p><div><a href="https://instagram.com/calicihk" target="_blank">Instagram</a><a href="#top">Back to top ↑</a></div></footer>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Restaurant',name:'Calici Hong Kong',description:'Mediterranean bistro, wine bar and artisanal grocer in Hong Kong.',telephone:'+85291604278',address:{'@type':'PostalAddress',streetAddress:'LG/F Wealth Building, 53-65 High Street, Sai Ying Pun',addressLocality:'Hong Kong',addressCountry:'HK'},servesCuisine:['Mediterranean','Italian','Greek','Spanish'],sameAs:['https://instagram.com/calicihk']})}}/>
 </main>
}
