import React, { useState } from 'react'
import {IoMail,IoCall} from 'react-icons/io5'
import { GiFactory } from "react-icons/gi";
import './Page.css'
import {LoremIpsum} from 'react-lorem-ipsum';
import {tableItems} from './tableItems';
import {tableItemsP} from './tableItemsP';
import icon1 from './imgs/company.svg'
import icon3 from './imgs/hands.svg'
import icon2 from './imgs/index.svg'
import icon4 from './imgs/quality.svg'
import pic1 from './imgs/AboutUs.jpeg'
import pic2 from "./imgs/logo.png"
import logo from './imgs/logo3.png'
import logo1 from './imgs/logo1.svg'
import three from './imgs/2.jpeg'
import two from './imgs/1.jpeg'
import kaskorse from './imgs/4.png'
import interlock from './imgs/3.jpeg'
import supreme from './imgs/7.jpeg'
import ribana from './imgs/6.webp'
import punto from './imgs/5.jpeg'
import punto2 from './imgs/7.jpg'
import punto3 from './imgs/8.jpg'


export const MainTR = () =>{
  const [isOpen, setIsOpen] = useState(false)
    const [header,setHeader]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 50){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }
    function myFunction() {
        var x = document.getElementById("navigationMain");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    window.addEventListener("scroll",changeBackground);
    return(
        <section id="Page">
        <section id="Home">
        <div className={header ? 'header active' : 'header'}>
            <div className="LogoHolder col-lg-4 col-md-4">
                <div className="LogoimgHolder1 col-lg-4 col-md-4">
                        <img className="Logo" src={logo} alt="logo"></img>
                </div>
                <div className="LogoimgHolder2 col-lg-4 col-md-6">
                        <img className="Logo1" src={logo1} alt="logo1"></img>
                </div>
            </div>
                <div id="navigationMain" className="navigationMain text-center col-lg-6 col-md-6">
                    <ul>
                        <li><a href="#Home">Anasayfa</a></li>
                        <li><a href="#About">Hakk??m??zda</a></li>
                        <li className="dpdown "><a href="#Production">??retim</a>
                        {/* <ul>
                            <li><a href="#Punta">Punta</a></li>
                            <li><a href="#Orme">??rme</a></li>
                            <li><a href="#Yikama">Y??kama</a></li>
                            </ul> */}
                            </li>
                        <li><a href="#Products">??r??nler</a></li>
                    </ul>
                </div>
                <div className="hamburgerMenu">
                <button onClick={() => myFunction()} className="hambugerBar"><i className="fa fa-bars"></i></button>
                </div>
                <button  className="btnContact" ><a href="#Contact">??leti??im</a></button>
        </div>
        
          <div className="col-lg-8 offset-lg-2 text-center">
              <div className="text">
                  <h1>Kalitenin iplikle dokundu??u yer</h1>
                  <h5 style={{"color":"#F5F6F6"}}>Assos Moda Kuma??????l??k ve ??rme olarak kaliteli iplik ve boya maddeleri kullan??yor, ??retimin ilk girdisinden ba??layarak nihai ??r??ne kadar olan her a??amay?? titizlikle inceliyoruz.</h5>
              </div>
              </div>
          </section>

              <section id="Boxes">
              <div className="container-fluid col-md-10 text-center">
              <div className="row boxHolder">
                  <div className="colHolder col-lg-3  col-md-6 col-12">
                      <div className="box col-lg-12">
                  <img id="icon" src={icon1} alt="test"></img>
                          <h3>Vizyonumuz</h3>
                          <p>T??m m????terilerimiz i??in ayr??cal??????n bir standart hale gelmesidir. G??venli ve hasars??z bir ??al????ma ortam?? yaratmakt??r.
                              S??rd??r??lebilir ??retkenlik ve uzun vadeli karl??l??k olu??turmak i??in son teknoloji ??r??n?? ekipman ve teknolojiyi kullanmakt??r. </p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3  col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon2} alt="test"></img>
                          <h3>Misyonumuz</h3>
                          <p>??lke ekonomisi i??in sen de bir de??er ol??? ??iar??yla hareket eden firmam??z??n b??nyesinde, bug??n onlarca ki??iye istihdam sa??l??yoruz. 
                              Y??lda 3.000-3.500 ton kuma?? ??retim miktar??yla alan??nda ??nde gelen tekstil firmas?? aras??nda yer al??yoruz.
                          </p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3 col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon3} alt="test"></img>
                          <h3>M????teri Memnuniyeti</h3>
                          <p>Assos ??rme olarak m????teri memnuniyetini y??ksek tutabilmek i??in ??r??n ve desen yelpazemizi geni?? tutuyor, 
                              s??z verdi??imiz tarihte ??r??nlerimizin m????terilerimize ula??mas??n?? sa??l??yoruz.</p>
                      </div>
                  </div>
                  <div className="colHolder col-lg-3 col-md-6 col-12">
                  <div className="box col-lg-12">
                  <img id="icon" src={icon4} alt="test"></img>
                          <h3>Kalite</h3>
                          <p>Global Recycle Standard (GRS) ve Organic Content Standart (OCS) belgeleri sayesinde,
                               ??r??nlerin i??leme, ??retim, paketleme, etiketleme ve da????t??m?? da dahil olmak ??zere geri d??n????t??r??lm???? 
                               ve organik materyallerin i??eri??inin son ??r??ne kadar tedarik zinciri boyunca izlenmesi ve do??rulanmas?? sa??l??yoruz. 
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          </section>
          <section id="About">
            <div className="aboutHolder">
            <img id="Tree" src={pic2} alt="icon"></img>
            <h3>Hakk??m??zda</h3>
            </div>
            <div className="container">
                <div className="rowabout row d-flex align-items-center">
		            <div className="picAbout col-lg-6  text-center">
                 <img src={pic1} style={{"width":"500","height":"500","maxWidth":"100%","height":"auto","borderRadius":"2%"}}></img>
		            </div>
		            <div className="textAbout col-lg-6">  
                 <p>
                T??rkiye???nin k??kl?? tekstil ??reticilerinden biri olan firmam??z, 2002???de ??stanbul Firuzk??y???de kurulmu??,
                k??sa zamanda b??y??yerek faaliyet alan??n?? geni??letmi??tir. Ard??ndan ??stanbul Ak??aburgaz???daki yerine ta????nm????, 
                G??zen ailesinin vizyonuyla ??nemli ad??mlar atarak, 2020 y??l??nda Beylikd??z?? Organize Sanayi B??lgesi???ndeki fabrikas??n?? tamamlam????t??r.
                Bu sayede iplikten kuma??a entegre bir tesis haline gelmi??tir.
                </p>
                <p>
                Assos ??rme olarak m????teri memnuniyetini y??ksek tutabilmek i??in ??r??n ve desen yelpazemizi geni?? tutuyor,
                s??z verdi??imiz tarihte ??r??nlerimizin m????terilerimize ula??mas??n?? sa??l??yoruz. 
                ????birli??i yapt??????m??z firmalar i??in ??retti??imiz kuma??lar??m??z?? m????terilerimizin ihtiya??lar??na uygun olarak farkl?? desen, renk ve kreasyonlarla sunuyoruz.
                Her y??l ger??ekle??tirmi?? oldu??umuz ekipman yat??r??mlar?? ile bug??n 30 adet ??rme, 240 kafa punta makinemiz ile d??nya standartlar??nda ??retim yap??yoruz.
                </p>
	</div>
                </div>
            </div>
        </section>
        <section id="Production">
            <div className="ProductionHolder container text-center">
                <h3>??retim</h3>
                <p>
                ??stanbul Beylikd??z?? Organize Sanayi B??lgesi???nde 5.500 m?? kapal?? alanda faaliyet g??steren tesisimizde e??itimli
                 ve tecr??beli kadromuz ile sekt??re hizmet veren se??kin kurulu??lar aras??nda yer al??yoruz.
                ?????lke ekonomisi i??in sen de bir de??er ol??? ??iar??yla hareket eden firmam??z??n b??nyesinde, 
                bug??n onlarca ki??iye istihdam sa??l??yoruz. Y??lda 3.000-3.500 ton kuma?? ??retim miktar??yla alan??nda ??nde gelen tekstil firmas?? aras??nda yer al??yoruz.
                </p>
            </div>
            <div className="container-fluid col-md-10 text-center">
            <div className="ProductionRows row ">
                    <div className="ColumnP col-sm border-right ">
                        <h4>??rme</h4>
                        <p>??rme kuma??a dair m????terilerimize en iyisini sunabilmek i??in ??r??n kalitemizi,
                             bilgi ve teknoloji ??a????na ayak uydurarak teknik altyap??m??zla,
                              T??rkiye???de uluslararas?? standartlarda inovatif ??retim s??reciyle birlikte,
                             birinci s??n??f kalitede hizmet sunup ??retim yap??yoruz.</p>
                    </div>
                    <div className="ColumnP  col-sm border-right">
                       <h4>Punta</h4>
                    <p><LoremIpsum p={1}></LoremIpsum></p>
                    </div>
                    <div className="ColumnP col-sm">
                        <h4>Y??kama/Apre</h4>
                        <p><LoremIpsum p={1}></LoremIpsum></p>
                        
                    </div>
                </div>
                </div>
