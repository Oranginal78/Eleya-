import React from 'react';
import BasePage from './BasePage';

const MentionsLegalesPage = () => {
    return (
        <BasePage>
            <section className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            Mentions Légales
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Informations légales concernant le site web et l'entreprise ELEYA.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20" style={{
                backgroundColor: '#FFFBF7',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 space-y-8">
                            {/* Identification de l'entreprise */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    1. Identification de l'entreprise
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Dénomination sociale :</strong> ELEYA</p>
                                    <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                                    <p><strong>Capital social :</strong> 100 000 €</p>
                                    <p><strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                                    <p><strong>RCS :</strong> Paris B 123 456 789</p>
                                    <p><strong>SIRET :</strong> 123 456 789 00012</p>
                                    <p><strong>Code APE :</strong> 6202A</p>
                                    <p><strong>Numéro de TVA intracommunautaire :</strong> FR12345678901</p>
                                </div>
                            </div>

                            {/* Directeur de publication */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. Directeur de publication
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Directeur de publication :</strong> [Nom du directeur]</p>
                                    <p><strong>Email :</strong> contact@eleya.ai</p>
                                    <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                                </div>
                            </div>

                            {/* Hébergement */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Hébergement du site
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                                    <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                                    <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
                                </div>
                            </div>

                            {/* Propriété intellectuelle */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Propriété intellectuelle
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        L'ensemble du contenu de ce site web (textes, images, vidéos, logos, icônes, etc.)
                                        est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                                    </p>
                                    <p>
                                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
                                        des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
                                        sauf autorisation écrite préalable de ELEYA.
                                    </p>
                                    <p>
                                        Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient
                                        sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
                                        dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                                    </p>
                                </div>
                            </div>

                            {/* Données personnelles */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Protection des données personnelles
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                                        loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification,
                                        de suppression et d'opposition aux données personnelles vous concernant.
                                    </p>
                                    <p>
                                        Pour exercer ces droits ou pour toute question relative au traitement de vos données
                                        personnelles, vous pouvez nous contacter à l'adresse : contact@eleya.ai
                                    </p>
                                    <p>
                                        Pour plus d'informations, consultez notre
                                        <a href="/privacy-policy" className="text-[#194471] hover:text-[#194471]/80 underline ml-1">
                                            Politique de Confidentialité
                                        </a>.
                                    </p>
                                </div>
                            </div>

                            {/* Responsabilité */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Limitation de responsabilité
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        ELEYA s'efforce de fournir sur le site des informations aussi précises que possible.
                                        Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et
                                        des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers
                                        partenaires qui lui fournissent ces informations.
                                    </p>
                                    <p>
                                        Toutes les informations indiquées sur le site sont données à titre indicatif, et sont
                                        susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont
                                        pas exhaustifs.
                                    </p>
                                </div>
                            </div>

                            {/* Droit applicable */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Droit applicable et juridiction compétente
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Les présentes mentions légales sont régies par le droit français. En cas de litige,
                                        les tribunaux français seront seuls compétents.
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="bg-[#194471]/10 p-6 rounded-lg">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    8. Contact
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p>
                                        Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                                    </p>
                                    <p><strong>Email :</strong> contact@eleya.ai</p>
                                    <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                                    <p><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <p className="text-gray-500 font-sans text-sm">
                                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default MentionsLegalesPage; 