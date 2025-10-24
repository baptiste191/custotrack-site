# 📦 Makefile pour site web Vite + React + TS + Tailwind
# Commandes disponibles :
#   make            → installe et lance le serveur de dev
#   make dev        → lance le serveur de développement
#   make build      → build le projet pour la prod
#   make preview    → lance un serveur local pour prévisualiser le build
#   make install    → installe les dépendances
#   make clean      → nettoie les fichiers générés

# Nom du dossier de build
DIST_DIR = dist

# Commande par défaut
default: dev

# Installation des dépendances
install:
	@echo "📥 Installation des dépendances..."
	@npm install

# Lancement du serveur de développement
dev: install
	@echo "🚀 Lancement du serveur de développement..."
	@npm run dev

# Build du projet
build: install
	@echo "🏗️  Construction du projet..."
	@npm run build

# Prévisualisation de la version buildée
preview: build
	@echo "🧪 Lancement du serveur de prévisualisation..."
	@npm run preview

# Nettoyage des fichiers générés
clean:
	@echo "🧹 Nettoyage du dossier de build..."
	@rm -rf $(DIST_DIR) node_modules
	@echo "✅ Nettoyage terminé."
