import { useEffect, useState } from "react";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import Tab from "../../global/tab";

const SpaceType = () => {
  const tabItems = [
    { value: "work-space", label: "Work Space" },
    { value: "meeting-room", label: "Meeting Room" },
    { value: "birthday", label: "Birthday Party" },
    { value: "wedding", label: "Wedding" },
  ];

  const spaceTypes = [
    {
      id: "work-space",
      people: "1 - 10",
      location: 450,
      description:
        "A workspace is a professional environment designed to accommodate individuals or teams for tasks such as remote work, collaboration, or running a business. Workspaces can include coworking areas, hot desks, or private offices, often equipped with amenities like high-speed internet, ergonomic furniture, meeting rooms, and shared facilities like kitchens or lounges. They are popular among freelancers, startups, and businesses seeking flexibility without committing to long-term office leases.",
    },
    {
      id: "meeting-room",
      people: "10 - 30",
      location: 230,
      description:
        "A meeting room is a designated space tailored for hosting discussions, presentations, or brainstorming sessions in a professional setting. These rooms are usually equipped with tools like projectors, whiteboards, video conferencing equipment, and comfortable seating arrangements to facilitate effective communication. Meeting rooms are commonly rented by businesses for client meetings, team discussions, or workshops.",
    },
    {
      id: "birthday",
      people: "10 - 100",
      location: 120,
      description:
        "A birthday party room is a venue designed to host birthday celebrations, offering decorations, dining facilities, and entertainment options. These spaces often include tables, chairs, and areas for games or performances, making them ideal for gatherings of family and friends. Some venues also provide additional services like catering, event planning, or themed decorations to enhance the celebration.",
    },
    {
      id: "wedding",
      people: "50 - 500",
      location: 100,
      description:
        "A wedding room is a grand venue designed to host wedding ceremonies and receptions, featuring elegant decor, banquet-style seating, and a stage or altar for the couple. These venues often include lighting, sound systems, and areas for dining and dancing, providing an all-in-one solution for a memorable celebration. Many wedding rooms offer packages that include catering, photography, and event coordination services.",
    },
  ];

  const [activeTab, setActiveTab] = useState("work-space");
  const [selectedSpace, setSelectedSpace] = useState<{
    id: string;
    people: string;
    location: number;
    description: string;
  }>();

  const findSelectedSpace = () => {
    const data = spaceTypes.find((item) => item.id === activeTab);

    setSelectedSpace(data);
  };

  useEffect(() => {
    findSelectedSpace();
  }, [activeTab]);

  return (
    <>
      <h1 className="title text-center">What Space Are We Looking For?</h1>

      <div className="container flex flex-col gap-8">
        <Tab
          items={tabItems}
          activeTab={activeTab}
          updateValue={(val) => setActiveTab(val)}
        />

        <div className="flex w-full flex-col-reverse items-center justify-between gap-8 xl:flex-row xl:gap-4">
          <div className="flex w-full flex-col gap-4 md:gap-6 xl:w-1/2">
            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              <div className="flex flex-row items-center gap-2">
                <Icon icon="ic:baseline-people-alt" />
                <span>{selectedSpace?.people} people</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Icon icon="material-symbols:location-on-rounded" />
                <span>{selectedSpace?.location} locations</span>
              </div>
            </div>

            <p>{selectedSpace?.description}</p>
          </div>

          <div className="size-96 max-w-full bg-light xl:max-w-[50%]"></div>
        </div>
      </div>
    </>
  );
};

export default SpaceType;
