import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      {/* Header */}
      <Header />
      <section className="container-fluid mx-auto max-w-xl px-4 md:px-0 mt-10 mb-10 md:mt-16 md:mb-20">
        <div className="title space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3444]">
            Privacy Policy
          </h1>
          <p className="text-subTitleColor">Last modification: 1/8/2021</p>
        </div>
        <div className="content text-subTitleColor mt-10 md:mt-16 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            commodo est laoreet metus maximus, in ornare nulla mattis.
            Vestibulum at quam enim. Quisque efficitur et purus quis venenatis.
            Pellentesque volutpat nunc ac purus tincidunt, sit amet bibendum
            tortor ultricies. Integer vel est sem. Integer malesuada massa in
            magna vehicula, sit amet lacinia quam faucibus. Duis luctus
            consequat nisi, id consequat urna vehicula eget. Pellentesque id
            metus aliquam, venenatis nunc non, consectetur sem. Morbi tristique
            ac elit a ullamcorper.
          </p>
          <p>
            Pellentesque porttitor finibus dapibus. Praesent elementum nibh
            vitae nulla aliquet egestas. Duis quis ipsum sollicitudin,
            consectetur leo quis, dictum elit. Aenean ipsum tortor, blandit in
            ligula id, pharetra aliquet augue. Morbi sit amet rhoncus ante.
            Aliquam mi eros, accumsan in hendrerit sed, mollis at sapien. In
            rutrum tortor turpis, sit amet tincidunt arcu vestibulum nec.
          </p>
          <h3 className="text-2xl text-titleColor">
            Who We Are and What This Policy Covers
          </h3>
          <p>
            Maecenas laoreet dui et lacinia iaculis. Praesent lobortis iaculis
            turpis in vulputate. Aenean eu nunc nec ante posuere malesuada vel
            in ipsum. Mauris convallis ex sed ultrices semper. Phasellus
            vehicula cursus nulla nec malesuada. Nullam vestibulum accumsan
            arcu, et vulputate tellus egestas non. Maecenas suscipit tincidunt
            vehicula. Proin feugiat interdum enim, vitae eleifend mi blandit
            mollis. Nunc accumsan nibh elit, in iaculis mauris blandit ut.
            Vivamus pellentesque ornare ligula, et accumsan dolor sodales sed.
            Nam vel metus sed ante egestas bibendum ut vitae ex. Aliquam sed
            luctus quam, ac fermentum magna. Ut porttitor eros eget ligula
            porttitor, ac finibus tellus venenatis. Phasellus et mauris id erat
            finibus ornare maximus ac purus. Nulla nibh orci, rhoncus in
            malesuada ac, finibus nec dolor.
          </p>
          <p>
            Aenean maximus, felis in pulvinar efficitur, eros lorem tempus nibh,
            nec vestibulum arcu felis luctus lectus. In sit amet cursus nibh. In
            turpis erat, finibus eget ultricies vitae, ullamcorper eget sem.
            Maecenas in lectus a neque sollicitudin ultrices. Cras ultricies dui
            mattis tincidunt fermentum. Nunc suscipit massa erat, at vehicula
            erat faucibus non. Pellentesque elementum turpis at sapien luctus
            mattis. Vivamus felis mi, cursus quis elit ac, pellentesque
            malesuada erat.
          </p>
          <h3 className="text-2xl text-titleColor">Information We Collect</h3>
          <p>
            Nulla in ligula nec lorem imperdiet vulputate. Donec at metus
            hendrerit, convallis dolor mollis, tincidunt felis. Aliquam tortor
            nulla, fringilla commodo mollis sed, volutpat sed urna. Vestibulum
            sollicitudin feugiat sapien id tincidunt. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Cras pharetra tristique tellus et condimentum. Mauris
            ullamcorper arcu eget tincidunt dignissim. Fusce sed nunc leo. Nulla
            nisl tellus, lobortis quis varius eget, porttitor non nisl. Praesent
            tristique consectetur lacus, sed aliquet erat accumsan sit amet.
            Nunc eu ante orci. Nulla at gravida magna. Nulla in congue felis,
            nec cursus eros. Mauris ut placerat lacus. Mauris lorem elit,
            aliquam non erat nec, viverra lobortis dui.
          </p>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}