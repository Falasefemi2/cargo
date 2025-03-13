import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export default function FAQSection() {
    const faqs = [
        {
            question: "What is Harlivia all about?",
            answer:
                "Harlivia is a multi-industry enterprise committed to excellence across Food Production, Real Estate, Energy, and Logistics. We create solutions that improve everyday life - whether it's through quality food, great homes, sustainable energy, or seamless cargo & logistics services.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "We specialize in developing innovative solutions across multiple sectors, focusing on sustainability and quality in everything we do. Our integrated approach allows us to create comprehensive solutions that address modern challenges.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "Our mission is to enhance daily living through thoughtful innovation and sustainable practices. We believe in creating lasting value for our customers and communities across all our business sectors.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "As a forward-thinking company, we invest in cutting-edge technologies and sustainable practices to ensure we deliver the best possible solutions in food production, real estate development, energy solutions, and logistics services.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "We're committed to building a better future through our diverse portfolio of services and solutions. Our integrated approach allows us to create synergies across industries while maintaining the highest standards of quality and sustainability.",
        },
    ]

    return (
        <div className="w-full bg-[#F7F7F7] px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="grid lg:grid-cols-2 items-start">
                        {/* FAQ Section */}
                        <div className="p-8 space-y-6">
                            <h2 className="text-primary text-sm font-medium">• Frequently asked questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left text-[#000000] font-medium">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-[#767676] font-light">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Image Section */}
                        <div className="relative aspect-square lg:aspect-auto lg:h-full order-first lg:order-last">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/fd2c/0775/46650f6333e69b2e4390f10ec203cafa?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aK2czQH5F7UsWbKUSSDcZ9WuSDeuZPaAj2f7subYXBHivqVFv4oDQ41rSG~XtIYxk7VSPznaTo7FeWUUTyXnfPKvYbhFHR6tPPVtMqg1evWy77X5IrIxAgjXVopLOmYbvSI5DcjHZrSB5VllJVqXpko5qVbWEwJfhVvxMFv6bANkvfU4UjjtQK6TRTp89u8cLFXn-bKAFXpYDV5wrCrRZHQY-cCzKLnQBSoix1gzh-WFH8w70RnDG6HcMx~xdv~O5q31jVJeAs5Qb4F~GFyHyeuzbnV08V1weac6XbtmfkzVQsm~rFj2OUHYxylEOOCMbyqwhHnWhsIzkwzQzYUomA__"
                                alt="Blue light bulb illustration"
                            // className="w-[375px] h-[517px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

