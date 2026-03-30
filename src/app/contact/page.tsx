"use client";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("\u00a1Gracias por tu mensaje! Te responderemos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-linear-to-b from-primary/20 to-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contacto
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? Nos encantaía escucharte. Envía-nos un mensaje y
            responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ponte en Contacto</h2>
              <p className="text-muted-foreground">
                Estamos aquí para ayudarte y responder cualquier pregunta que tengas. ¡Esperamos
                contar de ti!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                  <a
                    href="mailto:contact@movies.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@movies.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Responderemos dentro de 24 horas
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    De lunes a viernes de 9am a 6pm PST
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Oficina</h3>
                  <p className="text-muted-foreground">
                    123 Calle de Cine
                    <br />
                    Los Angeles, CA 90028
                    <br />
                    Estados Unidos
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg border bg-muted h-64 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu.correo@ejemplo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje *</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre tu consulta..."
                  required
                  rows={6}
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