</section>
                                    
                <section id="Machines">
                  <div className="TablesContainer container">
                <h3>Makine Parkurumuz</h3>
                <LoremIpsum p={1}></LoremIpsum>
                    <div className="table-responsive">
                <table className="table table-hover ">           
                <caption className="text-center">Toplamda <b>28</b> Adet ??rme Makinam??z bulunmaktad??r.</caption>
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">ADET</th>
                    <th scope="col">PUS</th>
                    <th scope="col">FINE</th>
                    <th scope="col">MODEL YILI</th>
                    <th scope="col">YEDEK KOVAN</th>
                    <th scope="col">MARKA</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {tableItems.map((data,key)=>{
                    return(
                    <tr>
                    <th scope="row">{data.Piece}</th>
                    <td>{data.Pus}</td>
                    <td>{data.Fine}</td>
                    <td>{data.Year}</td>
                    <td>{data.Hive}</td>
                    <td>{data.BrandN}</td>
                    <td>{data.Kind}</td>
                    </tr>
            ) })}
             </tbody>
               </table>
               <div className="table-responsive">
               <table className="table table-hover">
               <caption className="text-center">Toplamda <b>312</b> Adet Punta Kafam??z bulunmaktad??r.</caption>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">MAK??NA</th>
                    <th scope="col">MARKASI</th>
                    <th scope="col">MODEL YILI</th>
                    <th scope="col">???? SAYISI (KAFA)</th>
                  </tr>
                </thead>
                <tbody>
                  {tableItemsP.map((data,key)=>{
                    return(
                      <tr>
                    <th scope="row">Punta Makinas??</th>
                    <td>{data.Brand}</td>
                    <td>{data.Year}</td>
                    <td>{data.Head}</td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>
              </div>
              </div>
              </div>
              </section>
        
        <section id="Products">
            <div className="ProductsHolder text-center">
                <h3>??r??nlerimiz</h3>
                <p style={{"marginBottom":"100px"}}><LoremIpsum p={2}></LoremIpsum></p>
                
            </div>
            <div className="container">
                <div class="grid-container">
                    <div class="grid-item"><img src={supreme} alt="picHolder"/><div className="test">S??prem</div> </div>
                    <div class="grid-item"><img src={ribana} alt="picHolder"/><div className="test">Ribana</div> </div>
                    <div class="grid-item"><img src={kaskorse} alt="picHolder"/><div className="test">Ka??korse</div> </div>
                    <div class="grid-item"><img src={two} alt="picHolder"/><div className="test">??ki ??plik</div> </div>
                    <div class="grid-item"><img src={three} alt="picHolder"/><div className="test">???? ??plik</div> </div>
                    <div class="grid-item"><img src={interlock} alt="picHolder"/><div className="test">??nterlok</div> </div>
                    <div class="grid-item"><img src={punto} alt="picHolder"/><div className="test">Puntal?? Kuma??</div> </div>
                    <div class="grid-item"><img src={punto2} alt="picHolder"/><div className="test">Puntal?? Kuma??</div> </div>
                    <div class="grid-item"><img src={punto3} alt="picHolder"/><div className="test">Puntal?? Kuma??</div> </div>
                </div>
            </div> 
    </section>
      <section id="Contact">

      <h2 className="text-center">??leti??im</h2>
      <div className="ContactRows row">
                    <div className="left-col col">
                        <h3 className="text-center">Merkez</h3>
                        <h5>??rme / Punta</h5>
                        <ul class="contact-page-menu">
								<li class="address">
                                <GiFactory/><span>  Mustafa Kurdo??lu Cd. No:19 Kat:2, 34524 Beylikd??z?? Osb/Beylikd??z??/??stanbul</span></li>
                                <li class="phone">
                                  <IoCall/>  <a href="tel:902124239016">
                                    <span> (0212) 423 90 16</span></a></li>
                                    <li class="email"><a href="mailto:muhasebe@assosmoda.com">
                                    <IoMail/>  <span>muhasebe@assosmoda.com</span></a></li>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.122765978748!2d28.661383315413836!3d41.000686079301566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8865c5430f7%3A0x8d32f9d2d0a7ffd1!2sASSOS%20MODA!5e0!3m2!1str!2str!4v1641990272889!5m2!1str!2str" 
                                    title="assos merkez"
                                    width="100%"
                                    height="300"
                                    className="Map"
                                    style={{"border":"0"}} 
                                    allowfullscreen="" 
                                    loading="lazy"></iframe>
                    </ul>
                    </div>
                    <div className="right-col col">
                       <h3 className="text-center">Fabrika</h3>
                       <h5>Y??kama / Apre </h5>
                       <ul class="contact-page-menu">
							<li class="address">
                            <GiFactory/><span>  Osmangazi mahallesi, 2626 Sokak no:9/2, 34522 Esenyurt/??stanbul</span></li>
                                <li class="phone">
                                    <IoCall/><a href="tel:902128869403">
                                    <span>  (0212) 886 94 03</span></a></li>
                                    <li class="email"><a href="mailto:muhasebe@assosmoda.com">
                                    <IoMail/>  <span>  muhasebe@assosmoda.com</span></a></li>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.746313740659!2d28.636728215415424!3d41.05267647929635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa15078a71d97%3A0x6b667779a2569f77!2sAssos%20Y%C4%B1kama%20Apre!5e0!3m2!1str!2str!4v1641990730108!5m2!1str!2str" 
                                width="100%"
                                height="300" 
                                className="Map"
                                style={{"border":"0","marginLeft":"auto"}} 
                                title="assos fabrika"
                                allowfullscreen="" 
                                loading="lazy"></iframe>
                    </ul>
                    </div>
                </div>
     <span className="footer">Made By <a href="https://www.instagram.com/sefagozen/">Safe</a></span>
     </section>
  </section>
    )
    }
