import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product, product: { url } }: Props) {
  const possibilities = useVariantPossibilities(product);

  return (
    <ul class="flex flex-col gap-4 items-center border-t-[1px] pt-3">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2 text-center">
          <span class="text-xs font-semibold">
            {name === "Tamanho" ? "Selecione o tamanho:" : name}
          </span>
          <ul class="flex flex-row gap-3">
            {Object.entries(possibilities[name]).map(([value, [link]]) => (
              <li>
                <a href={link}>
                  <Avatar
                    content={value}
                    variant={link === url ? "active" : "default"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
