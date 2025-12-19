import { tv } from 'tailwind-variants';

const titleStyles = tv({
  base: 'bg-gradient-to-r from-[#00d3f3] to-[#ac47ff] bg-clip-text text-transparent font-bold',
  variants: {
    size: {
      small: 'text-xl ',
      big: 'text-5xl',
    },
  },
});

export default function Title({ size, children, className }: { size: 'small' | 'big'; children: React.ReactNode; className?: string }) {
    const Tag = size === 'big' ? 'h1' : 'h2';

    return (
        <Tag className={titleStyles({ size }) + (className ? ` ${className}` : '')}>
            {children}
        </Tag>
    );
}