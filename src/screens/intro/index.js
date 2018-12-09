import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import { Whiteheader } from "../../components/header";

import "./styles/intro.css";
import styles from "./styles/styles";

import pic from "../../assets/images/other/pauvre.jpg";

class Intro extends Component {
  render() {
    return (
      <div>
        <Whiteheader selected />
        <div>
          <div className="home-intro ">
            <div className="">
              <h5 className="display-4">Introduction</h5>
              <p class="card-text">
                The Humanitarian Office for the African Community is a Community Organization <br />
                Congolese Law Foundation, which was created in 1998. It is dedicated to the protection and <br />
                improvement of the quality of life of the rural populations affected and / or affected by <br />
                intercommunal conflict and war in R.D.Congo Apart from these efforts to protect and
                <br />
                to improve the living conditions of rural communities, Re-Fund raises awareness and mobilizes
                <br />
                funds from donors to promote constructive solutions to eradicate poverty.
                <br />
                The organization is based in Uvira, South Kivu province and its intervention zone
                <br />
                is the territories of Fizi and Uvira and may also intervene in other territories of
                <br />
                the Republic. Currently, Re-Fund intends to implement the project Supporting Initiatives
                <br />
                Marginalized Women for Economic Empowerment and the Entrepreneurship Project
                <br />
                for young people to combat the involvement of young people in counterproductive activities.
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center context">
          <hr className="lign" />
          <h5 className="display-4">Contexte</h5>
          <p className="card-text" style={styles.context}>
            At its inception just after the 1996 war and the influx of refugees {""}
            <br />
            Rwandan and Burundian, OCHA had a humanitarian vocation in the {""}
            <br />
            framework for disaster relief and this depended on the context
            from the moment
             <br />
            In 2010, with the financing of the Stichting ASADE-NGO, Re-Fund has {""}
            <br />
            organized a participatory survey to assess the root cause of {""}
            <br />
            the stagnation of poverty among the rural population
             the <br />
            external help. After this survey, a workshop was organized
            for
             <br />
            find a durable solution to support this {""}
            <br />
            population in its area of intervention.
          </p>
          <hr className="lign" />
        </div>

        <div className="pauvrete">
          <div className="container">
            <div className="card" style={styles.card}>
              <div className="card-body">
                <h5 style={styles.cardtxt}>The idleness of youth</h5>
                <p className="card-text">
                  In the same vein, there is not a good policy set to <br />
                  the supervision of youth. The latter is often at the
thank you for <br />
                  negative movements (rebellion, forces and armed groups,
political parties, <br />
                  delinquency ...). Idleness being a vice, it is dangerous
for young people <br />
                  and it's counterproductive. <br />
                  That's why entrepreneurship remains a way out
by creating <br />
                  youth employment. <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mypadding">
          <div className="row">
            <div className="col">
              <img src={pic} alt="pauvrete au congo" />
            </div>
            <div className="col">
              <h5 style={styles.cardtxt}>La Pauvreté</h5>
              <p className="card-text long_text">
              In the absence of a coherent policy, the government of R.D.Congo {""}
 <br />
 failed to boost the economy by focusing on agriculture {""}
 <br />
 which until proven otherwise remains the driving force of development {""}
 <br />
 sustainable. The population in the reflex of survival is trying to
 <br />
 take charge with the little that exists Certainly, poverty is {""}
 <br /> at the root of the evils and plagues that plague our society
 especially <br />
 in our rural areas. To fight and eradicate poverty
 in <br />
 the goal of achieving the objectives of the United Nations {""}
 <strong> Zero hunger </ strong> <br />
 by 2030, a concerted effort remains a priority for
 reach <br />
 Sustainable development. <br />
              </p>
            </div>
          </div>
          <div style={{ marginTop: 25 }}>
            <p className="card-text long_text">
            How to achieve it? The best strategy is not
to provide substantial assistance to this poor population at the
search for survival but to support their initiatives for a
certain sustainable development.
<strong>
  If you give me a fish, I will eat one day but if you
 teach me to sin, I will not be hungry
</ strong>
Thus, Re-Fund during this workshop, targeted 4 major sectors
carriers that will enable its target group (population
poor, marginalized woman and youth) to recover from
poverty. It is:
            </p>
            <div>
              <ul>
              <li> Agriculture through agro-business </ li>
<li> Fishing </ li>
<li>
  The professional profession (Crafts, cut & sewing,
  mechanical, hairdressing)
</ li>
<li> Income Generating Activities (small business). </ li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row">
            <div className="col-12">
              <h6>© Re-Fund 2018</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
