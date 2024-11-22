# Kubernetes Cheatsheet

## What is Kubernetes?
Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was originally developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF).

## How Kubernetes Works
Kubernetes operates on a cluster architecture consisting of:

### Control Plane Components:
- **API Server**: Central management point for the cluster
- **etcd**: Distributed key-value store for cluster data
- **Scheduler**: Assigns pods to nodes
- **Controller Manager**: Manages various controllers
- **Cloud Controller Manager**: Interfaces with cloud providers

### Node Components:
- **Kubelet**: Ensures containers are running in pods
- **Kube-proxy**: Maintains network rules
- **Container Runtime**: Runs containers (e.g., Docker, containerd)

## Essential Kubernetes Concepts
1. **Pods**: Smallest deployable units
2. **Services**: Network abstraction for pod access
3. **Deployments**: Manages pod replicas
4. **ConfigMaps/Secrets**: Configuration management
5. **Namespaces**: Virtual clusters
6. **Volumes**: Storage abstraction

## Essential kubectl Commands

### Cluster Management

## Pod Operations

```bash
# List pods
kubectl get pods
kubectl get pods -o wide
kubectl get pods --all-namespaces
kubectl get pods -n <namespace>

# Pod details
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl logs -f <pod-name>  # Follow logs
kubectl exec -it <pod-name> -- /bin/bash

# Create and delete
kubectl create -f pod.yaml
kubectl delete pod <pod-name>
kubectl delete -f pod.yaml
```

## Service Management

```bash
# Service operations
kubectl get services
kubectl describe service <name>
kubectl expose deployment <name> --port=80 --type=LoadBalancer
kubectl delete service <name>
```

## Namespace Operations

```bash
# Namespace management
kubectl create namespace <name>
kubectl get namespaces
kubectl delete namespace <name>
kubectl config set-context --current --namespace=<name>
```

## ConfiMaps and secrets 

```bash
# ConfigMaps
kubectl create configmap <name> --from-file=<path>
kubectl get configmap
kubectl describe configmap <name>

# Secrets
kubectl create secret generic <name> --from-literal=key=value
kubectl get secrets
kubectl describe secret <name>
```

## Troubleshooting

```bash
# Debugging
kubectl describe <resource> <name>
kubectl logs <pod-name> -c <container-name>
kubectl exec -it <pod-name> -- /bin/sh
kubectl port-forward <pod-name> 8080:80

# Cluster health
kubectl get events
kubectl top nodes
kubectl top pods
```