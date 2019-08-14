# crds-kubernetes-talk


Podemos preguntarle a Kubernetes cuales `CRDs` conoce

    $ kubectl get crd
    No resources found.


## Crear un CRD desde el CLI

    $ kubectl apply -f crd.yaml
    customresourcedefinition.apiextensions.k8s.io/sswebsites.crds.cloudnative.mx created

Ahora podemos verificar si fue creado:

    $ kubectl get crd
    NAME                             CREATED AT
    sswebsites.crds.cloudnative.mx   2019-08-14T09:05:07Z

Una vez creada la estructura, se puede proceder a crear "instancias" de ese `CRD`

## Crear nuevas instancias del CRD

    $ kubectl apply -f data-crd.yaml
    simplewebsiteconfig.crds.cloudnative.mx/domix-website created


Con `kubectl` ahora podemos verificar si fue creado el nuevo `CRD`

    $ kubectl get sswebsites.crds.cloudnative.mx
    NAME            AGE
    domix-website   13s

Podríamos tambien describir el objeto como cualquier otro:

```
$ kubectl describe sswebsites.crds.cloudnative.mx domix-website
Name:         domix-website
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"crds.cloudnative.mx/v1alpha1","kind":"SimpleWebsiteConfig","metadata":{"annotations":{},"name":"domix-website","namespace":...
API Version:  crds.cloudnative.mx/v1alpha1
Kind:         SimpleWebsiteConfig
Metadata:
  Creation Timestamp:  2019-08-14T09:11:29Z
  Generation:          1
  Resource Version:    59730
  Self Link:           /apis/crds.cloudnative.mx/v1alpha1/namespaces/default/sswebsites/domix-website
  UID:                 6cbd1305-996e-44ab-b9e8-6d79c3e71f8f
Spec:
  Domain:  domingosuarez.com
  Email:   domingo.suarez@gmail.com
  Name:    Domingo Suarez Torres
Events:    <none>
```

O finalmente borrarlo

```
$ kubectl delete sswebsites.crds.cloudnative.mx domix-website
simplewebsiteconfig.crds.cloudnative.mx "domix-website" deleted
```