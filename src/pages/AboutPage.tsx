
import MainLayout from "@/components/layout/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gaming-black rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gaming-red mb-8">About ACSV</h1>
          <div className="space-y-6 text-gaming-white">
            <p className="leading-relaxed">
              The Association Camerounaise des Sports Virtuels (ACSV), established in 2002 in Douala, Cameroon, is the leading federative body for the development and promotion of esports in Cameroon and Africa. Initially formed by passionate video game enthusiasts, it was officially legalized in 2009 and recognized by the Cameroonian state in 2010.
            </p>
            <p className="leading-relaxed">
              The ACSV aims to professionalize esports across Cameroon and Africa. Notably, it represented Cameroon at the African Confederation of Digital Sports (ACDS)'s inaugural General Assembly in Casablanca, Morocco, from June 25 to 28, 2023, where it was elected as one of the nine members of the first executive committee among 41 participating countries.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
