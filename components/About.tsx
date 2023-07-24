import Link from '@/components/Link';
import { SOCIAL } from '@/lib/const';

export default function About() {
  return (
    <div className="w-1/4 max-lg:w-full max-lg:py-12">
      <div>
        <h1 className="mb-12 font-medium text-gray">Ferhat incekara</h1>
        <h2 className="text-white">
          I’m a front-end developer based in Tekirdağ. I have a keen interest in design, artificial
          intelligence, science, and entrepreneurship. I am passionate about creating simple and
          elegant structures. My goal is to contribute to technology and make a positive impact
        </h2>
      </div>

      <div className="mt-20">
        <ul className="flex flex-col gap-y-4">
          <li>
            <Link href={SOCIAL.instagram} className="font-medium text-white" blank>
              Instagram
            </Link>
          </li>
          <li>
            <Link href={SOCIAL.linkedin} className="font-medium text-white" blank>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={SOCIAL.twitter} className="font-medium text-white" blank>
              Twitter
            </Link>
          </li>
          <li>
            <Link href={SOCIAL.github} className="font-medium text-white" blank>
              GitHub
            </Link>
          </li>
          <li>
            <Link href={SOCIAL.dribbble} className="font-medium text-white" blank>
              Dribbble
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
