type Props = {
  bank: { code: string; name: string; logo: string };
  size?: number; // px
};

export function BankLogo({ bank, size = 64 }: Props) {
  return (
    <figure className="flex flex-col items-center gap-2">
      <img
        src={bank.logo}
        alt={bank.name}
        width={size}
        height={size}
        className="rounded-md shadow"
      />
      <figcaption className="text-sm text-center">{bank.name}</figcaption>
    </figure>
  );
}
