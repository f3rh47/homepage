import { SOCIAL } from '@/lib/const';

export default function LetsTalk() {
  return (
    <div className="w-1/4 self-end pl-16 text-right max-lg:w-full max-lg:self-auto max-lg:pl-0 max-lg:text-center">
      <h4 className="mb-8 text-xs text-gray">
        Feel free to reach out if you have any new ideas, feedback, or just want to meet
      </h4>
      <a
        href={`mailto:${SOCIAL.email}`}
        className="inline-flex items-center rounded-full bg-sweet-corn px-3 py-1.5 text-center text-xs font-semibold uppercase text-cod-gray"
      >
        Lets Talk
      </a>
    </div>
  );
}
