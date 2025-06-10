import React from 'react';
import BasePage from './BasePage';

const SuppliersTermsPage = () => {
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
                            Suppliers Terms
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Terms and conditions for our suppliers and business partners.
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

                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    1. Introduction
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Ces conditions générales d'achat (les "Conditions") régissent les relations commerciales
                                        entre ELEYA (la "Société") et ses fournisseurs (les "Fournisseurs"). Elles s'appliquent
                                        à toutes les commandes passées par la Société auprès de ses Fournisseurs.
                                    </p>
                                    <p>
                                        L'acceptation d'une commande par un Fournisseur implique l'acceptation intégrale et sans
                                        réserve de ces Conditions, à l'exclusion de toutes autres conditions générales ou
                                        particulières du Fournisseur.
                                    </p>
                                </div>
                            </div>

                            {/* Commandes */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. Commandes
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Toutes les commandes doivent être passées par écrit (email, bon de commande, système électronique).
                                        Aucune commande verbale ne sera acceptée.
                                    </p>
                                    <p>
                                        Le Fournisseur dispose de 48 heures pour confirmer l'acceptation de la commande.
                                        Passé ce délai, la commande sera considérée comme refusée.
                                    </p>
                                    <p>
                                        Toute modification de commande doit faire l'objet d'un accord écrit entre les parties.
                                    </p>
                                </div>
                            </div>

                            {/* Prix et paiement */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Prix et conditions de paiement
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Les prix sont fermes et définitifs, exprimés en euros hors taxes, départ usine ou entrepôt
                                        du Fournisseur, emballage compris.
                                    </p>
                                    <p>
                                        Sauf stipulation contraire, les factures sont payables à 30 jours fin de mois de réception
                                        de la facture, sous réserve de la bonne exécution des prestations.
                                    </p>
                                    <p>
                                        En cas de retard de paiement, des pénalités de retard égales à trois fois le taux d'intérêt
                                        légal seront appliquées de plein droit.
                                    </p>
                                </div>
                            </div>

                            {/* Livraison */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Livraison et réception
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Les livraisons doivent être effectuées aux dates et lieux convenus. Tout retard doit
                                        être signalé immédiatement à la Société.
                                    </p>
                                    <p>
                                        La réception des marchandises se fait sous réserve de vérification de la conformité
                                        quantitative et qualitative. Tout défaut apparent doit être signalé dans les 8 jours.
                                    </p>
                                    <p>
                                        Les marchandises voyagent aux risques et périls du Fournisseur jusqu'à leur réception
                                        par la Société.
                                    </p>
                                </div>
                            </div>

                            {/* Garanties */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Garanties et responsabilité
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Le Fournisseur garantit que ses produits ou services sont conformes aux spécifications
                                        convenues, exempts de vices et conformes à la réglementation en vigueur.
                                    </p>
                                    <p>
                                        Le Fournisseur s'engage à maintenir une assurance responsabilité civile professionnelle
                                        couvrant les dommages qui pourraient résulter de l'exécution de ses prestations.
                                    </p>
                                    <p>
                                        En cas de non-conformité, le Fournisseur s'engage à reprendre ou remplacer gratuitement
                                        les produits défectueux dans les plus brefs délais.
                                    </p>
                                </div>
                            </div>

                            {/* Confidentialité */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Confidentialité et propriété intellectuelle
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Le Fournisseur s'engage à maintenir strictement confidentielles toutes les informations
                                        communiquées par la Société dans le cadre de leur relation commerciale.
                                    </p>
                                    <p>
                                        Sauf accord contraire, tous les droits de propriété intellectuelle sur les créations
                                        réalisées pour le compte de la Société appartiennent à cette dernière.
                                    </p>
                                </div>
                            </div>

                            {/* Résiliation */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Résiliation
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        En cas de manquement grave du Fournisseur à ses obligations, la Société peut résilier
                                        immédiatement le contrat après mise en demeure restée sans effet pendant 8 jours.
                                    </p>
                                    <p>
                                        La résiliation n'affecte pas les commandes en cours d'exécution, sauf décision contraire
                                        de la Société.
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
                                        Pour toute question concernant ces conditions fournisseurs :
                                    </p>
                                    <p><strong>Email :</strong> suppliers@eleya.ai</p>
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

export default SuppliersTermsPage; 