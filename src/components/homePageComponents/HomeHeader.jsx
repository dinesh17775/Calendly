import React from "react";
import { NavLink } from "react-router-dom";
function smoothScrollTo(targetID) {
  const targetItem = document.getElementById(targetID);
  if (targetItem) {
    targetItem.scrollIntoView({ behavior: "smooth" });
  }
}
function HomeHeader() {
  return (
    <section id="homeheader">
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li className="home-nav-list-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("products");
            }}
          >
            <NavLink to={"#"}>Product</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("homeheader");
            }}
          >
            <NavLink to={"#"}>Integrations</NavLink>
          </li>
          <li
            className="home-nav-list-item"
            onClick={() => {
              return smoothScrollTo("faq");
            }}
          >
            <NavLink to={"#"}>FAQs</NavLink>
          </li>
        </ul>
      </nav>
      <p className="home-head">APPS & INTEGRATIONS</p>
      <h2 className="head2">Integrate Calendly boost productivity</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
        recusandae totam quisquam voluptatibus ratione! Dolor tenetur eveniet
        quis recusandae, autem cum consectetur incidunt accusantium fuga.
        Quibusdam, cum, quaerat officiis atque officia ab sed nam a nemo dolore
        quia nulla minus dolor odit blanditiis! Impedit dolorum natus vero
        delectus consequatur consequuntur non. Quibusdam aliquid, voluptates
        maxime similique optio laudantium asperiores velit. Distinctio veritatis
        sint, nesciunt velit doloribus pariatur harum mollitia voluptatibus quos
        ex porro, quam dignissimos, ipsum iusto quidem. Dicta nulla facilis,
        cupiditate necessitatibus ullam quo at ab enim veritatis magnam aut
        molestias tempore inventore minus est distinctio doloremque sint quod,
        ad obcaecati non ducimus beatae! Totam ratione aperiam minus iste,
        eligendi repellat porro ea voluptatum incidunt quibusdam. Ducimus iste
        voluptatem dolore dolor. Ducimus enim provident assumenda explicabo
        recusandae laboriosam rem mollitia? Inventore eum vitae voluptas quas
        aspernatur consequatur possimus eligendi praesentium similique accusamus
        officiis ex quidem eius, distinctio quaerat ratione? Blanditiis, iure
        modi asperiores similique porro quas quo aliquid! Velit minima
        recusandae nobis, voluptatum ullam vitae. Nobis repudiandae quas
        consectetur doloribus ex. Hic numquam doloremque qui facere unde
        officia, expedita nemo earum omnis esse. Saepe ad dolores blanditiis
        nisi. Numquam nostrum aperiam optio ab quibusdam in dignissimos, saepe
        iure dicta alias est autem fugiat, ad nulla. Libero ab porro illo
        dignissimos reprehenderit ipsam voluptatibus obcaecati debitis?
        Voluptatum minima odio deserunt labore fuga sequi dicta tenetur
        veritatis. Aspernatur harum nesciunt voluptatem numquam quia eveniet
        rem, minus quam sapiente culpa necessitatibus nostrum cupiditate ea
        repudiandae, nobis nulla porro odit unde officiis dicta! Amet eos
        adipisci alias. Ipsa adipisci voluptate, sapiente quas rem, ex est
        eveniet illum aspernatur corporis earum accusantium minus aliquam fugit,
        nihil officiis autem veniam magnam reiciendis repellendus eum et
        voluptates id dolorum? Ipsa porro molestias, voluptates aspernatur
        itaque voluptatum quis tenetur molestiae cum labore, error officia
        dolorum consequatur necessitatibus veniam maiores unde veritatis
        incidunt inventore esse quod sapiente commodi voluptas doloremque.
        Doloremque sit eligendi illum nulla, dignissimos quas facere nihil eaque
        neque iusto officia odit ipsa rerum temporibus iste aut repudiandae
        reiciendis maxime corporis, suscipit similique nisi minima. Architecto
        sint, velit doloribus iste perspiciatis explicabo error? Quos
        exercitationem sed maiores illum at aperiam soluta numquam sequi qui
        omnis optio quia repellendus modi ipsum consequatur nam eligendi, harum
        beatae ratione facilis assumenda enim ad. Harum dicta unde quas quis
        exercitationem adipisci, aliquam nobis temporibus quisquam ex magni
        perspiciatis consectetur dolorum non eius nulla nisi doloremque. Totam
        facilis minus, ex obcaecati veritatis illum explicabo voluptates nostrum
        dignissimos. Provident, nemo eius at illum sed pariatur iure voluptate
        reprehenderit quia nam mollitia non excepturi nostrum vel? Cumque illo
        corrupti iure aliquam atque vel consectetur quisquam provident
        voluptatum, laudantium beatae quidem excepturi totam eos doloremque,
        temporibus expedita. Sint officiis mollitia rerum voluptatum atque eius
        animi dolor placeat tempora laboriosam perferendis, earum veniam!
        Doloribus similique labore fugiat? Explicabo nulla impedit quibusdam
        cumque fuga iusto repudiandae, aut illo, at qui velit commodi delectus!
        Atque, quidem quibusdam porro reprehenderit in eligendi rem aut
        asperiores quia veniam, consectetur ex dolorem recusandae rerum quae
        tempore accusamus ipsa nulla?
      </p>
      {/*<p className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi itaque
        error dignissimos eaque ex accusantium nulla, voluptas repellat minus
        ipsam at accusamus earum deserunt quia fugiat cumque assumenda provident
        non tempore ea aspernatur vero. Quisquam hic veritatis aliquam
        perferendis? Mollitia consequuntur nisi ex iure, illo nulla dolores enim
        voluptatibus qui dolorem dolor eum itaque facere eius iste tenetur,
        nostrum accusantium ut id quaerat atque natus cum repudiandae! Amet,
        magni eos tempora hic ipsam dolores, enim quaerat id quasi itaque
        quisquam sequi quia quas a obcaecati, maxime nulla velit! Asperiores, ea
        corporis, eaque quia ratione illo beatae nihil quos vitae cumque, nisi
        nostrum fugiat necessitatibus. Eaque ut quos unde ratione eligendi
        magnam et error quod. Voluptatem, vero dolor. Vel maxime qui error sunt
        in possimus excepturi voluptates quidem autem, est omnis eum quaerat
        numquam similique accusantium ad. Laborum veniam corrupti sunt quod quos
        tempora ex dolores ullam fugit, recusandae atque officia similique nihil
        saepe. Nostrum consequuntur labore neque expedita assumenda optio in
        placeat voluptate minus omnis, alias amet id quo nihil? Aliquid
        laboriosam suscipit, ipsam neque nihil ex veniam nostrum illum magnam
        delectus impedit saepe rem. Quaerat delectus repellat suscipit, illum
        aperiam obcaecati expedita ea totam iure ratione harum tempore itaque
        debitis nihil perferendis. Adipisci commodi, recusandae odit enim
        obcaecati eos reiciendis perspiciatis atque et expedita eligendi quam
        natus magnam ullam quis error nostrum distinctio ducimus molestiae
        ratione illum sunt. Blanditiis odio aut, unde aliquid, dolor vero, earum
        quas porro consequuntur nobis sapiente iure? Quasi, quia iusto.
        Praesentium esse magnam aperiam odio. Molestias repellendus dignissimos
        nihil saepe ipsam mollitia magni sunt quisquam, assumenda eius illo,
        obcaecati aspernatur labore reiciendis tempora, vero consequatur
        asperiores ex similique suscipit. Sequi provident aliquid debitis
        ducimus impedit repellat tempore quis, asperiores consectetur, optio
        amet inventore atque? Harum, reiciendis hic fuga ullam aliquid fugit
        totam nesciunt assumenda!
        </p>*/}
      <div className="search">
        <button type="submit">submit</button>
        <input type="text" name="" id="" />
      </div>
    </section>
  );
}

export default HomeHeader;
