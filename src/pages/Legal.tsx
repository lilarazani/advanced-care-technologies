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
            Mentions légales
          </h1>
          
          <div className="text-sm text-muted-foreground mb-6">
            En vigueur à partir du 30/07/2025
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p>
              Les présentes mentions légales ont pour objet de définir les conditions dans lesquelles Advanced Care Technologies met à disposition le site et ses services, ainsi que les conditions d'accès et d'utilisation des services par l'Utilisateur. Les Conditions Générales d'Utilisation sont disponibles sur le site sous la rubrique « CGU ».
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 1 : Informations légales</h2>
              <p>
                Le site www.Advanced-Care-Technologies.fr est édité par Advanced Care Technologies, au capital social de 10 000 euros, immatriculée au RCS de Versailles sous le numéro 983264292, dont le siège social est situé au 7 RUE DU BOIS LAINE, 78790 COURGENT, France. Adresse e-mail : manon.frajman@hotmail.fr. Le Directeur de la publication est : ELEUTERIO Gabriel, en qualité de CEO de Advanced Care Technologies. Conformément aux articles 6-III et 19 de la Loi « Confiance dans l'Économie Numérique », il est porté à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales. Le site a été réalisé par : FRAJMAN Manon, COO de Advanced Care Technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 2 : Accès au site</h2>
              <p>
                Le site www.Advanced-Care-Technologies.fr donne accès gratuitement à l'Utilisateur aux services suivants : une présentation de l'entreprise et des informations sur une solution médicale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 3 : Collecte des données</h2>
              <p>
                Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Les données peuvent être conservées pendant une durée maximale de 5 ans après la visite de l'Utilisateur sur le site. Ces données peuvent permettre une prise de décision automatisée, prévenir la fraude ou répondre à des obligations réglementaires qui nécessitent ces informations. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition à ses données personnelles. Pour exercer ce droit, l'Utilisateur peut envoyer un message à la société à l'adresse suivante : manon.frajman@hotmail.fr en précisant ses nom, prénom, adresse e-mail, adresse postale ou toute autre coordonnée permettant de le contacter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 4 : Propriété intellectuelle</h2>
              <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son, etc.) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
              </p>
              <p>
                La marque Advanced Care Technologies est une marque déposée de Advanced Care Technologies. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est totalement prohibée.
              </p>
              <p>
                L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication ou copie des différents contenus. Il s'engage à utiliser les contenus du site dans un cadre strictement privé. Toute utilisation à des fins commerciales ou publicitaires est strictement interdite. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle. Conformément à l'article L122-5 du Code de la propriété intellectuelle, tout Utilisateur qui reproduit, copie ou publie un contenu protégé doit citer l'auteur et sa source.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 5 : Responsabilité</h2>
              <p>
                Les sources des informations publiées sur le site www.Advanced-Care-Technologies.fr sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site www.Advanced-Care-Technologies.fr ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site www.Advanced-Care-Technologies.fr ne peut être tenu responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site. Le site www.Advanced Care-Technologies.fr ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site. La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 6 : Liens hypertextes</h2>
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site www.Advanced-Care-Technologies.fr. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 7 : Cookies</h2>
              <p>
                L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation. Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l'ordinateur de l'Utilisateur par votre navigateur et qui sont nécessaires à l'utilisation du site www.Advanced-Care-Technologies.fr. Les cookies ne contiennent pas d'information personnelle et ne peuvent pas être utilisés pour identifier quelqu'un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l'Utilisateur, d'autres restent. L'information contenue dans les cookies est utilisée pour améliorer le site www.Advanced-Care-Technologies.fr. En particulier en fournissant des informations sur la durée des visites, les modèles de navigation, l'audience, le terminal utilisé ou l'origine du visiteur. En naviguant sur le site, l'Utilisateur les accepte. Toutefois, l'Utilisateur doit donner son consentement quant à l'utilisation de certains cookies. En l'absence de consentement, l'Utilisateur est informé que certaines fonctionnalités ou pages risquent d'être refusées.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Article 8 : Droit applicable et juridiction</h2>
              <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable entre les parties, les tribunaux français seront seuls compétents. Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées inscrites à l'ARTICLE 1.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Crédits</h2>
              <p>
                Ce site a été réalisé en s'inspirant du projet Peekcell.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;