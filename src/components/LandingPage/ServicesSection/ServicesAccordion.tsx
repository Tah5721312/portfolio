import { PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui';
import { AnimatedWrapper } from '@/components/shared';

const services = [
  {
    id: '1',
    title: 'Full Stack Development',
    content:
      'I build scalable web applications from frontend to backend using Next.js, React.js, Node.js, and Express.js. With expertise in TypeScript and modern JavaScript (ES6+), I develop production-ready applications that are deployed online. I create complete solutions including Medical Clinic Management Systems, Inventory & Warehouse Management Systems, and E-Commerce platforms, ensuring seamless integration between frontend and backend components.',
  },
  {
    id: '2',
    title: 'Database Design & Management',
    content:
      'I design and manage databases using PostgreSQL, Oracle Database, and Prisma ORM. Experienced in database schema design, query optimization, and working with both local and cloud-based solutions like Neon (PostgreSQL Cloud). I handle Oracle DB installation, configuration, and connectivity, ensuring efficient data storage and retrieval for complex applications.',
  },
  {
    id: '3',
    title: 'RESTful API Development',
    content:
      'I create secure and efficient RESTful APIs with Node.js and Express.js, implementing input validation using Zod, error handling, and security best practices. I integrate APIs seamlessly with frontend applications, manage authentication with JWT and session management, and ensure proper data flow between client and server for optimal performance.',
  },
  {
    id: '4',
    title: 'Frontend Technologies',
    content:
      'I develop responsive and modern user interfaces using Next.js, React.js, TypeScript, Material-UI (MUI), and Tailwind CSS. I implement pixel-perfect designs with smooth animations and transitions, ensuring cross-browser compatibility and mobile responsiveness. My focus is on creating intuitive user experiences that are both visually appealing and highly functional.',
  },
  {
    id: '5',
    title: 'Authentication & Security',
    content:
      'I implement secure authentication and authorization systems with role-based access control. Using JWT authentication, session management, and security best practices, I ensure that applications are protected against common vulnerabilities. I have successfully implemented secure login systems in production applications like clinic and inventory management systems.',
  },
  {
    id: '6',
    title: 'Deployment & DevOps',
    content:
      'I deploy applications to production using platforms like Vercel, managing environment-based configurations for development and production. I use Git and GitHub for version control, follow Agile methodology, and ensure smooth deployment workflows. I have experience with Docker basics and maintain clean, maintainable code architecture throughout the development lifecycle.',
  },
];

export default function ServicesAccordion() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full" defaultValue="1">
        {services.map((service, idx) => (
          <AccordionItem value={service.id} key={service.id} className="py-2">
            <AnimatedWrapper from="left" delay={idx * 0.15}>
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left leading-6 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-300 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                  <span className="text-xl lg:text-3xl font-bold leading-[1.5] bg-gradient bg-clip-text text-transparent accordion-title relative pl-3 lg:pl-5">
                    {service.title}
                  </span>
                  <PlusIcon
                    className="lg:size-9 size-6 pointer-events-none shrink-0 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base pb-2 ml-5 lg:ml-10">
                {service.content}
              </AccordionContent>
            </AnimatedWrapper>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
