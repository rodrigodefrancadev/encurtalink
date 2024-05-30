import { FormControl, Input, FormErrorMessage, Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useHomeContext } from "../context";

const formSchema = z.object({
  link: z.string().url("Link Inválido"),
});

type FormData = z.infer<typeof formSchema>;

export const ShortLinkForm: FunctionComponent = () => {
  const homeContext = useHomeContext();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formData: FormData) {
    const link = formData.link;
    if (!link) return;

    const response = await fetch("/api/short-link", {
      method: "POST",
      body: JSON.stringify({
        link: link,
      }),
    });

    const linkCurto = await response.json();
    const slug = linkCurto.slug;
    homeContext.setSlug(slug);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl w="100%" isInvalid={!!errors.link}>
        <Input
          w="100%"
          placeholder="https://www.seulink.com"
          {...register("link")}
        />
        <FormErrorMessage>
          <span>{errors.link && errors.link.message}</span>
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={isSubmitting}
        type="submit"
        colorScheme="purple"
        mt={4}
        w="100%"
      >
        Encurtar Link!
      </Button>
    </form>
  );
};
