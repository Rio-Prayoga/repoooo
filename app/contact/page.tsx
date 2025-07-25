export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">
            <span className="text-gray-800">Home</span> / Kontak
          </p>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Google Maps</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.45331784033!2d106.82306879999999!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1641234567890!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#212529' }} // ganti dengan kode warna yang kamu mau
                  >
                    Alamat:
                  </h3>
                <p style={{ color: '#585B5E' }}>Jl.M.Kahfi II Gg.Perikanan RT/RW 005/006 Kec.Jagakarsa Kel.Srengseng sawah, Jakarta Selatan</p> {/* <- Ubah warna di sini */}
              </div>

              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#212529' }} // ganti dengan kode warna yang kamu mau
                  >
                    Telepon:
                  </h3>
                <p style={{ color: '#585B5E' }}>08987169353</p> {/* <- Ubah warna di sini */}
              </div>

              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#212529' }} // ganti dengan kode warna yang kamu mau
                  >
                    WhatsApp:
                  </h3>
                <p style={{ color: '#585B5E' }}>08987169353</p> {/* <- Ubah warna di sini */}
              </div>

              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: '#212529' }} // ganti dengan kode warna yang kamu mau
                  >
                    Email:
                  </h3>
                <p style={{ color: '#585B5E' }}>loftyflorist@gmail.com</p> {/* <- Ubah warna di sini */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}