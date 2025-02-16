import { useEffect, useRef, useState } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { Icon } from "@iconify/react";
import InputText from "../components/global/input/InputText";
import TextArea from "../components/global/input/TextArea";
import Button from "../components/global/button";

const ContactUs = () => {
  const mapContainer = useRef(null);
  const map = useRef<maplibregl.Map | null>(null);
  const longitude = 106.8205877;
  const latitude = -6.2984519;

  const [contactPayload, setContactPayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const submit = () => {
    const mailtoLink = `mailto:haidarmn31@gmail.com?subject=${encodeURIComponent(contactPayload.firstName + " " + contactPayload.lastName)}&body=${encodeURIComponent(contactPayload.message)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current || "",
      style: `https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`,
      center: [longitude, latitude],
      zoom: 16,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#de7119" })
      .setLngLat([longitude, latitude])
      .addTo(map.current);
  }, []);

  return (
    <section className="container flex flex-col justify-between gap-10 py-8 lg:flex-row">
      <div className="flex w-full flex-col gap-8 lg:w-1/2">
        <h1 className="title">Get in Touch</h1>
        <p className="text-sm md:text-base">
          Meet our best customer support that you can contact anytime and
          anywhere to help solve your problem
        </p>

        <div className="flex flex-col gap-4">
          <span className="text-base font-semibold md:text-lg">Chat to us</span>
          <div className="flex flex-row items-center gap-2">
            <Icon icon="simple-icons:whatsapp" className="text-2xl" />
            <a
              href="https://wa.me/6285235118859"
              className="hover:text-primary"
            >
              +62 852 3511 8859
            </a>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Icon icon="simple-icons:gmail" className="text-2xl" />
            <a href="mailto:help@roomrent.id" className="hover:text-primary">
              help@roomrent.id
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-base font-semibold md:text-lg">
            Social media
          </span>
          <div className="flex flex-row items-center gap-4">
            <a href="https://instagram.com">
              <Icon icon="simple-icons:instagram" className="text-2xl" />
            </a>
            <a href="https://linkedin.com">
              <Icon icon="simple-icons:linkedin" className="text-2xl" />
            </a>
            <a href="https://tiktok.com">
              <Icon icon="simple-icons:tiktok" className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-4 xl:flex-row">
            <InputText
              name="firstName"
              label="First Name"
              placeholder="First name"
              initialValue={contactPayload.firstName}
              updateValue={(val) =>
                setContactPayload((prevValue) => ({
                  ...prevValue,
                  firstName: val,
                }))
              }
            />
            <InputText
              name="lastName"
              label="Last Name"
              placeholder="Last name"
              initialValue={contactPayload.lastName}
              updateValue={(val) =>
                setContactPayload((prevValue) => ({
                  ...prevValue,
                  lastName: val,
                }))
              }
            />
          </div>

          <InputText
            name="email"
            label="Email"
            placeholder="johnDoe@example.com"
            initialValue={contactPayload.email}
            updateValue={(val) =>
              setContactPayload((prevValue) => ({
                ...prevValue,
                email: val,
              }))
            }
          />

          <TextArea
            name="message"
            label="Message"
            placeholder="How can we help you?"
            initialValue={contactPayload.message}
            updateValue={(val) =>
              setContactPayload((prevValue) => ({
                ...prevValue,
                message: val,
              }))
            }
          />

          <Button onClick={submit}>Send Message</Button>
        </div>
      </div>

      <div ref={mapContainer} className="min-h-80 w-full rounded-md lg:w-1/2" />
    </section>
  );
};

export default ContactUs;
