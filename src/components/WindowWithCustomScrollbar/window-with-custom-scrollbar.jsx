import React, { useEffect, useRef, useCallback, useState } from 'react';
import './window-with-custom-scrollbar.scss';
import thumb from './thumb.png';
export default function WindowWithCustomScrollbar({ text }) {
  const content = useRef();
  const scrollThumb = useRef();
  const scrollTrack = useRef();
  let offsetY;
  let scrollTrackStart;
  let trackHeight;
  let thumbItem;
  let thumbHeight;
  let trackY;
  const syncScrollbars = (thumb, elWithScroll, track) => {
    const scrollHeight = elWithScroll.scrollHeight;
    const customBarHeight = track.offsetHeight;
    elWithScroll.addEventListener('scroll', (e) => {
      const ratio = customBarHeight / scrollHeight;
      const newTop = e.target.scrollTop * ratio + 'px';
      thumb.style.top = newTop;
    });
  };
  useEffect(() => {
    trackHeight = scrollTrack.current.offsetHeight;
    thumbItem = scrollThumb.current;
    thumbHeight = thumbItem.offsetHeight;
    scrollTrackStart = scrollTrack.current.getBoundingClientRect().top;
    trackY = scrollTrackStart;
    syncScrollbars(scrollThumb.current, content.current, scrollTrack.current);
    thumbItem.addEventListener('pointerdown', onPointerDown);
  }, []);
  const onPointerMove = useCallback(
    (e) => {
      const event = e;

      const realY = event.clientY;
      let newY = event.clientY - trackY - offsetY;

      if (newY < 0) {
        newY = 0 + thumbHeight / 2 + 'px';
      } else if (newY + thumbHeight > trackHeight) {
        newY = trackHeight - thumbHeight + 'px';
      } else {
        const smth = newY + 'px';
        thumbItem.style.top = smth;
        content.current.scrollBy({
          top: parseInt(newY),
          behavior: 'smooth',
        });
      }
    },
    [offsetY]
  );
  const onPointerDown = (e) => {
    offsetY = e.clientY - thumbItem.getBoundingClientRect().top;
    const onPointerUp = (e) => {
      document.removeEventListener('pointermove', onPointerMove);
    };
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);
  };

  return (
    <div className="custom-window">
      <div className="custom-window__scroll">
        <div className="custom-window__track" ref={scrollTrack}></div>
        <div className="custom-window__thumb" ref={scrollThumb}>
          <img src={thumb} alt="" />
        </div>
      </div>
      <div className="custom-window__text-window">
        <p className="custom-window__text" ref={content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis
          dignissimos aspernatur quo sint ipsa dicta aliquid quas. Molestiae
          reprehenderit, voluptatum sequi repudiandae atque praesentium fugiat
          nihil dolorem fugit illum! Porro eaque voluptate tenetur harum
          corrupti id rem maiores blanditiis, ducimus rerum? Numquam fugiat
          dignissimos voluptates dolor molestiae earum unde magni, recusandae
          iste culpa pariatur fuga impedit quas perspiciatis ipsum! Distinctio
          sint modi odit corporis dolorem laborum eligendi dolorum, odio tempore
          optio est voluptates delectus! Illo velit reprehenderit expedita ab
          doloremque facere in, tenetur ducimus, cupiditate dignissimos veniam
          inventore quo. Neque sint incidunt asperiores necessitatibus magni est
          dolore in voluptas beatae, possimus fugiat temporibus ipsum similique
          enim amet at blanditiis, dolorum animi, vitae voluptates illum fugit
          sunt. Sapiente, voluptate doloribus. Saepe porro commodi, deleniti
          labore inventore vitae iure sequi eveniet quaerat quia nihil ipsa,
          alias nisi. Ipsam, officia laboriosam cumque, sequi officiis
          consectetur nam, laudantium nihil sed ducimus unde nemo. Voluptatibus
          quod ea alias a temporibus magnam debitis commodi mollitia non tenetur
          animi tempora nihil repellendus, saepe quas eos in cumque. Ullam
          corrupti eligendi aliquam et impedit possimus magni nesciunt.
          Voluptatem sint iste, esse enim ducimus in earum. Enim possimus at
          autem dicta reprehenderit ratione expedita aliquid ipsa exercitationem
          accusantium voluptatem vel temporibus, minus atque asperiores tenetur,
          error magnam laboriosam! Error sequi odit non quibusdam, eligendi
          omnis. Consectetur dignissimos deleniti hic sequi porro ipsa odit.
          Itaque aspernatur incidunt quisquam temporibus possimus velit
          reiciendis voluptatibus, illum quos esse, sit harum libero. Iure
          provident debitis eos numquam ipsam illo placeat repellat, explicabo
          nesciunt dolorum ad tempore minus tenetur veritatis accusamus
          deleniti? Alias maiores, magnam unde ex temporibus nihil voluptatem
          dolores asperiores inventore. Mollitia tenetur eos nam fugit quos
          ullam voluptatem accusantium facere ratione totam omnis officia a
          dolore exercitationem commodi, itaque adipisci asperiores illum
          praesentium cumque nesciunt cum id? Reprehenderit, placeat suscipit?
          Harum, iste aliquid! Beatae, impedit! Architecto, delectus
          consequuntur animi aut facilis eligendi ad. Ratione dolore, adipisci
          nulla sunt animi soluta, quod quasi, in a vel rerum harum consectetur
          culpa totam. Dolor quibusdam earum amet aliquam quod autem animi eos
          sint, provident ab, quas facere nihil nemo voluptates error
          exercitationem, voluptatum iusto soluta voluptas iure officia fugiat
          ea est. Sunt, adipisci? Laboriosam labore pariatur similique quos
          cumque nesciunt asperiores quisquam aperiam aliquid optio adipisci,
          debitis quibusdam non totam voluptatibus! Repudiandae distinctio
          possimus minima quibusdam ullam dolorum dicta quos saepe, ex incidunt.
          Ad nulla itaque veniam distinctio. Quas deleniti voluptatum expedita
          eum nihil libero, fugit temporibus doloribus aliquid ex, praesentium
          officia, suscipit itaque minima laboriosam ad! Doloribus, nihil!
          Blanditiis rerum odit quos! Quibusdam placeat itaque incidunt pariatur
          amet adipisci quae fuga a eligendi, sunt tempore animi, mollitia
          tenetur labore nemo ut ducimus dolore alias, explicabo ex quos! Sunt
          repellat ipsum commodi autem? Aperiam, illum ullam sapiente doloremque
          perferendis dolores, suscipit soluta expedita, dolorum aliquam quas?
          Sed, modi maiores debitis beatae quae doloribus ex earum voluptatum
          quo quidem soluta, exercitationem ad voluptates autem. Aliquid at
          nihil aperiam deleniti. Dolorem ullam suscipit labore corrupti
          deleniti porro, sapiente eaque consequatur asperiores? Officiis iure
          neque eveniet corrupti officia ipsam, voluptates ipsa eaque mollitia
          in, facilis voluptas? Nobis quibusdam natus cupiditate laborum
          blanditiis exercitationem error odio sunt molestias libero nesciunt,
          voluptas cum expedita harum magnam voluptatibus quod unde eaque
          aliquid vero ducimus beatae praesentium. Fugiat, ratione
          exercitationem! Facilis, eos reiciendis voluptas adipisci nulla
          exercitationem nesciunt sed neque vel quibusdam ad, error consectetur
          dolorem sint, quisquam provident est ducimus nostrum saepe nemo autem.
          Illum soluta repudiandae cum? Nihil. Quis eos tenetur omnis sunt quas
          maiores eum nam provident magni magnam itaque numquam at quasi,
          recusandae eveniet sit id inventore quae, praesentium ut. Quibusdam
          cumque necessitatibus excepturi odit mollitia. Ipsa quas dicta nobis
          eius ab. Labore, sint. Quidem sed nulla amet tenetur repellendus?
          Maiores minima aliquid culpa placeat optio. Nemo, magni tempora autem
          impedit doloribus laborum dolore hic sapiente. Nobis dolorem, totam
          rem, nihil maxime dignissimos dicta error veniam illo sit doloribus
          nemo accusantium possimus. Dolor nemo accusamus veniam error culpa, in
          cumque, reiciendis corporis magnam veritatis voluptate consequatur.
          Debitis laboriosam facilis ducimus ullam, rerum assumenda dolore esse
          ad deserunt itaque similique! Doloremque eaque magni ad molestias
          repudiandae possimus nobis, temporibus laborum unde esse. Nihil, at!
          Vero, nisi repudiandae? Magni sint natus sapiente ab dolore error
          aperiam voluptatum itaque deleniti totam rerum tempora sed, earum
          optio repudiandae iste modi quasi nobis consequuntur pariatur,
          eligendi animi vitae! Est, quae culpa? Ducimus, ex illo earum possimus
          voluptatum nemo? Porro, pariatur minima. Aliquid delectus nostrum
          saepe beatae amet, velit sequi repudiandae itaque similique. Repellat
          repellendus itaque quibusdam asperiores corrupti, in illum debitis.
          Error reiciendis tempore inventore accusantium aliquam odio pariatur
          tempora soluta minima nostrum consectetur consequuntur maiores
          consequatur, enim recusandae in eveniet similique iusto dignissimos!
          Est eligendi fugiat placeat nihil animi magnam. Ipsum odio labore
          distinctio ex ad numquam unde nemo sed odit exercitationem magnam,
          illo nulla ducimus cumque voluptas, ea temporibus. Mollitia obcaecati
          corporis at quos maiores harum aliquam quia alias. Recusandae corrupti
          nulla consequatur. Asperiores sapiente cum impedit molestiae pariatur
          error voluptatum laudantium obcaecati quia, minus cupiditate deleniti,
          aliquid enim assumenda quasi ipsam laboriosam provident consequuntur.
          Quisquam voluptas esse deserunt. Inventore ratione impedit
          voluptatibus obcaecati! Placeat asperiores omnis iusto adipisci hic
          consequuntur consequatur saepe fugit ipsa aspernatur eius dicta
          explicabo quam aut ab, error exercitationem nobis molestiae quas,
          ipsam itaque? Pariatur incidunt sapiente iste iure, eius quisquam
          asperiores aperiam corrupti, libero, aliquam error est porro esse in
          hic expedita ex cumque distinctio dolores id ducimus officiis! Totam
          incidunt nihil molestias? Sed tenetur adipisci architecto et beatae
          totam dolores vero velit, id saepe placeat harum unde quae autem
          maiores tempore nam iure possimus earum? Cupiditate obcaecati
          distinctio, laudantium quas eum tempore! Repellat autem accusantium
          tempora enim velit nesciunt illo quam fugit molestias delectus eum,
          nulla eos dignissimos quisquam illum magnam quaerat in, corrupti optio
          quis, voluptatem facilis facere officiis. Soluta, distinctio! Neque
          non tenetur ipsam temporibus ex et provident blanditiis! Ex fuga iste
          quam ipsa. Error odio ab blanditiis, aliquid in eligendi dicta
          quisquam laudantium, quod quis necessitatibus corrupti nam eaque. Id
          perspiciatis facilis dignissimos tempora explicabo recusandae, quis
          dolore quo numquam! Placeat dignissimos soluta iusto maxime molestiae
          corporis, vel sint sunt consectetur aliquam neque, quis totam
          repellendus laborum natus nobis. Soluta iste rem officiis molestiae,
          similique illo. Assumenda veniam beatae odit voluptatibus ea nemo
          laudantium dolorum similique maxime amet non, natus a rem excepturi
          minus numquam suscipit dolor sit optio. Quaerat, quasi! Deleniti
          voluptatibus accusantium voluptatem! In sunt consequuntur nesciunt,
          corporis, qui saepe soluta nisi dignissimos laborum fuga ad quisquam
          quod, aperiam harum? Consequuntur, quaerat eveniet voluptates
          voluptatibus ut quod! Pariatur sapiente perferendis sequi magni
          necessitatibus labore molestias! Ullam id praesentium laborum vero
          nobis quibusdam non nemo blanditiis ea error maxime omnis, suscipit,
          maiores nesciunt, dignissimos quo alias fuga consequuntur. Dignissimos
          ullam quae nobis dolorem ratione quisquam placeat, aut quidem culpa
          eum. Accusamus vitae, officiis est cum quidem adipisci. Quo suscipit
          esse fuga velit tenetur ipsa odio! Dolore, laborum dicta? Praesentium,
          porro adipisci pariatur omnis error dicta. Dicta quibusdam, ducimus
          repellat ab alias molestias laboriosam delectus ipsa corrupti quasi,
          praesentium, pariatur quidem! Laudantium error omnis magnam neque
          consequuntur sed voluptas? Nesciunt, harum deleniti. Voluptate sed
          repudiandae vel. Obcaecati molestias nostrum magnam accusamus quaerat
          itaque, aut ad animi, laborum, quasi fugiat. Facere maiores eveniet
          totam dolorum molestias ex inventore beatae sit! Repellat assumenda
          deserunt quis ab quasi saepe tenetur eum, exercitationem possimus,
          quaerat minus velit id? Explicabo maiores, a recusandae eum minima
          necessitatibus animi soluta nihil fuga, dolorem quasi sapiente. Velit.
          Quod cupiditate provident porro. Repudiandae, maiores a? Accusamus
          assumenda ipsum beatae, repudiandae molestias porro minus facilis quam
          totam atque, impedit quas molestiae quasi. Nisi quasi voluptas
          deleniti modi autem aut! Nesciunt nihil eveniet laboriosam voluptate
          architecto dignissimos aliquid nostrum facilis nulla. Temporibus,
          tempore facere maxime nesciunt harum amet beatae optio quod
          reprehenderit deserunt expedita nam assumenda explicabo. Iste,
          voluptatibus? Commodi. Recusandae unde enim, alias reprehenderit
          eligendi laborum qui illo assumenda dolorum rerum eos consequatur et
          tempore fuga excepturi beatae fugit laboriosam error eius at? Beatae
          neque illo consequatur impedit aperiam! Officiis vero molestias
          facilis non et soluta esse deserunt illo amet laboriosam assumenda
          iure corrupti modi neque aperiam praesentium doloremque in aliquid,
          nihil quam sit voluptate ducimus libero fugit. Asperiores? Fuga minus
          temporibus dolores laborum rerum nulla esse ad, quaerat suscipit
          doloremque ea, officia deserunt earum laboriosam inventore dolorem aut
          exercitationem enim vel illum. Tempora natus ducimus similique quaerat
          aliquam. Quasi voluptatum accusamus itaque nisi praesentium impedit,
          vitae, veniam, amet error nam distinctio incidunt delectus alias
          nihil. Eveniet reiciendis mollitia, nisi maiores perspiciatis sit
          totam eligendi, vitae qui explicabo rerum! Sequi quod praesentium
          vitae soluta voluptatum quaerat voluptates distinctio ipsam hic?
          Numquam architecto repellat, doloribus dolores soluta omnis quas at
          minus odit, ex maxime. Aliquid nulla atque assumenda eos ut. Delectus
          hic labore deleniti unde cum natus architecto eaque eos impedit
          dolorum, esse totam cumque? Cumque quisquam aliquam voluptas, minima
          at molestias voluptates voluptate vero in aspernatur excepturi ipsa
          eos. Iusto nobis natus dolorem officiis doloremque debitis aut
          excepturi ipsa laborum consequuntur blanditiis exercitationem esse,
          quidem ipsam laboriosam. Repudiandae voluptate deleniti ad, vero
          molestias accusantium. Iure nisi fuga perspiciatis recusandae.
        </p>
        {/* <div className="custom-window__fade"></div> */}
      </div>
    </div>
  );
}
