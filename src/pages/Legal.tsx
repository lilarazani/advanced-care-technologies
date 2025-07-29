import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Legal = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            ← Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl font-bold text-primary mb-8">
            Mentions Légales & Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Mentions Légales</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  <strong>Raison sociale :</strong> Advanced Care Technologies
                </p>
                <p>
                  <strong>Forme juridique :</strong> [À compléter]
                </p>
                <p>
                  <strong>Adresse du siège social :</strong> [À compléter]
                </p>
                <p>
                  <strong>Numéro de téléphone :</strong> [À compléter]
                </p>
                <p>
                  <strong>Adresse e-mail :</strong> [À compléter]
                </p>
                <p>
                  <strong>Numéro SIRET :</strong> [À compléter]
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> Gabriel ELEUTERIO
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Hébergement</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Le site web est hébergé par [À compléter - nom de l'hébergeur, adresse, téléphone].
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Conditions Générales d'Utilisation</h2>
              <div className="space-y-4 text-foreground">
                <h3 className="text-xl font-medium text-primary">1. Objet</h3>
                <p>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web d'Advanced Care Technologies.
                </p>

                <h3 className="text-xl font-medium text-primary">2. Accès au site</h3>
                <p>
                  L'accès au site est gratuit. Les frais de connexion et d'équipement nécessaires pour accéder au site sont à la charge de l'utilisateur.
                </p>

                <h3 className="text-xl font-medium text-primary">3. Propriété intellectuelle</h3>
                <p>
                  Tous les contenus présents sur ce site (textes, images, logos, etc.) sont protégés par les droits de propriété intellectuelle et appartiennent à Advanced Care Technologies.
                </p>

                <h3 className="text-xl font-medium text-primary">4. Protection des données personnelles</h3>
                <p>
                  Conformément au RGPD, nous nous engageons à protéger vos données personnelles. [Détails à compléter selon la politique de confidentialité].
                </p>

                <h3 className="text-xl font-medium text-primary">5. Responsabilité</h3>
                <p>
                  Advanced Care Technologies ne saurait être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.
                </p>

                <h3 className="text-xl font-medium text-primary">6. Droit applicable</h3>
                <p>
                  Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront compétents.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact</h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Pour toute question concernant ces mentions légales ou les CGU, vous pouvez nous contacter à l'adresse : [email à compléter]
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;