
# Helm Flux Cheatsheet

## What is Helm Flux?
Flux is a GitOps tool that automates the deployment of applications to Kubernetes. When combined with Helm, it allows for automated Helm releases management directly from Git repositories.

## How it Works
1. Flux monitors your Git repository for changes
2. When changes are detected in Helm charts or values
3. Flux automatically reconciles the cluster state with the desired state from Git
4. Handles Helm releases, upgrades, and rollbacks automatically

## Essential Components
- **HelmRepository**: Points to a Helm chart repository
- **HelmRelease**: Defines the desired state for a Helm release
- **HelmChart**: Represents a Helm chart from a source

## Common Commands

### Source Management

```bash
# Create a HelmRelease
flux create hr podinfo \
  --source=HelmRepository/podinfo \
  --chart=podinfo \
  --target-namespace=default

# List releases
flux get helmreleases

# Reconcile a release
flux reconcile helmrelease podinfo

# Suspend updates
flux suspend hr podinfo

# Resume updates
flux resume hr podinfo
```

## Troubleshooting

```bash
# Check release status
flux get helmrelease podinfo

# View release events
kubectl describe helmrelease podinfo

# View reconciliation logs
flux logs --level=error

# Debug release
flux suspend hr podinfo
flux reconcile hr podinfo --dry-run
```

## Best Practices
1. Always specify version in HelmRelease
2. Use values files for configuration
3. Set appropriate reconciliation intervals
4. Use kustomization for environment-specific values
5. Implement proper RBAC
6. Use sealed secrets for sensitive data


## Example HelmRelease Structure

```yaml
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: podinfo
  namespace: default
spec:
  interval: 5m
  chart:
    spec:
      chart: podinfo
      version: "6.x"
      sourceRef:
        kind: HelmRepository
        name: podinfo
        namespace: default
  values:
    replicaCount: 2
```

Monitoring
1. Use flux get all to see overall system status
2. Monitor reconciliation metrics using Prometheus
3. Set up alerts for failed reconciliations
4. Use flux events to track system events