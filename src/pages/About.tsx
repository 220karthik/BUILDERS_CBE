
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const achievements = [
  { title: "10,000+ Deliveries", description: "Delivered materials to over 10,000 construction sites with excellence." },
  { title: "20 Years of Excellence", description: "Two decades of trusted service in the construction industry." },
  { title: "Certified Materials", description: "Providing ISO-certified, top-grade materials only." },
];

const projects = [
  {
    name: "Pollachi mahalingam college",
    image: "https://drmcet.ac.in/wp-content/uploads/2022/06/banner2-1000x400-1.jpg",
    description: "Supplied structural and finishing materials for a this building."
  },
  {
    name: "Green Valley Villas",
    image: "https://i.pinimg.com/736x/f5/7c/6c/f57c6cd313dff7f52b20de401a925f2b.jpg",
    description: " Build and Delivered eco-conscious supplies to 30+ luxury villas."
  },
  {
    name: "City Shop Renovation",
    image: "https://imagecdn.99acres.com/media1/11938/19/238779775M-1734839581320.webp",
    description: "Material partner in this retail refurbishment."
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-construction-700 mb-4">About KMT Building Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for construction materials since 2004. We pride ourselves on quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="mb-4">
                Founded in 2004, KMT Building Solutions began as a small family business with a vision to provide quality construction materials to local builders and contractors.
              </p>
              <p className="mb-4">
                Over the years, we've grown into one of the region's most trusted suppliers, serving contractors, architects, and homeowners across Tamil Nadu.
              </p>
              <p>
                Our commitment to quality, competitive pricing, and customer satisfaction has been the foundation of our success. We continue to expand our product range while maintaining the personal touch that sets us apart.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="KMT Building Solutions Team" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-construction-600">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{achievement.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={4/3}>
                  <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                </AspectRatio>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To provide premium quality construction materials at competitive prices while delivering exceptional customer service. We aim to be the preferred supplier for all construction projects in our region.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To become the leading supplier of construction materials in South India, known for superior quality, reliability, and innovation in the building materials industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
